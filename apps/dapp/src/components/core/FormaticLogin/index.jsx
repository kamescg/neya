import {useState, useEffect} from 'react';
import {Fortmatic} from 'fortmatic-system';

const key = 'pk_test_811EF9842FE79F43';

const FormaticLogin = props => {
  const [web3, setWeb3] = useState();

  const actionHandler = () => {
    // TODO: Step 3: Send Transaction Implementation
    web3.eth.sendTransaction({
      // From address will automatically be replaced by the address of current user
      from: '0x0000000000000000000000000000000000000000',
      to: '0xaE11042b07C0B8F01Faa1915Df8167e5650FBc4d',
      value: 1000000000000000000,
    });
    // End Step 3
  };

  useEffect(() => {
    // TODO: Step 2: Setup Developer API Key
    let fm = new Fortmatic(key);
    const web3Instance = new ethers.Web3Provider(fm.getProvider());
    setWeb3(web3Instance);

    // End Step 2
  }, [props.setup]);

  return (
    <Atom.Flex>
      <Atom.Button onClick={actionHandler}>Send Transaction</Atom.Button>
    </Atom.Flex>
  );
};

export default FormaticLogin;
