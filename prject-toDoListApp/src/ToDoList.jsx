import React, {useState} from "react";

function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState([]);

    function handleInputChange(event){
        setNewTask(event.target.value)
    }
    function AddTask(){
        
        if(newTask.trim() !==""){
            setTasks(t=>[...t, newTask]);
            setNewTask("");
        }
        
        
    }
    function deleteTask(index){
        const updatedTask = tasks.filter((task, i)=> i !== index);
        setTasks(updatedTask);
    }
    function moveUpTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index){
        if(index < tasks.length -1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <div className="to-do-list">

            <h1>To-Do-List</h1>
            <div>
                <input type="text" 
                        placeholder="New Task" 
                        value={newTask}
                        onChange={handleInputChange}/>

                <button className="add-button"
                        onClick={AddTask}>
                            Add</button>
            </div>
            <ol>
                {tasks.map((task,index)=> 
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button" 
                            onClick={()=>deleteTask(index)}>
                        delete
                    </button>
                    <button className="move-button" 
                            onClick={()=>moveUpTaskUp(index)}>
                        ⬆️
                    </button>
                    <button className="move-button" 
                            onClick={()=>moveTaskDown(index)}>
                        ⬇️
                    </button>
                </li>)}
            </ol>

        </div>
    );

}
export default ToDoList