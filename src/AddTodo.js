import React, { Component } from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";
import { GraphicEq } from "@material-ui/icons";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { item: { title: "" } };
  }

  render() {
    return (
      <Paper>
        <Grid container>
          <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
            <TextField placeholder="Add Todo here" fullWidth />
          </Grid>
          <Grid xs={11} md={11} item>
            <Button fullWidth color="secondary" variant="outlined">
              +
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default AddTodo;
