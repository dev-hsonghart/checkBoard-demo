import { configureStore } from '@reduxjs/toolkit';
// import reducer from './reducer/reducer';
import { boardReducer } from './slices/boardsSlice';

const store = configureStore({
  reducer: { boards: boardReducer },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// const dispatch = useDispatch();

export default store;
