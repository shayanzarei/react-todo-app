import React, { useState } from "react";
import './App.css';

function Todo({ todo, index , completeTodo , deleteTodo}) {
  return (
    <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} className="todo">
      {todo.text}
      <div>
        <button onClick={()=>completeTodo(index)}>Complete</button>
        <button onClick={()=>deleteTodo(index)}>x</button>

      </div>
    </div>
  )
}
function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="input" 
        value={value} 
        placeholder = "Add your Todo"
        onChange={e => setValue(e.target.value)}
      />
    </form>

  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn React',
      isCompleted: false
    },
    {
      text: 'Learn Tailwind',
      isCompleted: false
    },
    {
      text: 'Learn storyBook',
      isCompleted: false
    },
  ]);

  const addTodo = text => {
    const NewTodos = [...todos, {text}];
    setTodos(NewTodos);
  }

  const completeTodo = index =>{
    const NewTodos = [...todos];
    NewTodos[index].isCompleted = true;
    setTodos(NewTodos)
  }

  const deleteTodo = index => {
    const NewTodos = [...todos];
    NewTodos.splice(index , 1);
    setTodos(NewTodos) ;
  } 
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo 
            key={index} 
            index={index} 
            todo={todo} 
            completeTodo={completeTodo} 
            deleteTodo={deleteTodo}>  
          </Todo>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )


}

export default App;