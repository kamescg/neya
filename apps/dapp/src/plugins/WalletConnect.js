import {WalletConnectInit, QRModal} from '3box-walletconnect-sync';

// export const walletConnector = new WalletConnectInit({
// 	bridge: 'https://bridge.walletconnect.org', // Required
// });

export const wallectConnectionLoader = {
	init: extension => {
		return new extension.static({
			bridge: 'https://bridge.walletconnect.org', // Required
		});
	},
};

export const wallectConnectionListeners = {
	init: walletConnector => {
		if (!walletConnector.connected) {
			walletConnector.createSession().then(() => {
				const uri = walletConnector.uri;
				QRModal.open(uri, () => {
					console.log('QR Code Modal closed');
				});
			});
		}
	},
	connect: (walletConnector, extension, dispatch) => {
		return walletConnector.on('connect', (error, payload) => {
			if (error) {
				throw error;
			}
			extension.components.qr.close();
			const {accounts, chainId} = payload.params[0];

			dispatch({
				type: 'WALLET_CONNECT_ON_CONNECT',
				payload: payload.params[0],
			});
			dispatch({
				type: 'UPDATE_WALLET_CONNECT_INSTANCE',
				payload: walletConnector,
			});
		});
	},
	request: walletConnector => {
		return walletConnector.on('session_request', (error, payload) => {
			if (error) {
				throw error;
			}
			console.log('wc session_update');
			// Get updated accounts and chainId
			const {accounts, chainId} = payload.params[0];
		});
	},
	update: walletConnector => {
		return walletConnector.on('session_update', (error, payload) => {
			if (error) {
				throw error;
			}
			console.log('wc session_update');
			// Get updated accounts and chainId
			const {accounts, chainId} = payload.params[0];
		});
	},
	disconnect: walletConnector => {
		return walletConnector.on('disconnect', (error, payload) => {
			if (error) {
				throw error;
			}
			console.log('wc disconnect');

			// Delete walletConnector
		});
	},
	callRequest: walletConnector => {
		return walletConnector.on('call_request', (error, payload) => {
			console.log('wc call_request');
			if (error) {
				throw error;
			}
			// Get updated accounts and chainId
			const {accounts, chainId} = payload.params[0];
		});
	},
};

export const walletConnectPlugin = {
	name: 'walletconnect',
	version: '0.0.1',
	static: WalletConnectInit,
	loader: wallectConnectionLoader,
	listeners: wallectConnectionListeners,
	components: {
		qr: QRModal,
	},
};
