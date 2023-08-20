import React from 'react'
import { motion, spring} from "framer-motion"
const Navbar = () => {
  return (
    < motion.div
     initial={{y:'-100vh'}} animate={{y:0}} transition={{type:spring, duration:1.5,delay:1}}
    className="sticky top-0 z-50 shadow-white shadow-md ">
      <ul className='flex justify-between bg-black   text-white h-16 items-center'>
       <h1 className="tech text-2xl font-bolder ml-2">Tech-code-compiler</h1> 
       <ul className='flex w-56 justify-between font-semibold mr-2'>
       <li>Learn</li>
        <li>Practice</li>
        <li>Price</li>
        <li>Login</li>
       </ul>
       
      </ul>

    </motion.div>
  )
}

export default Navbar