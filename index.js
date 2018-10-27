import React from 'react'
import ReactDOM from 'react-dom'
import {Todo} from './components/main'

let tasklists = ["Task 2", "Task 2"];
let tasks = localStorage.getItem("storedTasks")
if(tasks) {
   tasklists = JSON.parse(tasks)
}

ReactDOM.render(
    <Todo tasks={tasklists} />,
    document.getElementById('todo')
);