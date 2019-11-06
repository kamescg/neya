/**
 * @name FormFeedback
 * @description Capture feedback from users.
 * @version 0.0.1
 */

/* --- Global --- */
import React, {useState} from 'react';
import {PropTypes} from 'prop-types';
import useForm from 'react-hook-form';
import {GeograpicLocation} from './GeograpicLocation';
import {Compensation} from './Compensation';
import {Reputation} from './Repuation';
import {Skillset} from './Skillset';
const styles = {
  searchSelect: {
    width: 200,
    mr: 4,
  },
};

/* --- Component --- */
const FormFeedback = ({styled, ...props}) => {
  /* --- Form Hook State --- */
  const {handleSubmit, register, errors} = useForm();

  /* --- Component State --- */
  const [isComplete, setComplete] = useState();

  /* --- Submit Handler --- */
  const onSubmit = values => {
    if (values) {
      setComplete(true); // Validate submission and set complete status to true
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Atom.Flex column sx={{flex: 1, p: 3, width: '100%'}}>
        <Atom.Flex column sx={{flex: 1, width: '100%'}}>
          <GeograpicLocation
            isComplete={isComplete}
            register={register}
            errors={errors}
          />
          <Compensation
            isComplete={isComplete}
            register={register}
            errors={errors}
          />
          <Reputation
            isComplete={isComplete}
            register={register}
            errors={errors}
          />
          <Skillset
            isComplete={isComplete}
            register={register}
            errors={errors}
          />
        </Atom.Flex>
        <Atom.Box sx={{}}>
          <Atom.Button bg="green" color="white" sx={{width: '100%'}}>
            <Atom.Flex center column>
              <Atom.Image
                sx={{maxWidth: 30, m: 3, borderRadius: 9999}}
                src="data:image/png;base64,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"
              />
              {isComplete ? (
                <Atom.Span>Searching...</Atom.Span>
              ) : (
                <Atom.Span>Search</Atom.Span>
              )}
            </Atom.Flex>
          </Atom.Button>
        </Atom.Box>
      </Atom.Flex>
    </form>
  );
};

FormFeedback.defaultProps = {
  styled: {},
};

FormFeedback.propTypes = {
  styled: PropTypes.object,
};

export default FormFeedback;

/* --- Sub-Components --- */
