import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { green, grey, red } from '@material-ui/core/colors';
import { RecoilRoot } from 'recoil';

import React from 'react';
import MainView from './MainView';
import {
  SettingsSubscription,
  LocalModsSubscription,
  LogsSubscription,
  RemoteModsSubscription,
} from '../subscriptions';

const theme = createTheme({
  // palette: {
  //   type: 'dark',
  //   primary: {
  //     main: green[700],
  //   },
  //   secondary: {
  //     main: '#bb7900',
  //     dark: '#885b18',
  //     light: '#ffd53c',
  //   },
  //   error: {
  //     main: red[500],
  //     dark: '#7e1e1e',
  //   },
  // },
  // overrides: {
  //   MuiCssBaseline: {
  //     '@global': {
  //       body: {
  //         overflowY: 'hidden',
  //       },
  //       '*::-webkit-scrollbar': {
  //         width: '1em',
  //         cursor: 'pointer',
  //       },
  //       '*::-webkit-scrollbar-track': {
  //         background: grey[800],
  //         borderRadius: 0,
  //       },
  //       '*::-webkit-scrollbar-thumb': {
  //         background: grey[700],
  //         border: `2px solid ${grey[800]}`,
  //         borderRadius: 0,
  //         '&:hover': {
  //           background: grey[600],
  //         },
  //       },
  //     },
  //   },
  //   MuiTooltip: {
  //     tooltip: {
  //       fontSize: '1em',
  //     },
  //   },
  // },
});

const App = () => (
  <RecoilRoot>
    <SettingsSubscription />
    <LocalModsSubscription />
    <RemoteModsSubscription />
    <LogsSubscription />
    <ThemeProvider theme={theme}>
      <MainView />
    </ThemeProvider>
  </RecoilRoot>
);

export default App;
