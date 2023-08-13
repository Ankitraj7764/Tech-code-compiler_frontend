import React from 'react'

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50">
      <ul className='flex justify-between bg-slate-400 sticky  text-white h-16 items-center'>
       <h1>Tech-code-compiler</h1> 
       <ul className='flex w-56 justify-between'>
       <li>Learn</li>
        <li>Practice</li>
        <li>Price</li>
       </ul>
       
      </ul>

    </div>
  )
}

export default Navbar