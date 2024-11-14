/* eslint-disable no-unused-vars */
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import image from './images/bg2.jpg'

export default function TodoList(){
    let [todos,setTodos]=useState([{task:"sample-task",id:uuidv4(),isDone:false}]);
    let [newTodo,setNewTodo]=useState("");

    let addNewTask=()=>{
setTodos((prevTodos)=>{
return [...prevTodos,{task:newTodo,id:uuidv4()}]
});
        setNewTodo("");
    };

    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value); 
    };

    let deleteTodo=(id)=>{
     setTodos((prevTodos)=> todos.filter((prevTodos)=>prevTodos.id!=id));
    
    };
    let markAllDone=()=>{
        setTodos( (prevTodos)=>(
            todos.map((todo)=>{
            return {
                ...todo,
              isDone:true,
            };
            
        }
    )
        
    )
)
    };
    let markAsDone=(id)=>{
        setTodos( (prevTodos)=>(
            prevTodos.map((todo)=>{
                if(todo.id==id){

                
            return {
                ...todo,
               isDone:true,
            };
        }
        else{
          return todo;  
        }
        }
    )
        
    )
)
    };
    
    const background={
        width: '100vw',          // Full viewport width
        height: '100vh',         // Full viewport height
        backgroundSize: 'cover', // Makes the image cover the div fully
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents tiling
    
        backgroundImage:`url(${image})`
    }
    return (
        <div style={background}
>
            <input placeholder="add a task" 
             value={newTodo}
             onChange={updateTodoValue}
            ></input>
            <br></br>
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <h4>Task Todo</h4>
            <ul >{
                todos.map((todo)=>(
                   <li key={todo.id}>
                    <span style={todo.isDone? {textDecorationLine:"line-through"}:{}}>{todo.task}</span>
                    &nbsp; &nbsp; &nbsp;
                    <button onClick={()=>deleteTodo(todo.id)}>delete</button>
                    <button onClick={()=>markAsDone(todo.id)}>Mark As Done </button>
                 </li> 
                   
                ))}
                <br></br>
                <button onClick={markAllDone}>Mark All as Done</button>
            </ul>
        </div>
    );
}