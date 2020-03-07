import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
  root: {
    flexGrow: 1
  },
  title: {
    fontSize: '2rem',
    textAlign: 'center',
    textTransform: 'uppercase',

    marginBottom: '1.5rem',

    color: '#333'
  },

  containerInput: {
    marginBottom: '1.2rem'
  },

  containerButton: {
    marginTop: '3rem'
  },

  input: {
    borderBottomStyle: 'solid',
    borderBottomWidth: '0.2rem',

    width: '100%',

    borderBottomColor: '#333'
  },
  error: {
    borderBottomStyle: 'solid',
    borderBottomWidth: '0.2rem',

    width: '100%',

    borderBottomColor: '#f00'
  },
  errorMessage: {
    fontSize: '.9rem',
    marginBottom: '1rem',

    color: '#f00'
  }
});

export default styles;
