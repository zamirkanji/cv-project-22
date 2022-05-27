export default function Submit ({setInput}) {
    return (
        <input type="submit" className="Submit-button" value={'Submit'} onClick={(e) => {
            e.preventDefault();
            setInput(
                // [...]
            )
        }}/>
    )
}