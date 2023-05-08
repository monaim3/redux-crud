import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import uuid4 from "uuid4";
import { updatebooks } from '../Featurs/BookSlice';
function EditBooks() {
  const location=useLocation()
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const [id, setId] = useState(location.state.id);
  const [title, setTitile] = useState(location.state.title);
  const [Author, setAuthor] = useState(location.state.Author);

  const handleSubmit=(e)=>{
    e.preventDefault();

    dispatch(updatebooks({id,title, Author}))
    navigate("/", { replace: true });
  }
  return (
   <>
    <form onSubmit={handleSubmit} className='p-8'>
    <input onChange={(e)=>setTitile(e.target.value)} value={title} type="text" placeholder="Title" className="input input-bordered input-primary w-full max-w-xs" /><br/><br/>
    <input onChange={(e)=>setAuthor(e.target.value)} value={Author} type="text" placeholder="Author" className="input input-bordered input-primary w-full max-w-xs" /><br/><br/>
    <input type="submit" value='Update' className='btn text-slate-500'/>
    </form>
   </>
  )
}

export default EditBooks