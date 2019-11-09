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

const Rejected = props => {
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
const SignClaimView = ({ box, ...props }) => {
  const [resultStatus, setResultStatus] = useState();
  const portal = useContext(PortalContext);
  const enabled = useEnableEffect(box);
  const login = useOpenRequestEffect(box);

  const sendHandler = () => {
    // Draft Custom Request
    const customRequest = {
      id: 1,
      jsonrpc: '2.0',
      method: '3id_signClaim',
      params: {
        payload: {
          name: 'kames'
        },
        did: 'did:3:bafy....',
        space: 'space1',
        expiresIn: 123456
      }
    };

    // Send transaction
    box.extensions.walletconnect.instance
      .sendCustomRequest(customRequest)
      .then(result => {
        // Returns request result
        console.log(result, 'qr results');
        portal.openToast({
          label: 'Claim Signed',
          content: <ApproveTransaction />
        });
      })
      .catch(error => {
        // Error returned when rejected
        portal.openToast({
          label: 'Claim Rejected',
          status: 'failure'
        });
        console.error(error, 'rejected');
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

SignClaimView.defaultProps = {
  loggedOutLabel: 'Sign Claim',
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

SignClaimView.propTypes = {
  spaceAuto: PropTypes.bool
};

export const SignClaim = props => (
  <BoxInject>
    <SignClaimView {...props} />
  </BoxInject>
);
