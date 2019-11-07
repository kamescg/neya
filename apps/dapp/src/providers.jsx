/* --- Global --- */
import {ThemeProvider} from 'theme-ui';
import {PortalProvider, PortalTree} from 'react-portal-system';
import {BoxProvider} from '3box-ui-system';

/* --- Local --- */
import theme from './assets/theme';

import {walletConnectPlugin} from './plugins/WalletConnect';

const extensions = [walletConnectPlugin];

export default props => {
  return (
    <ThemeProvider theme={theme}>
      <PortalProvider>
        <BoxProvider extensions={extensions}>
          <PortalTree />
          {props.children}
        </BoxProvider>
      </PortalProvider>
    </ThemeProvider>
  );
};
