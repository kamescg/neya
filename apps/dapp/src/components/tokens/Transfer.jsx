import {useState} from 'react';
import {EthersInject} from 'ethers-system';
import useForm from 'react-hook-form';
import Token from 'contracts/ERC20';
/**
 * @function ERC20TokenTransfer
 * @param {Object} props props
 * @returns {Object} Form Component
 */
const ERC20TokenTransfer = ({
  address,
  amount,
  ethers,
  contractName,
  delta,
  styled,
  ...props
}) => {
  const {handleSubmit, register, errors} = useForm();
  const [state, setState] = useState();
  const [deploying, setDeploying] = useState(false);

  // Form Submit Handler
  const onSubmit = async values => {
    ethers.contracts[contractName].transfer(
      values.address,
      Number(values.amount || 18),
      {
        gasLimit: 999999,
        gasPrice: 999999,
      },
    );
    setDeploying(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Molecule.Field
        name="amount"
        label="Amount"
        defaultValue={amount}
        placeholder="Amount"
        register={register}
        errors={errors}
      />
      <Molecule.Field
        name="address"
        label="Address"
        defaultValue={address}
        register={register}
        errors={errors}
        placeholder="Address"
      />
      {deploying ? (
        <Atom.Span>Sending Tokens</Atom.Span>
      ) : (
        <Atom.Button sm type="submit" variant="green" fullWidth>
          Send Tokens
        </Atom.Button>
      )}
    </form>
  );
};

export const Transfer = props => (
  <EthersInject>
    <ERC20TokenTransfer {...props} />
  </EthersInject>
);
