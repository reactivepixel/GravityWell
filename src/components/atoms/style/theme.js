import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#4dd0e1',
        },
        secondary: {
            main: '#ff4081',
        },
    },
    typography: {
        useNextVariants: true,
      },
});

export default theme;