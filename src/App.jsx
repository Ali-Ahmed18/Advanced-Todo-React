import { useState } from 'react'
import './App.css'
import Todo from './Components/todo'

function App() {
  let [todo,setTodo] = useState([])
  let [todoValue,setTodoValue] = useState("")
  let [quantity,setQuantity] = useState(1)
  let [packed,setPackedItem] = useState(0)

  const addTodo =()=>{
      if(!todoValue){
        alert("fill empty fields!")
        return
      }
      const obj = {
          txt:todoValue,
          quantity,
          checked: false
      }
      todo.push(obj)
      setTodo([...todo])
  }
  const delTodo = (elem)=>{
        todo.splice(elem,1)
        setTodo([...todo])
  }
  const checkedTodo = (index,value)=>{
        todo[index].checked = value
        const packedItem = todo.filter((value)=>{
            return value.checked
        })
        setPackedItem(packedItem.length)
        setTodo([...todo])
  }
  return (
    <>
    
        <div className="main">
            <h1 className='text-3xl text-center py-5 bg-orange-400 font-bold'>FAR AWAY</h1>
            <div className='flex justify-center gap-5 py-6 bg-orange-600'>
              <p>What do you need for your trip?</p>
              <select onChange={(e)=> setQuantity(e.target.value)} className='border rounded-xl bg-yellow-200'>
                    <option value="select" disabled >select</option>
                    <option value="1" >1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
              </select>
              <input onChange={(e)=> setTodoValue(e.target.value)} className='border rounded-xl px-3 bg-yellow-200' type="text" placeholder='item..'/>
              <button onClick={addTodo} className='rounded-xl border px-3 bg-yellow-200'>ADD</button>
            </div>
            <div className="flex justify-between bg-gray-600 h-[67vh] flex-wrap px-6">
                  {todo.map((value,index)=>{
                    const {quantity,txt,checked} = value 
                        return <Todo checked={checked} txt={txt} deleteTodo={delTodo} checkedTodo={checkedTodo} id={index} quantity={quantity} key={index}/>
                  })}
            </div>
            <h1 className='py-5 bg-blue-300 text-center'>You have {todo.length} items on your list, and you alerady packed {packed} ({packed ?(((packed / todo.length) * 100).toFixed(1)) : 0}%)</h1>
        </div>
    </>
  )
}

export default App
