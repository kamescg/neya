/* eslint-disable complexity */
import dot from 'dot-prop-immutable-chain';

export default (state, action) => {
  switch (action.type) {
    case 'SET_ADDRESS':
      return {
        ...state,
        address: action.payload
      };
    case 'SET_PROVIDER':
      return {
        ...state,
        web3: action.payload
      };

    default:
      throw new Error(`No Reducer Type Set ${action.type} `);
  }
};
