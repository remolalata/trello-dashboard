import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BoardState {
  data: any,
  lists: any,
  cards: any,
  checkLists: any,
  actions: any
}

const initialState: BoardState = {
  data: null,
  lists: null,
  cards: null,
  checkLists: null,
  actions: null
};


const boardDataSlice = createSlice({
  name: "boardData",
  initialState,
  reducers: {
    setBoardData(state, action: PayloadAction<any>) {
      state.data = action.payload;
    },
    setListData(state, action: PayloadAction<any>) {
      state.lists = action.payload
    },
    setCardsData(state, action: PayloadAction<any>) {
      state.cards = action.payload
    },
    setCheckListData(state, action: PayloadAction<any>) {
      state.checkLists = action.payload
    },
    setActionData(state, action: PayloadAction<any>) {
      state.actions = action.payload
    }
  }
});

export const { setBoardData, setListData, setCheckListData, setCardsData, setActionData } = boardDataSlice.actions

export default boardDataSlice.reducer;
