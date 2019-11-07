import {WalletConnectInit, QRModal} from '3box-walletconnect-sync';

export const walletConnector = new WalletConnectInit({
	bridge: 'https://bridge.walletconnect.org', // Required
});

export const wallectConnectionListeners = {
	init: walletConnector => {
		if (!walletConnector.connected) {
			walletConnector.createSession().then(() => {
				const uri = walletConnector.uri;
				// QRModal.open(uri, () => {
				// 	console.log('QR Code Modal closed');
				// });
			});
		}
	},
	connect: walletConnector => {
		walletConnector.on('connect', (error, payload) => {
			if (error) {
				throw error;
			}
			QRModal.close();
			const {accounts, chainId} = payload.params[0];
			console.log(accounts, chainId, 'accounts, chainId');
		});
	},
	update: walletConnector => {
		walletConnector.on('session_update', (error, payload) => {
			if (error) {
				throw error;
			}

			// Get updated accounts and chainId
			const {accounts, chainId} = payload.params[0];
		});
	},
	disconnect: walletConnector => {
		walletConnector.on('disconnect', (error, payload) => {
			if (error) {
				throw error;
			}

			// Delete walletConnector
		});
	},
};

export const walletConnectPlugin = {
	name: 'walletconnect',
	version: '0.0.1',
	static: WalletConnectInit,
	instance: walletConnector,
	listeners: wallectConnectionListeners,
};
