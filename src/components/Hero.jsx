import React,{useState} from 'react'
import { motion, useScroll, useTransform, spring } from "framer-motion"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Hero = () => {
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [inputRadio, setInputRadio] = useState(false);
  const [lang, setLang] = useState("Python"); // Default language
  const [output, setOutput] = useState({});
  const notify = () => toast("Wow so easy!");
  const handleSubmit = async () => {


    try {
      const response = await axios.post('http://localhost:8080/compilecode', {
        code,
        input,
        inputRadio,
        lang,
      });
    
      const val = response.data;
      alert(val)
      setOutput(val);
      console.log(val);
    } catch (error) {
      alert(error);
      console.error('Error compiling code:', error);
    }
    // window.location.reload()
  }  

  return (
    <>

      <div className=" mt-4 bg-gradient-to-r from-blue-400 via-gray-800  flex flex-col ">
        <div className='h-screen flex flex-col'>
         <div className='grid grid-cols-2 h-5/6'>
         <motion.div
             className='flex justify-center  rounded-xl shadow-2xl  h-4/5 w-6/7 ' >

            <motion.textarea name="code"
           value={code}
           onChange={(event) => setCode(event.target.value)} initial={{ x: '-100vw' }} transition={{delay:2,type:spring ,duration:1.5}} animate={{ x: 0 }} className="rounded-xl bg-slate-950 text-green-400 font-semibold p-4 my-4 shadow-md w-4/5 h-5/6 " id="" cols="30" rows="10"></motion.textarea>

          </motion.div>
          <motion.div
            className='flex justify-center rounded-xl shadow-2xl  h-4/5 w-6/7 text-white font-semibold' >
          
            <motion.textarea
            placeholder='Input'
             type="text"
             name="input"
             value={input}
             onChange={(event) => setInput(event.target.value)}
             initial={{ x: '100vw' }} transition={{delay:2,type:spring ,duration:1.5}}  animate={{ x: 0 }} className="rounded-xl bg-slate-950 text-green-400 p-4 my-4 shadow-md w-4/5 h-5/6 "id="" cols="30" rows="10"></motion.textarea>
             
          </motion.div>
         </div>

        <motion.div 
        initial={{opacity:0}} animate={{opacity:1}}
        className='flex justify-center text-white  '> 
         <input
        type="checkbox"
        name="inputRadio"
        checked={inputRadio}
        onChange={(event) => setInputRadio(event.target.checked)}
      />
          Language : <motion.select
          name="lang"
          value={lang}
          onChange={(event) => setLang(event.target.value)}
           initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ delay: 2, duration: 2 }}  id="" className="text-black rounded-lg bg-gradient-to-r from-blue-200 via-gray-400 mx-2">

            <option value="C++">C++</option>
            <option value="C">C</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="CS">C#</option>
            <option value="VB">VB</option>

          </motion.select>
          <motion.button type="submit" onClick={()=>handleSubmit()} whileHover={{scale:1.2}} initial={{ x: '100vw' }} animate={{ x: 0 }}  className="p-8 mx-4 py-2 rounded-xl shadow-xl hover:bg-slate-400 hover:text-black text-white bg-slate-800  ">Run</motion.button>
        </motion.div>
         {output.output}
        </div>

      </div>
    </>
  )
}

export default Hero