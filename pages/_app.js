import React, { useEffect } from 'react';
import App from 'next/app';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme/theme';
import BasePage from '../BasePage';
import { Provider } from "react-redux";
import { Store } from "../redux/Store";




export default class MyApp extends App {

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component,
      pageProps
    } = this.props;

    return (
      <React.Fragment>
        <Provider store={Store}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <BasePage>
              <Component  {...pageProps} />
            </BasePage>
          </ThemeProvider>
        </Provider>
      </React.Fragment>
    );
  }
}

