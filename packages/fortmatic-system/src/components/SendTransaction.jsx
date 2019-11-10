/* --- Global --- */
import React from 'react';
import { FortmaticInject, FortmaticContext } from '../index';
import Context from '../Context';
import { utils } from 'ethers';
const SendTransactionView = ({ fortmatic, ...props }) => {
  const actionHandler = () => {
    // TODO: Step 3: Send Transaction Implementation
    // console.log(fortmatic, props, 'accccttion');
    fortmatic.web3.eth.sendTransaction(
      {
        // From address will automatically be replaced by the address of current user
        from: '0xaE11042b07C0B8F01Faa1915Df8167e5650FBc4d',
        to: '0xaE11042b07C0B8F01Faa1915Df8167e5650FBc4d',
        // value: fortmatic.web3.utils.toWei(1, 'ether')
        value: utils.parseEther('1.0')
      },
      () => {}
    );
    // End Step 3
  };

  return (
    <Atom.Flex>
      <Atom.Button onClick={actionHandler}>Send Transaction</Atom.Button>
    </Atom.Flex>
  );
};

// export const SendTransaction = props => (
//   <FortmaticInject>
//     <SendTransactionView {...props} />
//   </FortmaticInject>
// );

export const SendTransaction = props => (
  <FortmaticContext>
    {fortmatic => (
      <Atom.Box>
        {console.log(fortmatic, 'fortmaticfortmaticfortmaticContxt')}
        <SendTransactionView {...props} fortmatic={fortmatic} />
      </Atom.Box>
    )}
  </FortmaticContext>
);
