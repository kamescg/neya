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

/* --- Component --- */
const FormStorageSet = ({box, ...props}) => {
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
    props.onSubmit && props.onSubmit(values);
    box.setMerge({
      access: 'public',
      key: 'jobsList',
      value: values,
      space: 'neya', // If space is passed set data in space.
    });
    // box.setMerge({
    //   access: 'public',
    //   key: 'jobs',
    //   value: values,
    //   // space: props.space, // If space is passed set data in space.
    // });
  };

  /**
   * @name onResetHandler
   * @description Reset form values.
   */
  const onResetHandler = () => {
    setStatus(false);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="title"
          variants={['text']}
          register={register}
          errors={errors}
          placeholder="Title"
          sx={{
            my: 1,
          }}
        />
        <Field
          name="description"
          variants={['text']}
          register={register}
          errors={errors}
          placeholder="Description"
          sx={{
            my: 1,
          }}
        />
        <Atom.Flex between>
          <AccessSpace space="nesa">
            <AccessButton {...props.accessLevel} />
          </AccessSpace>
          <SumbitStatusHandler status={status} />
        </Atom.Flex>
      </form>
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
          <span onClick={resetHandler}>
            <Atom.Span>Reset Form</Atom.Span>
          </span>
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
