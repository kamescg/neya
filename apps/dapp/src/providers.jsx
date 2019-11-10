/* --- Global --- */
import {ThemeProvider} from 'theme-ui';
import {PortalProvider, PortalTree} from 'react-portal-system';
import {BoxProvider} from '3box-ui-system';
import {EthersProvider} from 'ethers-system';
import {FortmaticProvider} from 'fortmatic-system';
import Token from 'contracts/ERC20';

/* --- Local --- */
import theme from './assets/theme';

import {walletConnectPlugin} from './plugins/WalletConnect';

const extensions = [walletConnectPlugin];

export default props => {
  return (
    <ThemeProvider theme={theme}>
      <PortalProvider>
        {/* <BoxProvider extensions={extensions}> */}
        <FortmaticProvider>
          <EthersProvider contracts={[Token]}>
            <BoxProvider>
              <PortalTree />
              {props.children}
            </BoxProvider>
          </EthersProvider>
        </FortmaticProvider>
      </PortalProvider>
    </ThemeProvider>
  );
};
