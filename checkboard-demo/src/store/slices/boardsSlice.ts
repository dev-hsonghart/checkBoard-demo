import { createSlice } from '@reduxjs/toolkit';
import type { IBoard } from '../types/index';

type TBoardState = {
  modalActive: boolean;
  boardArray: IBoard[];
};

const initialState: TBoardState = {
  modalActive: false,
  boardArray: [
    {
      boardId: 'board-0',
      boardName: '첫번째 게시물',
      boardList: [
        {
          listId: 'list-0',
          listName: 'list 1',
          tasks: [
            {
              taskId: 'task-0',
              taskName: 'task 1',
              taskDescription: '내용',
              taskOwner: 'john',
            },
            {
              taskId: 'task-1',
              taskName: 'task 2',
              taskDescription: '내용',
              taskOwner: 'kim',
            },
          ],
        },
        {
          listId: 'list-1',
          listName: 'list 2',
          tasks: [
            {
              taskId: 'task-3',
              taskName: 'task 4',
              taskDescription: '내용',
              taskOwner: 'sam',
            },
            {
              taskId: 'task-4',
              taskName: 'task 5',
              taskDescription: '내용',
              taskOwner: 'yuna',
            },
          ],
        },
      ],
    },
  ],
};

const boardsSlice = createSlice({
  name: 'boards',
  initialState: initialState,
  reducers: {},
});

export const boardReducer = boardsSlice.reducer;
