import { FiX } from 'react-icons/fi';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import { useState, type ChangeEvent } from 'react';
import {
  setModalActive,
  updateTask,
  deleteTask,
} from '../../store/slices/boardsSlice';
import { addLog } from '../../store/slices/loggerSlice';
import { v4 } from 'uuid';
import {
  buttons,
  deleteButton,
  header,
  input,
  modalWindow,
  title,
  updateButton,
  wrapper,
  closeButton,
} from './EditModal.css';

const EditModal = () => {
  const editingState = useTypedSelector((state) => state.modal);
  const [data, setData] = useState(editingState);
  const dispatch = useTypedDispatch();
  const handleCloseButton = () => {
    dispatch(setModalActive(false));
  };
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      task: {
        ...data.task,
        taskName: e.target.value,
      },
    });
  };
  const handleDesChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      task: {
        ...data.task,
        taskDescription: e.target.value,
      },
    });
  };
  const handleAuthorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      task: {
        ...data.task,
        taskOwner: e.target.value,
      },
    });
  };

  const handleUpdateTask = () => {
    dispatch(
      updateTask({
        boardId: editingState.boardId,
        listId: editingState.listId,
        task: data.task,
      }),
    );

    dispatch(
      addLog({
        logId: v4(),
        logMessage: `일 수정하기 : ${editingState.task.taskName}`,
        logAuthor: 'user',
        logTimestamp: String(Date.now()),
      }),
    );

    dispatch(setModalActive(false));
  };

  const handleDeleteTask = () => {
    dispatch(
      deleteTask({
        boardId: editingState.boardId,
        listId: editingState.listId,
        taskId: data.task.taskId,
      }),
    );

    dispatch(
      addLog({
        logId: v4(),
        logMessage: `일 삭제하기 : ${editingState.task.taskName}`,
        logAuthor: 'user',
        logTimestamp: String(Date.now()),
      }),
    );

    dispatch(setModalActive(false));
  };

  return (
    <div className={wrapper}>
      <div className={modalWindow}>
        <div className={header}>
          <div className={title}>{editingState.task.taskName}</div>
          <FiX className={closeButton} onClick={handleCloseButton}></FiX>
        </div>
        <div className={title}>제목</div>
        <input
          type="text"
          value={data.task.taskName}
          onChange={handleNameChange}
          className={input}
        />
        <div className={title}>설명</div>
        <input
          type="text"
          value={data.task.taskDescription}
          onChange={handleDesChange}
          className={input}
        />
        <div className={title}>생성한 사람</div>
        <input
          type="text"
          value={data.task.taskOwner}
          onChange={handleAuthorChange}
          className={input}
        />
        <div className={buttons}>
          <button className={updateButton} onClick={handleUpdateTask}>
            일 수정하기
          </button>
          <button className={deleteButton} onClick={handleDeleteTask}>
            일 삭제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
