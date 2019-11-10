/**
 * @name FormStorageSet
 * @author kamescg
 * @version 0.0.1
 * @description Generic 3Box storage set form.
 */

/* --- Global --- */
import React, {useState, useEffect} from 'react';
import useForm from 'react-hook-form';
import {Field} from '@horizin/design-system-molecules';
import {AccessButton, AccessSpace} from '3box-ui-system';
import {BoxInject} from '3box-ui-state';
import CoinbaseCommerceButton from 'react-coinbase-commerce';
import 'react-coinbase-commerce/dist/coinbase-commerce-button.css';

/* --- Component --- */
const FormStorageSet = ({box, ...props}) => {
  const [values, setValue] = useState();
  const [status, setStatus] = useState(props.status);
  const {handleSubmit, register, errors, reset} = useForm();

  /**
   * @name statusParentPassEffect
   * @description Set status from parent component state.
   */
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  /**
   * @name onSubmitHandler
   * @description When form is submitted pass values back to parent component.
   * @todo Add field validation via Yup.
   */
  const onSubmit = async values => {
    setValue(true);
    const url = 'http://0.0.0.0:9000/charge/create';
    // fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/x-www-form-urlencoded',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(values),
    // })
    //   .then(function(response) {
    //     const res = response.json();
    //     console.log(res);
    //     // console.log(response.json());
    //     // console.log(await response.body);
    //     // return response.json();
    //   })
    //   .then(function(data) {});
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="title"
          variants={['text']}
          register={register}
          errors={errors}
          placeholder="Job Name"
          sx={{
            minHeight: 50,
            my: 1,
          }}
        />
        <Field
          name="description"
          variants={['text']}
          as="textarea"
          register={register}
          errors={errors}
          placeholder="Job Description"
          sx={{
            minHeight: 200,
            my: 2,
          }}
        />
        <Atom.Flex between>
          {/* <AccessSpace space="neya">
            <AccessButton {...props.accessLevel} />
          </AccessSpace> */}
          <Atom.Button type="submit" sx={{width: '100%'}}>
            Create Job
          </Atom.Button>
          <SumbitStatusHandler status={status} />
        </Atom.Flex>
      </form>
      {
        <Atom.Flex
          center
          column
          sx={{opacity: values ? 1 : 0.7, mt: 3, zIndex: 1000}}>
          <CoinbaseCommerceButton
            styled={styles.checkout}
            checkoutId={'20b27ab4-be1f-4fc1-a46a-cd4a1b0f3c65'}>
            Fund Job with Credit/Crypto
          </CoinbaseCommerceButton>
        </Atom.Flex>
      }
    </>
  );
};

const SumbitStatusHandler = props => {
  return (
    <Atom.Span>
      {props.status && (
        <Atom.Flex column>
          <Atom.Span>
            <strong>Set Success!</strong> Check your profile.
          </Atom.Span>
        </Atom.Flex>
      )}
    </Atom.Span>
  );
};

export default props => (
  <BoxInject>
    <FormStorageSet {...props} />
  </BoxInject>
);

const styles = {
  checkout: {
    background: 'blue',
    borderRadius: 5,
    padding: 24,
    color: 'white',
    fontSize: '18px',
  },
  img: {
    borderRadius: 9999,
    boxShadow: 1,
    width: 120,
  },
  avatar: {
    boxShadow: 5,
    border: '1px solid #FFF',
    width: 120,
  },
  logo: {
    width: 120,
  },
  desktopPreview: {
    p: 4,
    ml: [1, 1, '-50%'],
    width: [1, 1, '130%'],
  },
};
