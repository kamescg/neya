/* --- Global --- */
import React, { useState } from 'react';
import { FortmaticInject, FortmaticContext } from '../index';
import Context from '../Context';
import { ethers, utils } from 'ethers';
import GnosisSafe from '../contracts/safe/GnosisSafe';

const DeployGnosisSafeView = ({ fortmatic, ...props }) => {
  const [loading, setLoading] = useState(false);

  /**
   * @name ActionHandler
   */
  const actionHandler = async () => {
    setLoading(true);
    fortmatic.web3.eth.getAccounts(async function(error, accounts) {
      if (error) throw error;
      const factory = await new ethers.ContractFactory(
        GnosisSafe.abi,
        GnosisSafe.bytecode
      );
      const tx = factory.getDeployTransaction(
        [accounts[0]],
        1,
        accounts[0],
        '0x'
      );
      fortmatic.web3.eth.sendTransaction({
        from: accounts[0],
        data: tx
      });
    });
  };

  return (
    <Atom.Flex>
      <Atom.Button onClick={actionHandler}>
        {loading ? 'Loading...' : 'Transfer Tokens'}
      </Atom.Button>
    </Atom.Flex>
  );
};

export const DeployGnosisSafe = props => (
  <FortmaticContext>
    {fortmatic => (
      <Atom.Box>
        {console.log(fortmatic, 'fortmaticfortmaticfortmaticContxt')}
        <DeployGnosisSafeView {...props} fortmatic={fortmatic} />
      </Atom.Box>
    )}
  </FortmaticContext>
);
