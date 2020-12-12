import { createMuiTheme } from '@material-ui/core';
import '../assets/style/styles.scss';
export const theme = createMuiTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
  typography: {
    fontFamily: 'Vazir',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});
