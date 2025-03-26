import { itemType, ListType } from "@/types";
import { DB } from "@/utils/dbMethods";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  allList: ListType[];
  currentListId: string | null;
};

export const fetchListsFromDB = createAsyncThunk(
  "fetchListsFromDB",
  async (_, { rejectWithValue }) => {
    const data = await DB.getLists();
    if (!data) return rejectWithValue("Failed to fetch lists from database");
    return data;
  }
);

const initialState: InitialState = {
  allList: [],
  currentListId: null,
};

const listSlice = createSlice({
  name: "allList",
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<ListType>) => {
      if (action.payload) state.allList = [action.payload, ...state.allList];
    },
    removeList: (state, action: PayloadAction<string>) => {
      if (!action.payload) return;
      state.allList = state.allList.filter(
        (item) => item.id !== action.payload
      );
    },
    setCurrentList: (state, action: PayloadAction<string>) => {
      if (action.payload) state.currentListId = action.payload;
    },
    addItem: (
      state,
      action: PayloadAction<{ listId: string; item: itemType }>
    ) => {
      if (!action.payload) return;
      const { listId, item } = action.payload;
      const list = state.allList.find((item) => item.id === listId);
      if (list) list.items = [item, ...list.items];
    },
    updateItem: (
      state,
      action: PayloadAction<{ listId: string; updatedItem: itemType }>
    ) => {
      if (!action.payload) return;
      const { listId, updatedItem } = action.payload;
      const list = state.allList.find((item) => item.id === listId);
      if (list) {
        list.items = list.items.map((item) =>
          item.id === updatedItem.id ? updatedItem : item
        );
      }
    },
    removeItem: (
      state,
      action: PayloadAction<{ listId: string; itemId: string }>
    ) => {
      if (!action.payload) return;
      const { listId, itemId } = action.payload;
      const list = state.allList.find((item) => item.id === listId);
      if (list) {
        list.items = list.items.filter((item) => item.id !== itemId);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchListsFromDB.fulfilled, (state, action) => {
      if (action.payload) {
        state.allList = action.payload;
        if (action.payload.length > 0)
          state.currentListId = action.payload[0].id;
      }
    });
  },
});

export default listSlice.reducer;
export const {
  addList,
  removeList,
  addItem,
  setCurrentList,
  updateItem,
  removeItem,
} = listSlice.actions;
