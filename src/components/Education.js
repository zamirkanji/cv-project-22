import { useState } from "react"
import { Item } from "../App"
import Submit from "./Submit"

export default function Education (props) {
    // const [educationValues, setEducationValues] = useState({});
    return (
        <div className="Education-container">
            <h3 className="Section-title">Education Experience</h3>
            <form className="Education-form-container">
                <div className="Form-input">
                    <Item for='schoolName' labelText='University or School Name' type='text' id='schoolName' name='schoolName' placeHolder={'School Name'}/>
                    <Item for='degree' labelText='Degree' type='text' id='degree' name='degree' placeHolder={'Degree Graduated With'}/>
                    <Item for='startDate' labelText='From' type='date' id='startDate' name='startDate'/>
                    <Item for='endDate' labelText='To' type='date' id='endDate' name='endDate'/>
                </div>
                <div className="Form-submit">
                    <Submit />
                </div>
            </form>
        </div>
    )       
}