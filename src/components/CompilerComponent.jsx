import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function CompilerComponent() {
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');
  const [inputRadio, setInputRadio] = useState(false);
  const [lang, setLang] = useState('C'); // Default language
  const [output, setOutput] = useState('');
  // const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
  console.log("first")
    try {
      const response = await axios.post('http://localhost:8080/compilecode', {
        code,
        input,
        inputRadio,
        lang,
      });
     console.log(response)
     alert((response))
      setOutput(response.data);
   
    } catch (error) {
      alert("error")
      console.error('Error compiling code:', error);
    }
  };

  return (
    <div>
      <h1>Code Compiler</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Code:
          <textarea
            name="code"
            value={code}
            onChange={(event) => setCode(event.target.value)}
          />
        </label>
        <br />
        <label>
          Input:
          <input
            type="text"
            name="input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </label>
        <br />
        <label>
          Include Input:
          <input
            type="checkbox"
            name="inputRadio"
            checked={inputRadio}
            onChange={(event) => setInputRadio(event.target.checked)}
          />
        </label>
        <br />
        <label>
          Language:
          <select
            name="lang"
            value={lang}
            onChange={(event) => setLang(event.target.value)}
          >
            <option value="C">C</option>
            <option value="C++">C++</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
          </select>
        </label>
        <br />
        <button type="submit">Compile</button>
      </form>
      <h2>Output:</h2>
      <pre>{output}</pre>
    </div>
  );
}

export default CompilerComponent;
