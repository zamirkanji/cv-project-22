import { Item } from "../App"
import Submit from "./Submit"

export default function General (props) {
    return (
        <div className="General-container">
            <h3 className="Section-title">General Info</h3>
            <form className="General-form-container">
                <div className="Form-input">
                    <Item for='firstName' labelText='First Name' type='text' id='firstName' name='firstName' placeHolder={'First Name'} vlaue={props.generalInfo}/>
                    <Item for='lastName' labelText='Last Name' type='text' id='lastName' name='lastName' placeHolder={'Last Name'}/>
                    <Item for='email' labelText='Email' type='email' id='email' name='email' placeHolder={'Email'}/>
                    <Item for='phoneNumber' labelText='Phone Number' type='tel' id='phoneNumber' name='phoneNumber' placeHolder={'Phone Number'}/>
                </div>
                <div className="Form-submit">
                    <Submit />
                </div>
            </form>
        </div>
    )       
}

export {Item}