const LOAD_GREETINGS = 'LOAD_GREETINGS';

export const fetchGreetings = () => async (dispatch) => {
  const response = await fetch('/v1/random');
  const data = await response.json();
  if (response.ok) {
  dispatch({
    type: LOAD_GREETINGS,
    payload: data,
  })
  }
};


const GreetingsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_GREETINGS:
      return action.payload;

    default:
      return state;
  }
};

export default GreetingsReducer;
