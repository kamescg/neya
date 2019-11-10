/**
 * @name FortmaticContext
 * @description Initialize Fortmatic Context
 */
/* --- Global --- */
import { createContext } from 'react';

/* --- Components --- */
const Context = createContext({
  web3: undefined
});

export default Context;
