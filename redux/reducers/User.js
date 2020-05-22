import * as Types from "../actions/types";

const initialState = {
  signUpUsersList: [],
  pending: false,
  loggedIn: false,
  isValidToken: false,
  isBusiness: false,
  empDetails: {},
  result: {},
  user: {
    _id: "",
    userId: "",
    email: "",
    firstName: "",
    registered: false,
    refreshToken: "",
    expiresIn: "",
    emailVerified: false,
    validSince: "",
    disabled: false,
    lastLoginAt: "",
    createdAt: "",
  },
  checkEmail: {},
  verifyEmail: {},
  message: "",
};

export default UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN_USER:
      return Object.assign({}, state, {
        loggedIn: false,
        isValidToken: false,
        pending: true,
      });
      break;
    case Types.LOGIN_USER_SERVICE_RESPONSE_FAILURE:
      return handleLoginServerResponseError(state);
      break;
    case Types.LOGIN_USER_SERVICE_RESPONSE_SUCCESS:
      return handleLoginServerResponseSuccess(state, action);
      break;
    default:
      return state;
  }
};

const handleLoginServerResponseSuccess = (state, action) => {
  console.log("Redux" + JSON.stringify(state));
  let newState = { ...state };
  if (action.result !== undefined) {
    newState = Object.assign({}, state, {
      loggedIn: true,
      user: Object.assign({}, action.result.user),
      message: "",
    });
  }
  console.log("STATE->" + JSON.stringify(newState));
  return { ...newState };
};
const handleLoginServerResponseError = (state) => {
  let newState = { ...state };
  return { ...newState };
};
