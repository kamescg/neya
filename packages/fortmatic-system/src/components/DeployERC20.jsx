/* --- Global --- */
import React, { useState } from 'react';
import { FortmaticInject, FortmaticContext } from '../index';
import Context from '../Context';
import { ethers, utils } from 'ethers';
// import jsonInterface from '../contracts/ERC20Detailed';
import Token from '../contracts/ERC20Detailed';

const DeployERC20View = ({ fortmatic, ...props }) => {
  const [loading, setLoading] = useState(false);

  /**
   * @name ActionHandler
   */
  const actionHandler = async () => {
    setLoading(true);
    fortmatic.web3.eth.getAccounts(async function(error, accounts) {
      if (error) throw error;
      const factory = await new ethers.ContractFactory(
        Token.abi,
        Token.bytecode
      );
      const tx = factory.getDeployTransaction('DEV', 'DEV', 18);
      console.log(tx, 'txtxtx');
      fortmatic.web3.eth.sendTransaction({
        from: accounts[0],
        data: tx.data
      });
    });
  };

  return (
    <Atom.Flex>
      <Atom.Button onClick={actionHandler}>
        {loading ? 'Loading...' : 'Deploy Contract'}
      </Atom.Button>
    </Atom.Flex>
  );
};

export const DeployERC20 = props => (
  <FortmaticContext>
    {fortmatic => (
      <Atom.Box>
        {console.log(fortmatic, 'fortmaticfortmaticfortmaticContxt')}
        <DeployERC20View {...props} fortmatic={fortmatic} />
      </Atom.Box>
    )}
  </FortmaticContext>
);
