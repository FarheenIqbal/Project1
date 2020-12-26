import React, { useEffect, useState } from 'react';
import List from './components/List';
import TextField from './components/TextField';
import ThreeButtons from './components/ThreeButtons';
import { db } from './firebase';

export type TodoType = {
  todo: string;
  key: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [displayTodos, setDisplayTodos] = useState<TodoType[]>([]);
  const [inFocus, setInFocus] = useState<'All' | 'Active' | 'Completed'>('All');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  function saveTodoInDb(todoInput: string): string {
    const newDocRef = db.collection('todos').doc();
    newDocRef
      .set({
        todo: todoInput,
        key: newDocRef.id,
        completed: false,
      })
      .then(() => console.log('added', newDocRef.id))
      .catch(console.error);
    return newDocRef.id;
  }

  useEffect(() => {
    async function loadTodosFromDb() {
      const arr: TodoType[] = [];
      await db
        .collection('todos')
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            arr.push({
              todo: doc.data().todo,
              key: doc.data().key,
              completed: doc.data().completed,
            });
          });
        })
        .then(() => {
          setTodos(arr);
          setDisplayTodos(arr);
          setIsLoading(false);
        })
        .catch(console.error);
    }
    loadTodosFromDb();
  }, []);

  function addTodo(todoInput: string): void {
    const id: string = saveTodoInDb(todoInput);
    const arr: TodoType[] = [...todos];
    arr.push({ todo: todoInput, key: id, completed: false });
    setTodos(arr);
    setDisplayTodos(arr);
  }

  function handleEnter(
    event: React.KeyboardEvent<HTMLInputElement>,
    todoInput: string
  ) {
    if (event.key === 'Enter') {
      addTodo(todoInput);
      const element = event.target as HTMLInputElement;
      element.value = '';
    }
  }

  function deleteHandler(todo: TodoType) {
    const arr: TodoType[] = todos.filter(
      (element) => element.todo !== todo.todo
    );
    setTodos(arr);
    setDisplayTodos(arr);
    db.collection('todos')
      .doc(todo.key)
      .delete()
      .then(() => console.log('deleted', todo.key));
  }

  function doneHandler(todo: TodoType) {
    const arr: TodoType[] = [...todos];
    for (let i = 0; i < todos.length; i++) {
      if (arr[i].key === todo.key) {
        arr[i].completed = !arr[i].completed;
        db.collection('todos')
          .doc(todo.key)
          .update(arr[i])
          .then(() => console.log('updated', todo))
          .catch(console.error);
      }
    }
    setTodos(arr);
    if (inFocus === 'All') displayAllTodos();
    else if (inFocus === 'Completed') displayCompletedTodos();
    else displayActiveTodos();
  }

  function displayCompletedTodos() {
    const arr: TodoType[] = todos.filter(
      (element) => element.completed === true
    );
    setDisplayTodos(arr);
    setInFocus('Completed');
  }

  function displayAllTodos() {
    if (todos.length === 0) return;
    setDisplayTodos(todos);
    setInFocus('All');
  }

  function displayActiveTodos() {
    const arr: TodoType[] = todos.filter(
      (element) => element.completed === false
    );
    setDisplayTodos(arr);
    setInFocus('Active');
  }

  function handleEditedTodo(editedTodo: TodoType) {
    const arr: TodoType[] = todos.map((element) =>
      element.key === editedTodo.key ? editedTodo : element
    );
    db.collection('todos')
      .doc(editedTodo.key)
      .update({ todo: editedTodo.todo })
      .then(() => console.log('updated', editedTodo))
      .catch(console.error);

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
        {isLoading ? (
          <p className="is-size-1 has-text-danger"> Loading ... </p>
        ) : (
          <List
            todos={displayTodos}
            onClick={doneHandler}
            deleteHandler={deleteHandler}
            handleEditedTodo={handleEditedTodo}
          />
        )}
      </div>
    </section>
  );
}

export default App;
