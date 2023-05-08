import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className="navbar bg-slate-400">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Crud</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/addbook'>Addbook</Link></li>
      <li><Link to='/edit-books'>Editbook</Link></li>
    </ul>
  </div>
</div>
    </>
  )
}

export default Navbar