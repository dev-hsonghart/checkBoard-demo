import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IBoard, IList, ITask } from '../types/index';

type TBoardState = {
  modalActive: boolean;
  boardArray: IBoard[];
};

type TAddBoardAction = {
  board: IBoard;
};

type TDeleteBoardAction = {
  boardId: string;
};

type TDeleteListAction = {
  boardId: string;
  listId: string;
};

type TAddListAction = {
  boardId: string;
  list: IList;
};

type TAddTaskAction = {
  boardId: string;
  listId: string;
  task: ITask;
};

type TUpdateTaskAction = {
  boardId: string;
  listId: string;
  task: ITask;
};

type TDeleteTaskAction = {
  boardId: string;
  listId: string;
  taskId: string;
};

type TSortAction = {
  boardIndex: number;
  droppableIdStart: string;
  droppableIdEnd: string;
  droppableIndexStart: number;
  droppableIndexEnd: number;
  draggableId: string;
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
    {
      boardId: 'board-1',
      boardName: '두번째 게시물',
      boardList: [
        {
          listId: 'list-2',
          listName: 'list 3',
          tasks: [
            {
              taskId: 'task-5',
              taskName: 'task 6',
              taskDescription: '내용',
              taskOwner: 'john',
            },
            {
              taskId: 'task-6',
              taskName: 'task 7',
              taskDescription: '내용',
              taskOwner: 'kim',
            },
          ],
        },
        {
          listId: 'list-3',
          listName: 'list 4',
          tasks: [
            {
              taskId: 'task-7',
              taskName: 'task 8',
              taskDescription: '내용',
              taskOwner: 'sam',
            },
            {
              taskId: 'task-8',
              taskName: 'task 9',
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
  reducers: {
    addBoard: (state, { payload }: PayloadAction<TAddBoardAction>) => {
      state.boardArray.push(payload.board);
    },
    deleteBoard: (state, { payload }: PayloadAction<TDeleteBoardAction>) => {
      state.boardArray = state.boardArray.filter(
        (board) => board.boardId === payload.boardId,
      );
    },
    deleteList: (state, { payload }: PayloadAction<TDeleteListAction>) => {
      state.boardArray = state.boardArray.map((board) =>
        board.boardId === payload.boardId
          ? {
              ...board,
              boardList: board.boardList.filter(
                (list) => list.listId !== payload.listId,
              ),
            }
          : board,
      );
    },
    setModalActive: (state, { payload }: PayloadAction<boolean>) => {
      state.modalActive = payload;
    },
    addList: (state, { payload }: PayloadAction<TAddListAction>) => {
      state.boardArray.map((board) =>
        board.boardId === payload.boardId
          ? { ...board, boardList: board.boardList.push(payload.list) }
          : board,
      );
    },
    addTask: (state, { payload }: PayloadAction<TAddTaskAction>) => {
      state.boardArray.map((board) =>
        board.boardId === payload.boardId
          ? {
              ...board,
              boardList: board.boardList.map((list) =>
                list.listId === payload.listId
                  ? { ...list, tasks: list.tasks.push(payload.task) }
                  : list,
              ),
            }
          : board,
      );
    },
    updateTask: (state, { payload }: PayloadAction<TUpdateTaskAction>) => {
      state.boardArray = state.boardArray.map((board) =>
        board.boardId === payload.boardId
          ? {
              ...board,
              boardList: board.boardList.map((list) =>
                list.listId === payload.listId
                  ? {
                      ...list,
                      tasks: list.tasks.map((task) =>
                        task.taskId === payload.task.taskId
                          ? payload.task
                          : task,
                      ),
                    }
                  : list,
              ),
            }
          : board,
      );
    },
    deleteTask: (state, { payload }: PayloadAction<TDeleteTaskAction>) => {
      state.boardArray = state.boardArray.map((board) =>
        board.boardId === payload.boardId
          ? {
              ...board,
              boardList: board.boardList.map((list) =>
                list.listId === payload.listId
                  ? {
                      ...list,
                      tasks: list.tasks.filter(
                        (task) => task.taskId !== payload.taskId,
                      ),
                    }
                  : list,
              ),
            }
          : board,
      );
    },
    sort: (state, { payload }: PayloadAction<TSortAction>) => {
      // 같은 리스트 내 이동
      if (payload.droppableIdStart === payload.droppableIdEnd) {
        const list = state.boardArray[payload.boardIndex].boardList.find(
          (list) => payload.droppableIdStart === list.listId,
        );

        const card = list?.tasks.splice(payload.droppableIndexStart, 1);
        list?.tasks.splice(payload.droppableIndexEnd, 0, ...card!);
      }

      // 다른 리스트 이동
      if (payload.droppableIdStart !== payload.droppableIdEnd) {
        const listStart = state.boardArray[payload.boardIndex].boardList.find(
          (list) => list.listId === payload.droppableIdStart,
        );
        const card = listStart?.tasks.splice(payload.droppableIndexStart, 1);
        const listEnd = state.boardArray[payload.boardIndex].boardList.find(
          (list) => list.listId === payload.droppableIdEnd,
        );
        listEnd?.tasks.splice(payload.droppableIndexEnd, 0, ...card!);
      }
    },
  },
});

export const boardReducer = boardsSlice.reducer;
export const {
  addBoard,
  deleteList,
  setModalActive,
  addList,
  addTask,
  updateTask,
  deleteTask,
  deleteBoard,
  sort,
} = boardsSlice.actions;
