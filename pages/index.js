import Dashboard from "../components_site/Dashboard"
import {useStyles} from '../theme/site/styles'
import Footer from "../components_site/Footer";
import React from "react";

export default function index(props) {

    const classes = useStyles();

    return (
        <React.Fragment>
              <div className={classes.root}>
                  <Dashboard {...props} />
              </div>
            <Footer {...props} />
        </React.Fragment>
      )


}
