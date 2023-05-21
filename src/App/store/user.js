import { createAction, createSlice } from "@reduxjs/toolkit";
import authService from "../service/auth.service";
import localStorageService from "../service/localStorage.service";
// import userService from "../service/user.service";
import { generateAuthError } from "../utils/generateAuthError";

const initialState = localStorageService.getAccessToken()
    ? {
          entities: null,
          isLoading: true,
          error: null,
          auth: { username: localStorageService.getUsername() },
          isLoggedIn: true,
          dataLoaded: false
      }
    : {
          entities: null,
          isLoading: false,
          error: null,
          auth: null,
          isLoggedIn: false,
          dataLoaded: false
      };

const usersSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userRequested: (state) => {
            state.isLoading = true;
        },
        userReceived: (state, action) => {
            state.entities = action.payload;
            state.dataLoaded = true;
            state.isLoading = false;
        },
        userRequestFiled: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        authRequestSuccess: (state, action) => {
            state.auth = action.payload;
            state.isLoggedIn = true;
        },
        authRequestFailed: (state, action) => {
            state.error = action.payload;
        },
        userLoggedOut: (state) => {
            state.entities = null;
            state.isLoggedIn = false;
            state.auth = null;
            state.dataLoaded = false;
        },

        authRequested: (state) => {
            state.error = null;
        }
    }
});

const { reducer: usersReducer, actions } = usersSlice;
const { authRequestSuccess, authRequestFailed } = actions;

const authRequested = createAction("user/authRequested");

export const signUp = (payload) => async (dispatch) => {
    dispatch(authRequested());
    try {
        const { username, password } = await authService.register(payload);
        const tokenData = await authService.token(username, password);
        localStorageService.setTokens({
            refreshToken: tokenData.refresh,
            accessToken: tokenData.access,
            username
        });
        dispatch(
            authRequestSuccess({
                username
            })
        );
    } catch (error) {
        const { code, message } = error.response.data;
        if (code === 400) {
            const errorMessage = generateAuthError(message);
            dispatch(authRequestFailed(errorMessage));
        } else {
            dispatch(authRequestFailed(error.message));
        }
    }
};

// export const logOut = () => (dispatch) => {
//     localStorageService.removeAuthData();
//     dispatch(userLoggedOut());
// };

export const signIn = (payload) => async (dispatch) => {
    dispatch(authRequested());
    try {
        const data = await authService.login(payload);
        const tokenData = await authService.token(payload);
        localStorageService.setTokens({
            refreshToken: tokenData.refresh,
            accessToken: tokenData.access,
            username: data.username
        });
        dispatch(authRequestSuccess({ username: data.username }));
    } catch (error) {
        const { code, message } = error.response.data;
        if (code === 400) {
            const errorMessage = generateAuthError(message);
            dispatch(authRequestFailed(errorMessage));
        } else {
            dispatch(authRequestFailed(error.message));
        }
    }
};
export const getAuthErrors = () => (state) => state.user.error;

export default usersReducer;
