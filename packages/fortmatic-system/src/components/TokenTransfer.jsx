/* --- Global --- */
import React, { useState } from 'react';
import { FortmaticInject, FortmaticContext } from '../index';
import Context from '../Context';
import { utils } from 'ethers';
import jsonInterface from '../contracts/ERC20Detailed';

const TokenTransferView = ({ fortmatic, ...props }) => {
  const [loading, setLoading] = useState(false);

  /**
   * @name ActionHandler
   */
  const actionHandler = () => {
    setLoading(true);
    console.log(fortmatic.web3.eth, 'fortmatic.web3.ethfortmatic.web3.eth');
    const tokenContract = fortmatic.web3.eth.contract(jsonInterface.abi);

    // Instantiate contract
    const tokenContractInstance = tokenContract.at(
      '0x8EBC7785b83506AaA295Bd9174e6A7Ad5681fb80'
    );
    const toAddress = '0xE0cef4417a772512E6C95cEf366403839b0D6D6D';

    // Calculate contract compatible value for transferFrom with proper decimal points using BigNumber
    const tokenDecimals = web3.toBigNumber(18);
    const tokenAmountToTransferFrom = web3.toBigNumber(18);
    const calculatedTransferFromValue = web3.toHex(
      tokenAmountToTransferFrom.mul(web3.toBigNumber(10).pow(tokenDecimals))
    );

    // Get user account wallet address first
    web3.eth.getAccounts(function(error, accounts) {
      if (error) throw error;
      // Send ERC20 transaction with web3
      tokenContractInstance.transfer.sendTransaction(
        toAddress,
        calculatedTransferFromValue,
        { from: accounts[0] },
        function(error, txnHash) {
          if (error) throw error;
          console.log(txnHash);
        }
      );
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

export const TokenTransfer = props => (
  <FortmaticContext>
    {fortmatic => (
      <Atom.Box>
        {console.log(fortmatic, 'fortmaticfortmaticfortmaticContxt')}
        <TokenTransferView {...props} fortmatic={fortmatic} />
      </Atom.Box>
    )}
  </FortmaticContext>
);
