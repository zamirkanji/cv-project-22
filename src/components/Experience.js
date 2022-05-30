import Item from "./Item"

export default function Experience ({input, setInputs, submitted, setSubmitted, inputDisabled, setInputDisabled, handleChange, handleSubmit, editButtonHandler}) {
    return (
        <div className="Experience-container">
            <h3 className="Section-title">Work Experience</h3>
            <form className="Experience-form-container" onSubmit={handleSubmit}>
                <div className="Form-input">
                    <Item for='position' labelText='Position' type='text' id='position' name='position' placeHolder={'Title at Company'} value={input.position || ""} onChange={handleChange} disabled={inputDisabled}/>
                    <Item for='company' labelText='Company' type='text' id='company' name='company' placeHolder={'Company Name'} value={input.company || ""} onChange={handleChange} disabled={inputDisabled}/>
                    <Item for='workStartDate' labelText='From' type='date' id='workStartDate' name='workStartDate' value={input.workStartDate || ""} onChange={handleChange} disabled={inputDisabled}/>
                    <Item for='workEndDate' labelText='To' type='date' id='workEndDate' name='workEndDate' value={input.workEndDate || ""} onChange={handleChange} disabled={inputDisabled}/>
                    <div>
                        <label htmlFor="roleDescription">Job Description: </label>
                        <textarea placeholder="Describe role (optional)..." id="roleDescription"></textarea>
                    </div>
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