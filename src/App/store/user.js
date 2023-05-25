import { createAction, createSlice } from "@reduxjs/toolkit";
import authService from "../service/auth.service";
import localStorageService from "../service/localStorage.service";
import { generateAuthError } from "../utils/generateAuthError";
// import userService from "../service/user.service";

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
const { authRequestSuccess, authRequestFailed, userLoggedOut } = actions;

const authRequested = createAction("user/authRequested");

export const signUp = (payload) => async (dispatch) => {
    dispatch(authRequested());
    try {
        const { username, password } = await authService.register(payload);
        console.log(password);
        const { refresh, access } = await authService.token({
            username: payload.username,
            password: payload.password
        });

        localStorageService.setTokens({
            refreshToken: refresh,
            accessToken: access,
            username
        });

        dispatch(
            authRequestSuccess({
                username
            })
        );
    } catch (error) {
        const { status, data } = error.response;
        if (status === 400) {
            const errorMessage = generateAuthError(data);
            dispatch(authRequestFailed(errorMessage));
        } else {
            dispatch(authRequestFailed(data));
        }
    }
};

export const logOut = () => async (dispatch) => {
    // await userService.delete();
    localStorageService.removeAuthData();
    dispatch(userLoggedOut());
};

export const signIn = (payload) => async (dispatch) => {
    dispatch(authRequested());
    try {
        const { username, password } = await authService.login(payload);
        console.log(password);
        const { refresh, access } = await authService.token({
            username: payload.username,
            password: payload.password
        });

        localStorageService.setTokens({
            refreshToken: refresh,
            accessToken: access,
            username
        });

        dispatch(authRequestSuccess({ username }));
    } catch (error) {
        const { status, data } = error.response;
        if (status === 400) {
            const errorMessage = generateAuthError(data);
            dispatch(authRequestFailed(errorMessage));
        } else {
            dispatch(authRequestFailed(data));
        }
    }
};
export const getAuthErrors = () => (state) => state.user.error;
export const getIsLoggedIn = () => (state) => state.user.isLoggedIn;
export const getAuthUsername = () => (state) => state.user.auth?.username;
export default usersReducer;
