import WalletConnect from '@walletconnect/browser';
import WalletConnectQRCodeModal from '@walletconnect/qrcode-modal';

// Create a walletConnector
const walletConnector = new WalletConnect({
  bridge: 'https://bridge.walletconnect.org' // Required
});

if (!walletConnector.connected) {
  walletConnector.createSession().then(() => {
    const uri = walletConnector.uri;
    WalletConnectQRCodeModal.open(uri, () => {
      console.log('QR Code Modal closed');
    });
  });
}

// Subscribe to connection events
walletConnector.on('connect', (error, payload) => {
  if (error) {
    throw error;
  }
  WalletConnectQRCodeModal.close();

  const { accounts, chainId } = payload.params[0];
});

walletConnector.on('session_update', (error, payload) => {
  if (error) {
    throw error;
  }
  const { accounts, chainId } = payload.params[0];
});

walletConnector.on('disconnect', (error, payload) => {
  if (error) {
    throw error;
  }
});
