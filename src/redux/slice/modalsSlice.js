import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  helpOpen: false,
};

export const counterSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setHelpOpen(state, action) {
      state.helpOpen = action.payload;
    },
  },
});

export const {setHelpOpen} = counterSlice.actions;

export default counterSlice.reducer;
