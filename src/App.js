import Header from './components/Header';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import Preview from './components/Preview';
import './styles/index.css'

function Item (props) {
  return (
      <>
          <label htmlFor={props.for}>{props.labelText}: </label>
          <input 
              // onChange={props}   
              // value={props}
              placeholder={props.placeHolder ? props.placeHolder : null}
              name={props.name} 
              type={props.type} 
              id={props.id}
              required
              autoComplete='on'
          />
      </>
  )
}

function App() {
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
          <General />
        </div>
        <div className='App-education'>
          <Education />
        </div>
        <div className='App-experience'>
          <Experience />
        </div>
        {/* <div className='App-submit'>

        </div> */}
      </div>
      <div className='App-preview'>
        <Preview />
      </div>
    </div>
  );
}

export default App;
export {Item}
