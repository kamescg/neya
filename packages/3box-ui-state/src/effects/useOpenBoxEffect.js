/**
 * @function useOpenBoxEffect
 * @description Auto enable the 3Box authentication.
 * @param {Object} state
 * @param {Object} dispatch
 */

import Fortmatic from 'fortmatic';

/* --- Global --- */
import { useState, useEffect } from 'react';

const key = 'pk_test_811EF9842FE79F43';
/* --- Component --- */
const useOpenBoxEffect = (state, dispatch) => {
  const [dispatched, setDispatched] = useState();

  useEffect(() => {
    try {
      if (state.isLoggingIn) {
        const runEffect = async () => {
          const accounts =
            (window.web3.currentProvider &&
              window.web3.currentProvider.selectedAddress) ||
            window.web3._web3Provider.account;

          const prd =
            (window.web3Injected && window.web3Injected._web3Provider) ||
            window.web3.currentProvider;
          console.log(prd, 'prdprd');
          const instance = await state.static.openBox(accounts, prd);
          const profile = await state.static.getProfile(state.address);
          const list = await state.static.listSpaces(state.address);
          const verified = await state.static.getVerifiedAccounts(profile);
          let spaces = {};

          list.forEach(e => {
            spaces[e] = undefined;
          }); // Create empty space objects list.

          dispatch({
            type: 'SET_ADDRESS',
            address: accounts
          });
          dispatch({
            type: 'OPEN_SUCCESS',
            profile,
            instance,
            spaces,
            verified
          });
          setDispatched(true);
        };
        runEffect();
      }
    } catch (error) {
      dispatch({
        type: 'OPEN_FAILURE',
        err: error
      });
      setDispatched(false);
    }
  }, [state.isLoggingIn]);

  return dispatched;
};

/* --- Export --- */
export default useOpenBoxEffect;
