import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletebooks } from '../Featurs/BookSlice'

function BooksView() {
    const data=useSelector(state=>state.books.books)
    const dispatch=useDispatch()
    console.log(data)
    const handleDelete=(id)=>{
        dispatch(deletebooks(id))
    }
  return (
    <>
    <div className="overflow-x-auto w-2/3 mx-auto p-8">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Author</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        data.length>0 && data.map((ele)=>{
            const {id, title, Author}=ele
            return(
                <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{Author}</td>
                 <Link to='/edit-books' state={{id,title,Author}}> 
                 <button className='btn'>Edit </button>
                 </Link>
                 <button className='btn ml-2' onClick={()=>handleDelete(id)}>Delete</button>
              </tr>
            )
        })
     }
    </tbody>
  </table>
</div>
    </>
  )
}

export default BooksView