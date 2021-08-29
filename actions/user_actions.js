import { ACTION_TYPES } from "../helpers/utils";

export async function auth() {
  return async function (dispatch) {
    //   authDetails((err, user) => {
    //     if (err)
    //       return dispatch({
    //         type: USER_AUTH,
    //         payload: { details: null, type: null },
    //       });

    //     return dispatch({
    //       type: USER_AUTH,
    //       payload: { details: user.userDetails, type: user.userType },
    //     });
    //   });

    return dispatch({
      type: ACTION_TYPES.AUTH,
      payload: { details: { name: "Ritik Agrawal" } },
    });
  };
}
