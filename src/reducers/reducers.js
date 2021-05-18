const initialState = {
  count: 10,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'COUNT_UP_NEW':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'COUNT_DOWN':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default countReducer;
