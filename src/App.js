import Header from './components/Header';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import Preview from './components/Preview';
import './styles/index.css'
import { useState } from 'react';

function App() {
  
  const [experienceInfo, setExperienceInfo] = useState([]);
  const [educationInfo, setEducationInfo] = useState([]);
  // const [generalInfo, setGeneralInfo] = useState([]);

  const [input, setInputs] = useState({});

  const clearForms = () => {
    // setGeneralInfo([]);
    // setExperienceInfo([]);
    // setEducationInfo([]);

    setInputs({});
  }

  const [submitted, setSubmitted] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);
  
  const handleChange = e => {
      const name = e.target.name;
      const value = e.target.value;
      setInputs(values => ({...values, [name]: value}))
  }
  
  const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitted(true);
      setInputDisabled(true);
      console.log(input);
  }

  const editButtonHandler = () => {
      setSubmitted(false);
      setInputDisabled(false);
  }

  return (
    <div className="App">
      <div className='App-header'>
        <Header />
      </div>
      <div className='App-forms-container'>
        <div className='App-general'>
          <General 
            input={input} 
            setInputs={setInputs} 
            submitted={submitted} 
            setSubmitted={setSubmitted} 
            inputDisabled={inputDisabled} 
            setInputDisabled={setInputDisabled} 
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            editButtonHandler={editButtonHandler}
          />
        </div>
        <div className='App-education'>
          <Education 
            input={input} 
            setInputs={setInputs} 
            submitted={submitted} 
            setSubmitted={setSubmitted} 
            inputDisabled={inputDisabled} 
            setInputDisabled={setInputDisabled} 
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            editButtonHandler={editButtonHandler}
          />
        </div>
        <div className='App-experience'>
          <Experience 
            input={input} 
            setInputs={setInputs} 
            submitted={submitted} 
            setSubmitted={setSubmitted} 
            inputDisabled={inputDisabled} 
            setInputDisabled={setInputDisabled} 
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            editButtonHandler={editButtonHandler}
          />
        </div>
      </div>
      <div className='App-preview'>
        <button type='button' className='Submit-button' onClick={clearForms}>Clear All Forms</button>
        <Preview />
      </div>
    </div>
  );
}

export default App;
