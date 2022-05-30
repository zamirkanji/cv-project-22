import { useState } from "react";
import Item from "./Item"

export default function Education ({input, handleChange, handleSubmit, educationHandleSubmit, educationHandleInput, educationFormSubmitted, educationInputDisabled}) { 
    return (
        <div className="Education-container">
            <h3 className="Section-title">Education Experience</h3>
            <form className="Education-form-container" onSubmit={(e) => {
                handleSubmit(e);
                educationHandleSubmit();
            }}>
                <div className="Form-input">
                    <Item forhtml='schoolName' labelText='University or School Name' type='text' id='schoolName' name='schoolName' placeHolder={'School Name'} value={input.schoolName || ""} onChange={handleChange} disabled={educationInputDisabled}/>
                    <Item forhtml='degree' labelText='Degree' type='text' id='degree' name='degree' placeHolder={'Degree Graduated With'} value={input.degree || ""} onChange={handleChange} disabled={educationInputDisabled}/>
                    <Item forhtml='startDate' labelText='From' type='date' id='startDate' name='startDate' value={input.startDate || ""} onChange={handleChange} disabled={educationInputDisabled}/>
                    <Item forhtml='endDate' labelText='To' type='date' id='endDate' name='endDate' value={input.endDate || ""} onChange={handleChange} disabled={educationInputDisabled}/>
                </div>
                {educationFormSubmitted === false ? 
                    <div className="Form-submit">
                        <button type="button" className="Edit-button" disabled>Edit</button>
                        <input type="submit" className="Submit-button" value={'Submit'}/>
                    </div> 
                    :
                    <div className="Form-submit">
                        <button type="button" className="Edit-button" onClick={educationHandleInput}>Edit</button>
                        <input type="submit" className="Submit-button" value={'Submitted'} disabled/>
                    </div>
                }
            </form>
        </div>
    )       
}