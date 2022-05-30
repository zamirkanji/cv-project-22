import Item from "./Item"

export default function General ({input, handleSubmit, handleChange, generalHandleSubmit, generalHandleInput, generalFormSubmitted, generalInputDisabled}) {
    return (
        <div className="General-container">
            <h3 className="Section-title">General Info</h3>
            <form className="General-form-container" onSubmit={(e) => {
                handleSubmit(e);
                generalHandleSubmit();
            }}>
                <div className="Form-input">
                    <Item forhtml='firstName' labelText='First Name' type='text' id='firstName' name='firstName' placeHolder={'First Name'} value={input.firstName || ""} onChange={handleChange} disabled={generalInputDisabled}/>
                    <Item forhtml='lastName' labelText='Last Name' type='text' id='lastName' name='lastName' placeHolder={'Last Name'} value={input.lastName || ""} onChange={handleChange} disabled={generalInputDisabled}/>
                    <Item forhtml='email' labelText='Email' type='email' id='email' name='email' placeHolder={'Email'} value={input.email || ""} onChange={handleChange} disabled={generalInputDisabled}/>
                    <Item forhtml='phoneNumber' labelText='Phone Number' type='tel' id='phoneNumber' name='phoneNumber' placeHolder={'Phone Number'} value={input.phoneNumber || ""} onChange={handleChange} disabled={generalInputDisabled}/>
                </div>
                {generalFormSubmitted === false ? 
                    <div className="Form-submit">
                        <button type="button" className="Edit-button" disabled>Edit</button>
                        <input type="submit" className="Submit-button" value={'Submit'}/>
                    </div> 
                    :
                    <div className="Form-submit">
                        <button type="button" className="Edit-button" onClick={generalHandleInput}>Edit</button>
                        <input type="submit" className="Submit-button" value={'Submitted'} disabled/>
                    </div>
                }
            </form>
        </div>
    )              
}

export {Item}