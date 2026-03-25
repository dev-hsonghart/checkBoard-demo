import { useState } from 'react';
import {
  appContainer,
  board,
  deleteBoardButton,
  loggerButton,
} from './App.css';
import BoardList from './components/BoardList/BoardList';

import ListsContainer from './components/ListsContainer/ListsContainer';
import { useTypedDispatch, useTypedSelector } from './hooks/redux';
import EditModal from './components/EditModal/EditModal';
import LoggerModal from './components/LoggerModal/LoggerModal';
import { deleteBoard } from './store/slices/boardsSlice';
import { addLog } from './store/slices/loggerSlice';
import { v4 } from 'uuid';

function App() {
  const dispatch = useTypedDispatch();
  const [activeBoardId, setActiveBoardId] = useState('board-0');
  const [isLoggerOpen, setIsLoggerOpen] = useState(false);
  const modalActive = useTypedSelector((state) => state.boards.modalActive);
  const boards = useTypedSelector((state) => state.boards.boardArray);
  const getActiveBoard =
    boards.find((board) => board.boardId === activeBoardId) || boards[0];
  const lists = getActiveBoard?.boardList || [];
  const handleDeleteBoard = () => {
    if (boards.length > 1) {
      const indexToBeDeleted = boards.findIndex(
        (board) => board.boardId === activeBoardId,
      );
      const nextIndex =
        indexToBeDeleted === 0 ? indexToBeDeleted + 1 : indexToBeDeleted - 1;

      const nextBoardId = boards[nextIndex].boardId;

      dispatch(deleteBoard({ boardId: activeBoardId }));
      dispatch(
        addLog({
          logId: v4(),
          logMessage: `게시판 지우기 : ${getActiveBoard.boardName}`,
          logAuthor: 'user',
          logTimestamp: String(Date.now()),
        }),
      );

      setActiveBoardId(nextBoardId);
    } else {
      alert('최소 게시판 개수는 한 개입니다.');
    }
  };

  return (
    <div className={appContainer}>
      {isLoggerOpen ? <LoggerModal setIsLoggerOpen={setIsLoggerOpen} /> : null}
      {modalActive ? <EditModal /> : null}
      <BoardList
        activeBoardId={activeBoardId}
        setActiveBoardId={setActiveBoardId}
      ></BoardList>
      <div className={board}>
        <ListsContainer boardId={getActiveBoard?.boardId || ''} lists={lists} />
      </div>
      <div className="buttons">
        <button onClick={handleDeleteBoard} className={deleteBoardButton}>
          이 게시판 삭제하기
        </button>
        <button
          className={loggerButton}
          onClick={() => {
            setIsLoggerOpen(!isLoggerOpen);
          }}
        >
          {isLoggerOpen ? '활동 로그 닫기' : '활동 로그 보기'}
        </button>
      </div>
    </div>
  );
}

export default App;
