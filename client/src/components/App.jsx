import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

let styles = {
  root: {},
};

class App extends React.Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        <Grid container>
          <Grid item>Hello world!</Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
