import { useState } from 'react'

const Todo = ({txt,quantity,id,deleteTodo,checkedTodo,checked})=>{
   
    
    return(
        <>
            <div>
               <input onChange={(e)=> checkedTodo(id,e.target.checked)} type="checkbox" className='border'/>
               <span className={`ml-1 ${checked? "line-through" : ""}`}>{quantity}{txt}</span>
               <span className='ml-3 cursor-pointer'
                onClick={()=> deleteTodo(id)}>
                    &#10060;
                    </span>
            </div>
        </>
    )

}

export default Todo