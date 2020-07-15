import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { fetchJoke } from '../store/actions';

const Joke = (props) => {
  useEffect(() => {
    props.fetchJoke();
  }, []);
  return (
    <div>
      {props.isLoading ? <p>loading joke...</p> : <p>something wrong</p>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    joke: state.joke,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchJoke })(Joke);
