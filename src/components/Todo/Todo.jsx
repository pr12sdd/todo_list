import { useState } from "react"

function Todo({todoData,isFinished,changeFinished,onDelete,onEdit}){
const [finished,setFinished]=useState(isFinished);
const [isEdititng,setIsEditing]=useState(false);
const [editText,setEditText]=useState(todoData);
return( 
    <div>
    <input type="checkbox"  checked={finished} 
           onChange={e=>
            {setFinished(e.target.checked)
            changeFinished(e.target.checked)}
        }
    />    
    {(isEdititng)?<input type="text"value={editText} onChange={e=>setEditText(e.target.value)}/>:<span>{todoData}</span>}
    
    <button onClick={()=>{
        setIsEditing(!isEdititng);
        onEdit(editText);

    }}>{(!isEdititng)?'Edit':'Save'}</button>
    <button onClick={onDelete}> Delete </button>
    </div>
)      
}
export default Todo;