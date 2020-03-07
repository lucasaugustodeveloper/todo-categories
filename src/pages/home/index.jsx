import React from 'react';
import { Container, Grid } from '@material-ui/core';

// components
import Login from '@components/login';

import styles from './style';

const App = () => {
  const classes = styles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid
        alignItems="center"
        container
        className={classes.container}
        direction="row"
        justify="center"
        style={{ height: '100hv' }}
      >
        <Grid item>
          <Login />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
