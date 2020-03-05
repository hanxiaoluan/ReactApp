const menuIsFold = (state = { isFold: false }, action) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      return { ...state, isFold: !state.isFold };
    default:
      console.log(state);
      return state;
  }
};
export default menuIsFold;
