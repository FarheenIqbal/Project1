import React from 'react';
import ListItem from './ListItem';

const List = ({ todos, onClick, deleteHandler, handleEditedTodo }) => {
  return (
    <div className="control">
      {todos.map((todo, i) => (
        <ListItem
          kkey={todo.key}
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
