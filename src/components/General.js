import Item from "./Item"

export default function General ({input, setInputs, submitted, setSubmitted, inputDisabled, setInputDisabled, handleChange, handleSubmit, editButtonHandler}) {
    return (
        <div className="General-container">
            <h3 className="Section-title">General Info</h3>
            <form className="General-form-container" onSubmit={handleSubmit}>
                <div className="Form-input">
                    <Item for='firstName' labelText='First Name' type='text' id='firstName' name='firstName' placeHolder={'First Name'} value={input.firstName || ""} onChange={handleChange} disabled={inputDisabled}/>
                    <Item for='lastName' labelText='Last Name' type='text' id='lastName' name='lastName' placeHolder={'Last Name'} value={input.lastName || ""} onChange={handleChange} disabled={inputDisabled}/>
                    <Item for='email' labelText='Email' type='email' id='email' name='email' placeHolder={'Email'} value={input.email || ""} onChange={handleChange} disabled={inputDisabled}/>
                    <Item for='phoneNumber' labelText='Phone Number' type='tel' id='phoneNumber' name='phoneNumber' placeHolder={'Phone Number'} value={input.phoneNumber || ""} onChange={handleChange} disabled={inputDisabled}/>
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

export {Item}