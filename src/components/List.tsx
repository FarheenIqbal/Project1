import React from 'react';
import ListItem from './ListItem';
import { TodoType } from '../App';

type ListPropType = {
  todos: TodoType[];
  onClick(todo: TodoType): void;
  deleteHandler(todo: TodoType): void;
  handleEditedTodo(editedTodo: TodoType): void;
};

const List = ({
  todos,
  onClick,
  deleteHandler,
  handleEditedTodo,
}: ListPropType) => {
  return (
    <div className="control">
      {todos.map((todo) => (
        <ListItem
          todo={todo}
          onClick={onClick}
          deleteHandler={deleteHandler}
          handleEditedTodo={handleEditedTodo}
        />
      ))}
    </div>
  );
};
export default List;
