import {useState} from 'react';
import {EthersInject} from 'ethers-system';
import useForm from 'react-hook-form';

import GnosisSafe from 'contracts/safe/GnosisSafe';
/**
 * @function DeployView
 * @param {Object} props props
 * @returns {Object} Form Component
 */
const DeployView = ({
  address,
  amount,
  ethers,
  contractName,
  delta,
  styled,
  ...props
}) => {
  const {handleSubmit, register, errors} = useForm();
  const [deploying, setDeploying] = useState(false);

  // Form Submit Handler
  const onSubmit = async values => {
    ethers.deployContract({
      delta,
      contract: Token,
      values: [ethers.address, 1, ethers.address, '0x'],
    });
    setDeploying(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Molecule.Field
        name="name"
        variants={['text']}
        placeholder="Name (DEV Token)"
        label="Name"
        register={register}
        error={errors}
      />
      <Molecule.Field
        name="symbol"
        variants={['text']}
        placeholder="Name (DEV Token)"
        label="Symbol"
        placeholder="Symbol"
        register={register}
        error={errors}
      />
      <Molecule.Field
        name="name"
        variants={['text']}
        placeholder="Name (DEV Token)"
        label="Decimals"
        placeholder="Decimals"
        register={register}
        error={errors}
      />

      <Molecule.Field name="name" placeholder="Name (DEV Token)" />
      <Molecule.Field name="symbol" placeholder="Symbol (DEV)" />
      <Molecule.Field name="decimals" placeholder="Decimals (0-18)" />
      <Molecule.Field name="amount" placeholder="Amount (1,000,000)" />
      <Molecule.Field name="image" placeholder="Image" />
      {deploying ? (
        <Atom.Span>Sending Tokens</Atom.Span>
      ) : (
        <Atom.Button sm type="submit" variant="green" fullWidth>
          Deploy Token
        </Atom.Button>
      )}
    </form>
  );
};

export const Deploy = props => (
  <EthersInject>
    <DeployView {...props} />
  </EthersInject>
);
