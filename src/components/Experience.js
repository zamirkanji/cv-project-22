// import { Item } from "../App"
import Item from "./Item"
import Submit from "./Submit"

export default function Experience (props) {
    return (
        <div className="Experience-container">
            <h3 className="Section-title">Work Experience</h3>
            <form className="Experience-form-container">
                <div className="Form-input">
                    <Item for='position' labelText='Position' type='text' id='position' name='position' placeHolder={'Title at Company'} value={props.getInput}/>
                    <Item for='company' labelText='Company' type='text' id='company' name='company' placeHolder={'Company Name'} value={props.getInput}/>
                    <Item for='workStartDate' labelText='From' type='date' id='workStartDate' name='workStartDate' value={props.getInput}/>
                    <Item for='workEndDate' labelText='To' type='date' id='workEndDate' name='workEndDate' value={props.getInput}/>
                    <div>
                        <label htmlFor="roleDescription">Job Description: </label>
                        <textarea placeholder="Describe role (optional)..." id="roleDescription"></textarea>
                    </div>
                </div>
                <div className="Form-submit">
                    {/* <Submit getSubmitButton={props.setExperienceInfo}/> */}
                    <input type="submit" className="Submit-button" value={'Submit'} onClick={(e) => {
                        props.setExperienceInfo()
                        // e.preventDefault();
                    }}/>
                </div>
            </form>
        </div>
        
    )
}