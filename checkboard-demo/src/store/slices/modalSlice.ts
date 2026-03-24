import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ITask } from '../types';

type TModalState = {
  boardId: string;
  listId: string;
  task: ITask;
};

type TSetModalDataAction = {
  boardId: string;
  listId: string;
  task: ITask;
};

const initialState: TModalState = {
  boardId: 'board-0',
  listId: 'list-0',
  task: {
    taskId: 'task-0',
    taskName: 'task 0',
    taskDescription: 'task~~',
    taskOwner: '홍길동',
  },
};

const modalSlice = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {
    setModalDate: (state, { payload }: PayloadAction<TSetModalDataAction>) => {
      state.boardId = payload.boardId;
      state.listId = payload.listId;
      state.task = payload.task;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { setModalDate } = modalSlice.actions;
