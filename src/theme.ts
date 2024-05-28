// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    text: {
      primary: 'black',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: 'black',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: 'black',
        },
      },
    },
  },
});

export default theme;
