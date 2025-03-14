 import {useState, usestate} from "react";
 import { v4 as uuidv4 } from 'uuid';
 export default function ToDoList(){
    let [ToDoList,setTodos]=useState([{task:"Some Task",id:uuidv4(),isDone:false}]);/*array convert into object for unique element*/
    let [newTodo,setNewTodo]=useState("");
    let addnewtask=()=>{
        if (!newTodo.trim()) {
            alert("Task cannot be empty!"); // Show an alert if input is empty
            return;
        } 
       /*delete kaliya change kiya isse phel vedio dekhyia*/
        setTodos((prevTodos)=>{
          return  [...prevTodos,{task: newTodo,id:uuidv4(),isDone:false}]});
        setNewTodo("");
    }
    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value); /*event is used for acess the value*/
    } 
    let deleteTodo=(id)=>{
        setTodos((prevTodos)=>{
            return prevTodos.filter((todo)=>todo.id!==id)
        })
    }
    let marksdoneall=( )=>{
        setTodos((prevTodos)=>
        prevTodos.map((todo)=>{
            return {...todo,isDone:true,};
        })
        )
    }
    let marksdone=(id)=>{
        setTodos((prevTodos)=>
             prevTodos.map((todo)=>{
                if(todo.id==id){
                    return {...todo,isDone:true,};
                }
                else{
                    return todo;
                }
            })
        )
    }
    return (
        <div>
            
            <input id="input" placeholder ="Add the Task"value={newTodo} onChange={updateTodoValue}></input>
            <br/>
            <br/>
            <button id="Addtask" onClick={addnewtask}>Add Task</button>
            <br/>
            <br/>
            <hr/>
            <h4>To-Do Task</h4>
            <ol>
                {
                    ToDoList.map((todo)=>(
                        <li key={todo.id}><span style={todo.isDone ?{ textDecorationLine:"line-through"}:{}}>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;  
                        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={()=>marksdone(todo.id)}>Mark Done</button>
                         </li>   
                     
                    ))
                }
            </ol>
            <br></br>
            <button onClick={marksdoneall}>Mark All Done</button>
        </div>
    )
 }