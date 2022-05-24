import { useState } from "react"
import { Item } from "../App"
import Submit from "./Submit"

export default function Education (props) {
    const [educationValues, setEducationValues] = useState({});
    return (
        <form className="Education-form-container">
            <div className="Form-input">
                <Item for='firstName' labelText='University or School Name' type='text' id='firstName' name='firstName'/>
                <Item for='degree' labelText='Degree' type='text' id='degree' name='degree'/>
                <Item for='startDate' labelText='From' type='date' id='startDate' name='startDate'/>
                <Item for='endDate' labelText='To' type='date' id='endDate' name='endDate'/>
            </div>
            <div className="Form-submit">
                <Submit />
            </div>
        </form>
    )       
}