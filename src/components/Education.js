import Item from "./Item"

export default function Education ({input, setInputs, submitted, setSubmitted, inputDisabled, setInputDisabled, handleChange, handleSubmit, editButtonHandler}) {
    // const [educationValues, setEducationValues] = useState({});
    return (
        <div className="Education-container">
            <h3 className="Section-title">Education Experience</h3>
            <form className="Education-form-container" onSubmit={handleSubmit}>
                <div className="Form-input">
                    <Item for='schoolName' labelText='University or School Name' type='text' id='schoolName' name='schoolName' placeHolder={'School Name'} value={input.schoolName || ""} onChange={handleChange} disabled={inputDisabled}/>
                    <Item for='degree' labelText='Degree' type='text' id='degree' name='degree' placeHolder={'Degree Graduated With'} value={input.degree || ""} onChange={handleChange} disabled={inputDisabled}/>
                    <Item for='startDate' labelText='From' type='date' id='startDate' name='startDate' value={input.startDate || ""} onChange={handleChange} disabled={inputDisabled}/>
                    <Item for='endDate' labelText='To' type='date' id='endDate' name='endDate' value={input.endDate || ""} onChange={handleChange} disabled={inputDisabled}/>
                </div>
                {submitted === false ? 
                    <div className="Form-submit">
                        <button type="button" className="Submit-button" disabled>Edit</button>
                        <input type="submit" className="Submit-button" value={'Submit'}/>
                    </div> 
                    :
                    <div className="Form-submit">
                        <button type="button" className="Submit-button" onClick={editButtonHandler}>Edit</button>
                        <input type="submit" className="Submit-button" value={'Submitted'} disabled/>
                    </div>
                }
            </form>
        </div>
    )       
}