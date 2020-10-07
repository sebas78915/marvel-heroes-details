import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     // light: will be calculated from palette.primary.main,
  //     main: CONSTANTS.BLUE,
  //     // dark: will be calculated from palette.primary.main,
  //     contrastText: CONSTANTS.CONTRAST_TEXT,
  //   },
  // },
  overrides:{
    MuiPaginationItem:{
      outlined:{
        backgroundColor: '#fff',
      }
    },
    // Mui: {
    //   selected: {
    //     backgroundColor: ''
    //   }
    // }
  }
});

export default function Theme(props) {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  );
}