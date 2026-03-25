import { configureStore } from '@reduxjs/toolkit';
// import reducer from './reducer/reducer';
import { boardReducer } from './slices/boardsSlice';
import { modalReducer } from './slices/modalSlice';
import { loggerReducer } from './slices/loggerSlice';

const store = configureStore({
  reducer: { modal: modalReducer, boards: boardReducer, logger: loggerReducer },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// const dispatch = useDispatch();

export default store;
