/* --- Global --- */
import React from 'react';
import { BoxInject } from '3box-ui-state';
import { Button } from '@horizin/design-system-atoms';
import { Component } from '@horizin/ui-compose';
import { useEnableEffect, useOpenRequestEffect } from './effects';

/* ---  Sub-Component --- */
const Tag = ({ label, ...props }) => <Button {...props}>{label}</Button>;

/* --- Component --- */
const LogoutView = ({ box, ...props }) => {
  // const enabled = useEnableEffect(box);
  const login = useOpenRequestEffect(box);

  const sendHandler = () => {
    // Send transaction
    box.extensions.walletconnect.instance
      .killSession()
      .then(result => {
        // Returns transaction id (hash)
        console.log(result);
      })
      .catch(error => {
        // Error returned when rejected
        console.error(error);
      });
  };

  return (
    <>
      <span onClick={sendHandler}>
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

LogoutView.defaultProps = {
  loggedOutLabel: 'Logout',
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

LogoutView.propTypes = {
  spaceAuto: PropTypes.bool
};

export const Logout = props => (
  <BoxInject>
    <LogoutView {...props} />
  </BoxInject>
);
