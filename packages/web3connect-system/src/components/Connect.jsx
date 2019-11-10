import React from 'react';
import Web3 from 'web3';
import Web3Connect from 'web3connect';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { ethers } from 'ethers';
// import Portis from '@portis/web3';
import Fortmatic from 'fortmatic';
import Torus from '@toruslabs/torus-embed';

export const Connect = props => (
  <Web3Connect.Button
    network="mainnet" // optional
    style={{
      padding: 4
    }}
    providerOptions={{
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: '99aa5c18ffcd4d6a83bb9c4d911d9e7d' // required
        }
      },
      fortmatic: {
        package: Fortmatic, // required
        options: {
          key: 'pk_test_811EF9842FE79F43' // required
        }
      },
      torus: {
        package: Torus, // required
        options: {
          enableLogging: false, // optional
          buttonPosition: 'bottom-left', // optional
          buildEnv: 'production', // optional
          showTorusButton: true, // optional
          enabledVerifiers: {
            // optional
            google: false // optional
          }
        }
      }
    }}
    onConnect={async provider => {
      const web3 = await new ethers.providers.Web3Provider(provider); // add provider to web3
      window.web3Injected = web3;
    }}
    onClose={() => {
      console.log('Web3Connect Modal Closed'); // modal has closed
    }}
  />
);
