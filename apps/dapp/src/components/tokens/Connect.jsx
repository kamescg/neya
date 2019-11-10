/**
 * @function Connect
 * @param {Object} props props
 * @returns {Object} Form Component
 */
import React, {useState, useEffect} from 'react';
import {EthersInject} from 'ethers-system';
import useForm from 'react-hook-form';

export const ConnectView = ({
  ethers,
  contractAddress,
  contractType,
  delta,
  styled,
  ...props
}) => {
  const {handleSubmit, register, errors} = useForm();
  const [address, setAddress] = useState(props.address);
  const [deploying, setDeploying] = useState(false);

  // Form Submit Handler
  const onSubmit = async values => {
    ethers.initContract({
      delta,
      abi: props.contract.abi,
      address: props.address,
      contractName: props.contractName,
    });
    // setDeploying(true);
  };

  useEffect(() => {
    if (address) console.log('addresssss');
    ethers.initContract({
      abi: props.contract.abi,
      address: address,
      contractName: props.contractName,
    });
  }, [address]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Molecule.Field name="address" placeholder="Address" />
      {
        <Atom.Button sm type="submit" variant="green">
          Connect to Token Contract
        </Atom.Button>
      }
    </form>
  );
};

export const Connect = props => (
  <EthersInject>
    <ConnectView {...props} />
  </EthersInject>
);
