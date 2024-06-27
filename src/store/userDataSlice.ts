import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface UserDataState {
  data: any
}

const initialState: UserDataState = {
  data: null,
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<any>) {
      state.data = action.payload;
    }
  }
});

export const { setUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
