import React, { useState } from 'react';
import List from './components/List';
import TextField from './components/TextField';
import ThreeButtons from './components/ThreeButtons';

function App() {
  const [displayTodos, setDisplayTodos] = useState([]);
  const [todos, setTodos] = useState(['']);
  const [inFocus, setInFocus] = useState('All');
  const [index, setIndex] = useState(1);
  function addTodo(todo) {
    if (todos[0] === '') {
      const arr = [];
      arr.push({ todo: todo, key: index, completed: false });
      setIndex(index + 1);
      setTodos(arr);
      setDisplayTodos(arr);
      return;
    }

    const arr = [...todos];
    arr.push({ todo: todo, key: index, completed: false });
    setIndex(index + 1);
    setTodos(arr);
    setDisplayTodos(arr);
  }

  function handleEnter(event, todo) {
    if (event.key === 'Enter') {
      addTodo(todo);
      event.target.value = '';
    }
  }

  function deleteHandler(todo) {
    const arr = todos.filter((element) => element.todo !== todo);
    setTodos(arr);
    setDisplayTodos(arr);
  }

  function doneHandler(todo) {
    const arr = [...todos];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].todo === todo) {
        arr[i].completed = !arr[i].completed;
      }
    }
    setTodos(arr);
    if (inFocus === 'All') displayAllTodos();
    else if (inFocus === 'Completed') displayCompletedTodos();
    else displayActiveTodos();
  }

  function displayCompletedTodos() {
    const arr = todos.filter((element) => element.completed === true);
    setDisplayTodos(arr);
    setInFocus('Completed');
  }

  function displayAllTodos() {
    if (todos[0] === '') return;
    setDisplayTodos(todos);
    setInFocus('All');
  }

  function displayActiveTodos() {
    const arr = todos.filter((element) => element.completed === false);
    setDisplayTodos(arr);
    setInFocus('Active');
  }

  function handleEditedTodo(key, editedTodo) {
    const arr = todos.map((element) =>
      element.key === key ? { ...element, todo: editedTodo } : element
    );
    setTodos(arr);
    setDisplayTodos(arr);
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered has-text-primary">TODO List</h1>

        <TextField onKeyPress={handleEnter} />
        <ThreeButtons
          allHandler={displayAllTodos}
          activeHandler={displayActiveTodos}
          completedHandler={displayCompletedTodos}
        />
        <List
          todos={displayTodos}
          onClick={doneHandler}
          deleteHandler={deleteHandler}
          handleEditedTodo={handleEditedTodo}
        />
      </div>
    </section>
  );
}

export default App;
