import { useContext, useState } from "react";
import Todo from "../Todo/Todo";
import todoContext from "../../../Context/todoContext";
function TodoList(){   
const{list,setList}=useContext(todoContext);    
return(
    <div>
    {list.length>0 && list.map((todo)=><Todo key={todo.id} 
                               todoData={todo.todoData} 
                               isFinished={todo.finished} 
                               id={todo.id}
                               changeFinished={(isFinished)=>{
                               const newList=list.map(t=>{
                                    if(t.id==todo.id){
                                        todo.isFinished=isFinished;
                                    }
                                    return t;
                                })
                                setList(newList);
                                }}
                               onDelete={()=>{
                                const newList=list.filter(t=>t.id !=todo.id)
                                setList(newList);
                               }} 
                               onEdit={(todoText)=>{
                               const newList=list.map((t)=>{
                                    if(t.id==todo.id){
                                        todo.todoData=todoText;
                                    }
                                    return t;
                                })
                                setList(newList);
                               }

                               }              
                               />)}
    </div>
)
}
export default TodoList;