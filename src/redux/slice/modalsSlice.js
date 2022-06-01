import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  helpOpen: false,
  peculiaritiesOpen: false,
  cancelOrderOpen: false,
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
    setCancelOrder(state, action) {
      state.cancelOrderOpen = action.payload;
    },
  },
});

export const {setHelpOpen, setPeculiaritiesOpen, setCancelOrder} =
  counterSlice.actions;

export default counterSlice.reducer;
