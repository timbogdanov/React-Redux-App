import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { fetchJoke, shuffleJoke } from '../store/actions';

const Joke = (props) => {
  useEffect(() => {
    props.fetchJoke();
  }, [props.shuffle]);

  return (
    <div className='jokeContainer'>
      {props.joke && (
        <div>
          <h3>{props.joke.setup}</h3>
          <p>{props.joke.punchline}</p>
        </div>
      )}
      {props.error && <p>{props.error.message}</p>}

      <button onClick={() => props.shuffleJoke()}>Shuffle</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    joke: state.joke,
    error: state.error,
    shuffle: state.shuffle,
  };
};

export default connect(mapStateToProps, { fetchJoke, shuffleJoke })(Joke);
