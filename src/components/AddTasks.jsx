import React from 'react'
import { useState } from 'react';

const AddTasks = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [isChecked, setIsChecked] = useState(false);

    const addTask = () => {
        if (task.trim() === "") { return }

        setTasks([...tasks, task]);
        setTask('');
    };

    const deleteTask = (taskDeleteIndex) => {

        let newTasks = tasks.filter(
            (task, index) => index === taskDeleteIndex ? false : true
        );

        setTasks(newTasks);

    };

    return (
        <div>
            <input onChange={ (event) => setTask(event.target.value) }
                value={ task }
                className=' bg-neutral-400 rounded-lg mr-4' type="text" />
            <button onClick={ addTask } className=' bg-green-500 rounded-md px-3'  >Add Task</button>

            <div>
                {
                    tasks.map((task, index) => {
                        return <div key={ index }>   { task } <input onChange={ (event) => { event && setIsChecked(!isChecked) } } type="checkbox" />
                            <button onClick={ () => deleteTask(index) } >X</button>  </div>
                    })
                }
            </div>
        </div>
    )
}

export default AddTasks