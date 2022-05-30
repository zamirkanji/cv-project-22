export default function Submit ({disabled} = null) {
    return (
        <div className="Form-submit">
            <input type="submit" className="Submit-button" value={'Submit'} disabled/>
        </div>
    )
}