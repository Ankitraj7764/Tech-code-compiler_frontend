import React from 'react'
import { motion, useViewportScroll ,useTransform} from "framer-motion"
function Footer() {
    const { scrollYProgress } = useViewportScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (
    <div>
        <motion.div
    // style={{  scale}} 
   className="bg-black">
  <div className="container mx-auto py-6 px-4">
    <div className="flex flex-wrap items-center justify-between">
      <div className="w-full md:w-1/4 mb-4 md:mb-0">
        <h1 className="text-white text-xl font-semibold">Footer</h1>
      </div>
      <div className="w-full md:w-1/4 mb-4 md:mb-0">
        <ul className="list-none text-white">
          <li className="mb-2">Home</li>
          <li className="mb-2">About Us</li>
          <li className="mb-2">Services</li>
          <li className="mb-2">Contact</li>
        </ul>
      </div>
      <div className="w-full md:w-1/4 mb-4 md:mb-0">
        <ul className="list-none text-white">
          <li className="mb-2">Privacy Policy</li>
          <li className="mb-2">Terms of Use</li>
          <li className="mb-2">FAQ</li>
        </ul>
      </div>
      <div className="w-full md:w-1/4">
        <p className="text-white">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </div>
  </div>
</motion.div>

    </div>
  )
}

export default Footer