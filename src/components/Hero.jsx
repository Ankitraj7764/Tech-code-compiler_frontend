import React from 'react'
import { motion, useViewportScroll, useTransform } from "framer-motion"


const Hero = () => {

  return (
    <>

      <div className="bg-gradient-to-r from-blue-400 via-gray-800  flex flex-col ">
        <div className='h-screen flex flex-col'>
         <div className='grid grid-cols-2 h-5/6'>
         <motion.div
             className='flex justify-center  rounded-xl shadow-2xl  h-4/5 w-6/7 ' >

            <motion.textarea initial={{ x: '-100vw' }} transition={2} animate={{ x: 0 }} className="rounded-xl bg-slate-950 text-green-400 p-4 my-4 shadow-md w-4/5 h-5/6 " name="" id="" cols="30" rows="10"></motion.textarea>

          </motion.div>
          <motion.div
            className='flex justify-center rounded-xl shadow-2xl  h-4/5 w-6/7' >

            <motion.textarea initial={{ x: '-100vw' }} transition={2} animate={{ x: 0 }} className="rounded-xl bg-slate-950 text-green-400 p-4 my-4 shadow-md w-4/5 h-5/6 " name="" id="" cols="30" rows="10"></motion.textarea>

          </motion.div>
         </div>

        <div className='flex justify-center text-white  '>
          Language : <motion.select initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ delay: 0.5, duration: 0.5 }} name="lang" id="" className="text-black rounded-lg bg-gradient-to-r from-blue-200 via-gray-400 mx-2">

            <option value="C++">C++</option>
            <option value="C">C</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="CS">C#</option>
            <option value="VB">VB</option>

          </motion.select>
          <motion.button initial={{ x: '100vw' }} animate={{ x: 0 }} transition={{ delay: 0.5, duration: 0.5 }} className="p-8 mx-4 py-2 rounded-xl shadow-xl hover:bg-slate-400 hover:text-black text-white bg-slate-800  ">Run</motion.button>
        </div>
        </div>

      </div>
    </>
  )
}

export default Hero