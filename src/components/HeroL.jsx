import React from 'react'
import { motion, useViewportScroll, useTransform } from "framer-motion"
function HeroL() {
  const { scrollXProgress,scrollYProgress ,scaleX} = useViewportScroll()
  const scale = useTransform(scrollXProgress, [0, 1], [0.2, 2]);
  return (
    <>
      <div className="grid grid-cols-2 h-3/4 w-5/6">
        <div className="flex flex-col">
          <motion.div
            // style={{ scale }} 
            initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{duration:2}} className="font-bold h-1/3 bg-transparent textsum flex justify-center items-center ml-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum magnam, officia
            sequi hic deleniti consequatur quibusdam? Quasi cupiditate voluptate facere dolorum odio dolorem!</motion.div>
          <motion.div  whileInView={{ boxShadow: "5px 5px 5px 5px rgba(255, 255, 255, 0.5)",scale:1.07}} className="h-1/3 overflow-hidden rounded-lg shadow-xl ml-6"><img src="./code1.jpg" alt=""  /></motion.div>
          <motion.div 
               initial={{ x: '100vw' }} animate={{ x: 0 }} transition={{duration:2, delay:2}} 
           className="bg-transparent ml-4 h-1/3 textsum flex justify-center items-center font-bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dolorem nobis voluptates eum eius ipsam maxime, labore quisquam vero distinctio? Odit iste cupiditate debitis.</motion.div>
        </div>
        <div className="flex justify-end flex-col ml-36">
          <div className="h-1/3 flex justify-center shadow-xl rounded-lg"><motion.img 
          style={{ scale: scrollYProgress}}
           className='  shadow-xl rounded-lg' src="./code2.jpg" alt="" height={400} width={400} /></div>
          <motion.div
             initial={{ x: '100vw' }} animate={{ x: 0 }} transition={{duration:2, delay:2}} className="bg-transparent flex justify-center items-center h-1/4 w-4/5 textsum font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quidem
            cupiditate mollitia dolorem, temporibus iste, blanditiis necessitatibus adipisci vero soluta illum sint doloremque?</motion.div>
          <div className="h-1/3 flex mb-2 justify-end shadow-2xl rounded-lg"><motion.img 
          style={{ scale:scrollYProgress }}
            className=' shadow-xl rounded-lg' src="code3.jpg" alt="" height={400} width={400} /></div>
        </div>

      </div>


    </>
  )
}

export default HeroL