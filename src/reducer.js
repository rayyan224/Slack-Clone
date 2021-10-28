export const intialState = {
  user: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
};

// State is what data layer looks like rn
const reducer = (state, action) => {
  console.log(action);
  // Listen To Action Type
  switch (action.type) {
    //   If we get actionTypes.SET_USER ie "SET_USER"
    case actionTypes.SET_USER:
      // Return new state
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
