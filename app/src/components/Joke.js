import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { fetchJoke } from '../store/actions';

const Joke = (props) => {
  const [shuffle, setShuffle] = useState(false);

  const shuffleJoke = () => {
    setShuffle(!shuffle);
  };

  useEffect(() => {
    props.fetchJoke();
  }, [shuffle]);

  return (
    <div className='jokeContainer'>
      {props.isLoading && <p>loading joke...</p>}
      {props.joke && (
        <>
          <h4>{props.joke.setup}</h4>
          <p>{props.joke.punchline}</p>
        </>
      )}
      {props.error && <p>{props.error.message}</p>}

      <button onClick={() => shuffleJoke()}>Shuffle</button>
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
