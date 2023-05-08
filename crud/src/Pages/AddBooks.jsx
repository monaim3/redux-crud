import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import uuid4 from "uuid4";
import { addbooks } from '../Featurs/BookSlice';
import { useNavigate } from 'react-router-dom';
function AddBooks() {
  const [title, setTitile]=useState('')
  const [Author, setAuthor]=useState('')
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault();
    const books={id:uuid4(), title,Author}
    dispatch(addbooks(books))
    navigate("/", { replace: true });
  }
  return (
    <>
    <form onSubmit={handleSubmit} className='p-8'>
    <input onChange={(e)=>setTitile(e.target.value)} type="text" placeholder="Title" className="input input-bordered input-primary w-full max-w-xs" /><br/><br/>
    <input onChange={(e)=>setAuthor(e.target.value)} type="text" placeholder="Author" className="input input-bordered input-primary w-full max-w-xs" /><br/><br/>
    <input type="submit" value='Submit' className='btn text-slate-500'/>
    </form>
    </>
  )
}

export default AddBooks