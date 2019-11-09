/* --- Global --- */
import React from 'react';
import { BoxInject } from '3box-ui-state';
import { Button } from '@horizin/design-system-atoms';
import { Component } from '@horizin/ui-compose';
import { useEnableEffect, useOpenRequestEffect } from './effects';

/* ---  Sub-Component --- */
const Tag = ({ label, ...props }) => <Button {...props}>{label}</Button>;

/* --- Component --- */
const LoginView = ({ box, ...props }) => {
  const enabled = useEnableEffect(box);
  const login = useOpenRequestEffect(box);
  return (
    <>
      <span onClick={box.login}>
        {Component(props.componentLoggedOut, {
          label: props.loggedOutLabel,
          ...props.sxLoggedOut
        })}
      </span>

      {login.isDispatched && !login.isLoggedIn
        ? Component(props.componentLoading, {
            label: props.loadingLabel,
            ...props.sxLoading
          })
        : null}
      {login.isLoggedIn && (
        <span>
          {props.children ||
            Component(props.componentLoggedIn, {
              label: props.loggedInLabel,
              ...props.sxLoggedIn
            })}
        </span>
      )}
    </>
  );
};

LoginView.defaultProps = {
  loggedOutLabel: 'ΞID Login',
  loadingLabel: 'ΞID Loading...',
  loggedInLabel: 'ΞID Active',
  componentLoggedOut: Tag,
  componentLoading: Tag,
  componentLoggedIn: Tag,
  display: 'tag',
  sxLoggedOut: {
    pointer: true,
    tag: true
  },
  sxLoading: {
    pointer: true,
    tag: true
  },
  sxLoggedIn: {
    pointer: true,
    tag: true
  }
};

LoginView.propTypes = {
  spaceAuto: PropTypes.bool
};

export const Login = props => (
  <BoxInject>
    <LoginView {...props} />
  </BoxInject>
);
