import { createTheme } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import orange from "@material-ui/core/colors/orange";
import green from "@material-ui/core/colors/green";

const theme = createTheme({

      palette: {
            primary: {
                  light: "#fff",
                  main: "#fafafa",
                  dark: "#666",
            },
            secondary: {
                  main: '#ffab00',
                  light: "#ff6434",
                  contrastText: '#000',
            },

            textPrimary: '#999',
            textSecondary: '#000',
            error: red,
            warning: orange,
            success: green,
            info: blue,
            contrastThreshold: 3,
            tonalOffset: 0.2,
      },
      typography: {
            fontFamily: [
                  '-apple-system',
                  'BlinkMacSystemFont',
                  '"Segoe UI"',
                  'Roboto',
                  '"Helvetica Neue"',
                  'Arial',
                  'sans-serif',
                  '"Apple Color Emoji"',
                  '"Segoe UI Emoji"',
                  '"Segoe UI Symbol"',
            ].join(','),
      },
});


export default theme;
