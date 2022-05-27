import Header from './components/Header';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import Preview from './components/Preview';
import './styles/index.css'
import { useState } from 'react';

function App() {
  const [generalInfo, setGeneralInfo] = useState([]);
  const [experienceInfo, setExperienceInfo] = useState([]);
  const [educationInfo, setEducationInfo] = useState([]);
  const [input, setInput] = useState('');

  const clearForms = () => {
    setGeneralInfo([]);
    setExperienceInfo([]);
    setEducationInfo([]);
  }

  const getInput = e => {
    try {
        setInput(e.target.value)
    } catch (e) {
        console.log(e);
    }
  }


  const submitValues = (e) => {
    console.log(e);
  }

  return (
    <div className="App">
      <div className='App-header'>
        <Header />
      </div>
      <div className='App-forms-container'>
        <div className='App-general'>
          <General input={input} getInput={getInput} setInput={setInput} setGeneralInfo={setGeneralInfo} />
        </div>
        <div className='App-education'>
          <Education getInput={getInput} setEducationInfo={setEducationInfo}/>
        </div>
        <div className='App-experience'>
          <Experience getInput={getInput} setExperienceInfo={setExperienceInfo}/>
        </div>
      </div>
      <div className='App-preview'>
        <Preview />
      </div>
    </div>
  );
}

export default App;
// export {Item}
