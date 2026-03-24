import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ILogItem } from '../types';

type loggerState = {
  logArray: ILogItem[];
};

const initialState: loggerState = {
  logArray: [],
};

const loggerSlice = createSlice({
  name: 'logger',
  initialState: initialState,
  reducers: {
    addLog: (state, { payload }: PayloadAction<ILogItem>) => {
      state.logArray.push(payload);
    },
  },
});

export const loggerReducer = loggerSlice.reducer;
export const { addLog } = loggerSlice.actions;
