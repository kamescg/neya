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
          // let fm = new Fortmatic(key);
          // const web3Instance = new Web3(fm.getProvider());
          console.log(window.web3Provider, 'logging in');
          const addressGot = await window.web3Provider._web3Provider
            .selectedAddress;
          // fortmatic.web3.eth.getAccounts
          const instance = await state.static.openBox(
            addressGot,
            window.web3Provider.currentProvider
          );
          const profile = await state.static.getProfile(state.address);
          const list = await state.static.listSpaces(state.address);
          const verified = await state.static.getVerifiedAccounts(profile);
          let spaces = {};
          console.log(state, 'coool state');
          list.forEach(e => {
            spaces[e] = undefined;
          }); // Create empty space objects list.
          dispatch({
            type: 'SET_ADDRESS',
            address: addressGot
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
