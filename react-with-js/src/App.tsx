
import  { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  
  const handleAddTodo = () => {
    if (input.trim() !== '') {
      const newTodo: Todo = {
        id: todos.length + 1,
        text: input,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInput('');
    }
  };

  const handletoggleTodo = (id: number) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };


  const handleDeleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>Todo Mamat</h1>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Tambah Todo</button>  
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handletoggleTodo(todo.id)}
            />
            {todo.text}
            <button onClick={() => handleDeleteTodo(index)}>Hapus</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;