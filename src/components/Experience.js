import Item from "./Item"

export default function Experience ({input, handleChange, handleSubmit, experienceHandleSubmit, experienceHandleInput, experienceFormSubmitted, experienceInputDisabled}) {    
    return (
        <div className="Experience-container">
            <h3 className="Section-title">Work Experience</h3>
            <form className="Experience-form-container" onSubmit={(e) => {
                handleSubmit(e);
                experienceHandleSubmit();
            }}>
                <div className="Form-input">
                    <Item forhtml='position' labelText='Position' type='text' id='position' name='position' placeHolder={'Title at Company'} value={input.position || ""} onChange={handleChange} disabled={experienceInputDisabled}/>
                    <Item forhtml='company' labelText='Company' type='text' id='company' name='company' placeHolder={'Company Name'} value={input.company || ""} onChange={handleChange} disabled={experienceInputDisabled}/>
                    <Item forhtml='workStartDate' labelText='From' type='date' id='workStartDate' name='workStartDate' value={input.workStartDate || ""} onChange={handleChange} disabled={experienceInputDisabled}/>
                    <Item forhtml='workEndDate' labelText='To' type='date' id='workEndDate' name='workEndDate' value={input.workEndDate || ""} onChange={handleChange} disabled={experienceInputDisabled}/>
                    <div className="textarea-input-container">
                        <label htmlFor="roleDescription">Job Description: </label>
                        <textarea placeholder="Describe role (optional)..." id="roleDescription"></textarea>
                    </div>
                </div>
                {experienceFormSubmitted === false ? 
                    <div className="Form-submit">
                        <button type="button" className="Edit-button" disabled>Edit</button>
                        <input type="submit" className="Submit-button" value={'Submit'}/>
                    </div> 
                    :
                    <div className="Form-submit">
                        <button type="button" className="Edit-button" onClick={experienceHandleInput}>Edit</button>
                        <input type="submit" className="Submit-button" value={'Submitted'} disabled/>
                    </div>
                }
            </form>
        </div>
        
    )
}