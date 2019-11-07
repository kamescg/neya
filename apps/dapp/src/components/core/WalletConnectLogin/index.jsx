/* --- Global --- */
import React from 'react';
/* --- Local --- */
import {QRModal, WalletConnectInit} from '3box-walletconnect-sync';

/* ------ Component ------ */
class WalletConnectButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // Create a walletConnector
    const walletConnector = new WalletConnectInit({
      bridge: 'https://bridge.walletconnect.org', // Required
    });

    console.log(walletConnector, 'walletConnectorwalletConnector');

    // Check if connection is already established
    if (!walletConnector.connected) {
      // create new session
      walletConnector.createSession().then(() => {
        // get uri for QR Code modal
        const uri = walletConnector.uri;
        // display QR Code modal
        // QRModal.open(uri, () => {
        //   console.log('QR Code Modal closed');
        // });
      });
    }

    // Subscribe to connection events
    walletConnector.on('connect', (error, payload) => {
      if (error) {
        throw error;
      }

      // Close QR Code Modal
      QRModal.close();

      // Get provided accounts and chainId
      const {accounts, chainId} = payload.params[0];
      console.log(accounts, chainId, 'accounts, chainId');
    });

    walletConnector.on('session_update', (error, payload) => {
      if (error) {
        throw error;
      }

      // Get updated accounts and chainId
      const {accounts, chainId} = payload.params[0];
    });

    walletConnector.on('disconnect', (error, payload) => {
      if (error) {
        throw error;
      }

      // Delete walletConnector
    });
  }

  componentDidUpdate() {}

  render() {
    return <Atom.Flex></Atom.Flex>;
  }
}

export default WalletConnectButton;
