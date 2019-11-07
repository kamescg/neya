import { WalletConnectInit, QRModal } from '3box-walletconnect-sync';
/**
 * @function useAddExtension
 * @description Add extension to 3Box State
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useState, useEffect } from 'react';

/* --- Component --- */
const useAddExtension = (state, dispatch, extension = {}) => {
  const [dispatched, setDispatched] = useState();

  useEffect(() => {
    if (!dispatched && !state.extensions[extension.name]) {
      if (extension.name === 'walletconnect') {
        const QR = extension.components.qr;
        const walletConnector = extension.loader.init(extension);
        // Initialize Listeners
        extension.listeners.init(walletConnector, extension, dispatch);
        extension.listeners.update(walletConnector, extension, dispatch);
        window.listen = extension.listeners.disconnect(
          walletConnector,
          extension,
          dispatch
        );
        window.listen = extension.listeners.connect(
          walletConnector,
          extension,
          dispatch
        );
        window.listen = extension.listeners.callRequest(walletConnector);

        const id = 'walletconnect';

        dispatch({
          type: 'EXTENSION_ADD_SUCCESS',
          id: id,
          payload: {
            events: [],
            instance: walletConnector
          }
        });
      }

      // setDispatched(extension);
    }
  }, [state.isEnableAuto]);

  return dispatched;
};

/* --- Export --- */
export default useAddExtension;
