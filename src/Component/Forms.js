import React, { useState } from 'react';

function Forms() {
  const [name, setName] = useState('');
  const [fullName, setFullName] = useState();
  const [Subjects, setSubjects] = useState();

  const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };
  const onSubmit = () => {
    setFullName(name);
  };
  // const handleChange = (event) => {
  //   setEnglish(event.target.name);
  // };
  return (
    <div className="App">
      <form>
        <label>
          Student Name:
          <input
            type="Text"
            placeholder="Enter the Name"
            onChange={inputEvent}
            value={name}
          />
          <br />
          <br />
        </label>
        <label>
          Student class:
          <select id="class" name="class">
            <option value="I">class</option>
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
            <option value="IV">IV</option>
            <option value="V">V</option>
          </select>
          <br />
          <br />
        </label>
        <label>
          Student subjects:
          <select
            value={Subjects}
            id="Subjects"
            name="Subjects"
            onChange={(e) => setSubjects(e.target.value)}
          >
            <option value="">subject</option>
            <option value="English">English</option>
            <h1>{Subjects}</h1>
            <option value="Maths">Maths</option>
            <option value="Science">Science</option>
            <option value="Hindi">Hindi</option>
          </select>
          <br />
          <br />
        </label>

        <label>
          Student section:
          <select id="Section" name="Section">
            <option value="">Section</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
          <br />
          <br />
        </label>
      </form>
      <button onClick={onSubmit}>click me</button>
      <h1>Welcome{fullName}</h1>
    </div>
  );
}
export default Forms;
