/* --- Global --- */
import React, { useState, useContext } from 'react';
import { BoxInject } from '3box-ui-state';
import { Button } from '@horizin/design-system-atoms';
import { Component } from '@horizin/ui-compose';
import { useEnableEffect, useOpenRequestEffect } from './effects';
import { Toast } from '@horizin/design-system-organisms';

import { PortalContext } from 'react-portal-system';

/* ---  Sub-Component --- */
const Tag = ({ label, ...props }) => <Button {...props}>{label}</Button>;

const ApproveTransaction = props => {
  return (
    <Atom.Flex>
      <Atom.Button green sm>
        Dispatch
      </Atom.Button>
      <Atom.Button sm sx={{ ml: 2 }}>
        Delete
      </Atom.Button>
    </Atom.Flex>
  );
};

/* --- Component --- */
const SendTransactionView = ({ box, ...props }) => {
  const [resultStatus, setResultStatus] = useState();
  const portal = useContext(PortalContext);
  const enabled = useEnableEffect(box);
  const login = useOpenRequestEffect(box);

  const sendHandler = () => {
    // Draft transaction
    const tx = {
      from: '0xbc28Ea04101F03aA7a94C1379bc3AB32E65e62d3', // Required
      to: '0x89D24A7b4cCB1b6fAA2625Fe562bDd9A23260359', // Required (for non contract deployments)
      data: '0x', // Required
      gasPrice: '0x02540be400', // Optional
      gasLimit: '0x9c40', // Optional
      value: '0x00', // Optional
      nonce: '0x0114' // Optional
    };

    // Send transaction
    box.extensions.walletconnect.instance
      .sendTransaction(tx)
      .then(result => {
        // Returns transaction id (hash)
        console.log(result);
        setResultStatus(result);
        portal.openToast({
          label: 'Transaction Signed',
          content: <ApproveTransaction />
        });
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

      {resultStatus && <Toast content={<div>Transaction Confirmed</div>} />}

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

SendTransactionView.defaultProps = {
  loggedOutLabel: 'Send Transaction',
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

SendTransactionView.propTypes = {
  spaceAuto: PropTypes.bool
};

export const SendTransaction = props => (
  <BoxInject>
    <SendTransactionView {...props} />
  </BoxInject>
);
