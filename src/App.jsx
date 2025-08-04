import { useState } from 'react'
import CustomForm from './components/CustomForm'
import TaskList from './components/TaskList'

/**
 * React component that manages and displays a task list with add, delete, and toggle functionality.
 *
 * Renders a form for adding new tasks and a list of current tasks, allowing users to mark tasks as completed or remove them.
 * Maintains the task list state internally.
 *
 * @returns {JSX.Element} The rendered task list application.
 */
function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task]);
  }

  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(task => task.id !== id));
  }

  const toggleTask = (id) => {
    setTasks(prevState => prevState.map(task => (
      task.id === id
        ? { ...task, checked: !task.checked }
        : task
    )));
  }

  return (
    <div className='container'>
      <header>
        <h1>My Task List</h1>
      </header>

      <CustomForm addTask={addTask} />

      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      )}
    </div>
  )
}

export default App
