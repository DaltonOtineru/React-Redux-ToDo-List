import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSignedIn: null,
  userId: null,
};

const googleAuthReducer = createSlice({
  name: 'auth',

  initialState,

  reducers: {
    signIn: (state = null, action) => {
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload,
      };
    },

    signOut: (state = null) => {
      return {
        ...state,
        isSignedIn: false,
        userId: null,
      };
    },
  },
});

export const { signIn, signOut } = googleAuthReducer.actions;
export const authReducer = googleAuthReducer.reducer;
export default googleAuthReducer.reducer;
