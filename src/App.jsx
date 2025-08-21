import { useState } from 'react'

function App() {
   const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (task.trim() === '') return;
    setTodos([...todos, task]);
    setTask('');
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };


  return (
    <>
      <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>To-Do List</h2>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter a task" style={{ width: '70%', padding: '8px' }}/>
      <button onClick={handleAdd} style={{ padding: '8px 12px', marginLeft: '10px' }}>Add</button>
      <ul style={{ marginTop: '20px' }}>
        {todos.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {item}
            <button onClick={() => handleDelete(index)} style={{ marginLeft: '10px', color: 'red' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>

    </>
  )
}

export default App
