import { Item } from "../App"
import Submit from "./Submit"

export default function General (props) {
    return (
        <form className="General-form-container">
            <div className="Form-input">
                <Item for='firstName' labelText='First Name' type='text' id='firstName' name='firstName'/>
                <Item for='lastName' labelText='Last Name' type='text' id='lastName' name='lastName'/>
                <Item for='email' labelText='Email' type='email' id='email' name='email'/>
                <Item for='phoneNumber' labelText='Phone Number' type='tel' id='phoneNumber' name='phoneNumber'/>
            </div>
            <div className="Form-submit">
                <Submit />
            </div>
        </form>
    )       
}

export {Item}