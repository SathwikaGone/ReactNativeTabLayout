import * as Types from "./types";

export const loginUser = (data) => {
  return {
    type: Types.LOGIN_USER,
    payload: data,
  };
};
