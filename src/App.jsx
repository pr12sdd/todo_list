
import {useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import todoContext from '../Context/todoContext'
function App() {
  const[list,setList]=useState([{id:1 , todoData:"todo1",finished:false},{id:2,todoData:"todo2",finished:false}]);
  return (
    <todoContext.Provider value={{list,setList}}>
      <AddTodo updateList={(todo)=>setList([...list,{id:list.length+1,todoData:todo,finished:false}])}/>
      <TodoList/>
    </todoContext.Provider>
  )
}

export default App
