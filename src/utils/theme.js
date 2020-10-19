import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  // palette: {
  //   primary: red,
  // },
  overrides:{
    MuiPaginationItem:{
      outlined:{
        backgroundColor: '#fff',
      }
    },
    MuiCardMedia: {
      img: {
        objectFit: 'fill'
      }
    },
    MuiAppBar: {
      positionStatic: {
        position: 'fixed'
      }
    },
    MuiFab: {
      secondary: {
        backgroundColor: 'red'
      }
    }
  }
});

export default function Theme(props) {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  );
}