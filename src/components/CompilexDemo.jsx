import React, { useState } from 'react';

function CompilexDemo() {
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');
  const [lang, setLang] = useState('C');
  const [inputRadio, setInputRadio] = useState('false');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:8080', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code,
        input,
        lang,
        inputRadio,
      }),
    });

    // Handle the response here (e.g., show a message or process the data)
  };

  return (
    <div>
      <center>
        <h1>Compilex Demo</h1>
        <form id="myform" name="myform" onSubmit={handleSubmit}>
          <h3>Code</h3>
          <textarea
            rows="13"
            cols="100"
            id="code"
            name="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          ></textarea>
          <br />
          <h3>Input</h3>
          <textarea
            rows="10"
            cols="100"
            id="input"
            name="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
          <br />
          Language :{' '}
          <select name="lang" value={lang} onChange={(e) => setLang(e.target.value)}>
            <option value="C">C</option>
            <option value="C++">C++</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="CS">C#</option>
            <option value="VB">VB</option>
          </select>
          Compile With Input :
          <input
            type="radio"
            name="inputRadio"
            value="true"
            checked={inputRadio === 'true'}
            onChange={(e) => setInputRadio(e.target.value)}
          />
          yes
          <input
            type="radio"
            name="inputRadio"
            value="false"
            checked={inputRadio === 'false'}
            onChange={(e) => setInputRadio(e.target.value)}
          />
          No
          <br />
          <input type="submit" value="submit" name="submit" />
        </form>
      </center>
    </div>
  );
}

export default CompilexDemo;
