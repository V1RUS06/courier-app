import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  helpOpen: false,
  peculiaritiesOpen: false,
};

export const counterSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setHelpOpen(state, action) {
      state.helpOpen = action.payload;
    },
    setPeculiaritiesOpen(state, action) {
      state.peculiaritiesOpen = action.payload;
    },
  },
});

export const {setHelpOpen, setPeculiaritiesOpen} = counterSlice.actions;

export default counterSlice.reducer;
