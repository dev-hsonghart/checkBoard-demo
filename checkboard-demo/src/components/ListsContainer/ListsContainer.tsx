import React, { type FC } from 'react';
import type { IList } from '../../store/types';
import List from '../List/List';
import ActionButton from '../ActionButton/ActionButton';
import { listContainer } from './ListsContainer.css';

type TListsContainerProps = {
  boardId: string;
  lists: IList[];
};

const ListsContainer: FC<TListsContainerProps> = ({ boardId, lists }) => {
  return (
    <div className={listContainer}>
      {lists.map((list) => (
        <List key={list.listId} boardId={boardId} list={list} />
      ))}
      <ActionButton boardId={boardId} listId={''} list></ActionButton>
    </div>
  );
};

export default ListsContainer;
