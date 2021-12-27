import * as dashboardActions from "../actions/dashboard-actions";

const initState = {
  username: "",
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case dashboardActions.DASHBOARD_SET_USERNAME:
      return {
        ...state,
        username: action.payload.username,
      };

    default:
      return state;
  }
};

export default reducer;
