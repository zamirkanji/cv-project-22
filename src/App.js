import Header from './components/Header';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import Preview from './components/Preview';
import './styles/index.css'
import { useState } from 'react';

function App() { 
  const [generalFormSubmitted, setGeneralFormSubmitted] = useState(false);
  const [generalInputDisabled, setGeneralInputDisabled] = useState(false);
  const [experienceFormSubmitted, setExperienceFormSubmitted] = useState(false);
  const [experienceInputDisabled, setExperienceInputDisabled] = useState(false);
  const [educationFormSubmitted, setEducationFormSubmitted] = useState(false);
  const [educationInputDisabled, setEducationInputDisabled] = useState(false);

  const [input, setInputs] = useState({});

  const clearForms = () => {
    setInputs({});
    educationHandleInput();
    generalHandleInput();
    experienceHandleInput();
    console.log(input);
  }

  const educationHandleSubmit = () => {
    setEducationFormSubmitted(true);
    setEducationInputDisabled(true);
    console.log(input);
  }

  const educationHandleInput = () => {
    setEducationFormSubmitted(false);
    setEducationInputDisabled(false);
  }

  const generalHandleSubmit = () => {
    setGeneralFormSubmitted(true);
    setGeneralInputDisabled(true);
    console.log(input);
  }

  const generalHandleInput = () => {
    setGeneralFormSubmitted(false);
    setGeneralInputDisabled(false);
  }

  const experienceHandleSubmit = () => {
    setExperienceFormSubmitted(true);
    setExperienceInputDisabled(true);
    console.log(input);
  }

  const experienceHandleInput = () => {
    setExperienceFormSubmitted(false);
    setExperienceInputDisabled(false);
  }

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="App">
      <Header h1={'Create your CV!'} p={'Fill out the form below, and don\'t forget to preview.'}/>
      <div className='App-forms-container'>
        <div className='App-general'>
          <General 
            input={input} 
            setInputs={setInputs} 
            generalFormSubmitted={generalFormSubmitted}
            generalInputDisabled={generalInputDisabled}
            generalHandleSubmit={generalHandleSubmit}
            generalHandleInput={generalHandleInput} 
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
        <div className='App-education'>
          <Education 
            input={input} 
            setInputs={setInputs} 
            educationFormSubmitted={educationFormSubmitted}
            educationInputDisabled={educationInputDisabled}
            educationHandleSubmit={educationHandleSubmit}
            educationHandleInput={educationHandleInput}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
        <div className='App-experience'>
          <Experience 
            input={input} 
            setInputs={setInputs}
            experienceFormSubmitted={experienceFormSubmitted}
            experienceInputDisabled={experienceInputDisabled}
            experienceHandleSubmit={experienceHandleSubmit}
            experienceHandleInput={experienceHandleInput}  
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
      <div className='App-preview'>
        <button type='button' className='Submit-button' onClick={clearForms}>Clear All Forms</button>
        <button type="button" className="Preview-button" onClick={() => {
            <Preview input={input}/>
          }}>
          Preview
        </button>
      </div>
    </div>
  );
}

export default App;
