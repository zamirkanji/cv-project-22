import { Item } from "../App"
import Submit from "./Submit"

export default function Experience () {
    return (
        <div className="Experience-container">
            <h3 className="Section-title">Work Experience</h3>
            <form className="Experience-form-container">
                <div className="Form-input">
                    <Item for='position' labelText='Position' type='text' id='position' name='position' placeHolder={'Title at Company'}/>
                    <Item for='company' labelText='Company' type='text' id='company' name='company' placeHolder={'Company Name'}/>
                    <Item for='workStartDate' labelText='From' type='date' id='workStartDate' name='workStartDate'/>
                    <Item for='workEndDate' labelText='To' type='date' id='workEndDate' name='workEndDate'/>
                    <div>
                        <label htmlFor="roleDescription">Job Description: </label>
                        <textarea placeholder="Describe role (optional)..." id="roleDescription"></textarea>
                    </div>
                </div>
                <div className="Form-submit">
                    <Submit />
                </div>
            </form>
        </div>
        
    )
}