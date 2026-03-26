import { configureStore } from '@reduxjs/toolkit';
// import reducer from './reducer/reducer';
import { boardReducer } from './slices/boardsSlice';
import { modalReducer } from './slices/modalSlice';
import { loggerReducer } from './slices/loggerSlice';
import { userReducer } from './slices/userSlice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    boards: boardReducer,
    logger: loggerReducer,
    user: userReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// const dispatch = useDispatch();

export default store;
