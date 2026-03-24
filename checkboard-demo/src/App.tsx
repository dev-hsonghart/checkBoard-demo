import { useState } from 'react';
import { appContainer, board } from './App.css';
import BoardList from './components/BoardList/BoardList';

import ListsContainer from './components/ListsContainer/ListsContainer';
import { useTypedSelector } from './hooks/redux';

function App() {
  const [activeBoardId, setActiveBoardId] = useState('board-0');
  const boards = useTypedSelector((state) => state.boards.boardArray);
  const getActiveBoard = boards.filter(
    (board) => board.boardId === activeBoardId,
  )[0];
  const lists = getActiveBoard.boardList;

  return (
    <div className={appContainer}>
      <BoardList
        activeBoardId={activeBoardId}
        setActiveBoardId={setActiveBoardId}
      ></BoardList>
      <div className={board}>
        <ListsContainer boardId={getActiveBoard.boardId} lists={lists} />
      </div>
    </div>
  );
}

export default App;
