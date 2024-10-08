import { useState } from "react";
import Task from "./Task";
import Summary from "./Summary";
 
const initialTasks = [
    {
    _id: "1a",
    name: "Task1",
    description: "Do something important",
    isDone: true
  },
  {
    _id: "2b",
    name: "Task2",
    description: "Do something important",
    isDone: true
  },
  {
    _id: "3c",
    name: "Task3",
    description: "Do something important",
    isDone: true
  },
];
 
function ToDoList() {
  const [tasks, setTasks] = useState(initialTasks);
  const [tasksCompleted, setTasksCompleted] = useState(3)

  const toggleTaskDone = (taskId) => {
    // 1. Go through the list of taskss and find the one with the match taskId
    // 2. Update 'isDone' to the opposite value
    const tasksCopy = [...tasks];
    
    tasksCopy.forEach((task) => {
      // Find the selected task and update task's `isDone` property,
      if (task._id === taskId) {
        task.isDone = task.isDone ? false : true;
   
        // then update `tasksCompleted` state variable
        if (task.isDone) setTasksCompleted(tasksCompleted + 1);
        else if (!task.isDone) setTasksCompleted(tasksCompleted - 1);        
      }
   
      setTasks(tasksCopy);
    }); 
  }
 
  return (
    <div>
      <Summary tasksCompleted={tasksCompleted}/>
      
      <div className="todo-container">
        {tasks.map((task) => <Task key={task._id} task={task} toggleTaskDone={toggleTaskDone} /> )}
      </div>
    </div>
  );
}
 
export default ToDoList;