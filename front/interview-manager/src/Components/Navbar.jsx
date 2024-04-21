import React from 'react'

const Navbar = (props) => {
  return (
    <div>
      <nav className="absolute right-[100px] z-50 top-[20px]" >
        
        <ul className=" flex gap-x-[40px] text-gray-600 font-semibold cursor-pointer">
          <li onClick={()=>{props.setPage("home")}}>
              Home
          </li>
          <li onClick={()=>{props.setPage("queue")}}>
              Queue
          </li>
          <li onClick={()=>{props.setPage("signup")}}>
              Signup
          </li>
          <li onClick={()=>{props.setPage("login")}}>
              Login
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar