export default function Item (props) {
    return (
        <>
            <label htmlFor={props.for}>{props.labelText}: </label>
            <input 
                onChange={props.getInput}   
                value={props.input}
                placeholder={props.placeHolder ? props.placeHolder : null}
                name={props.name} 
                type={props.type} 
                id={props.id}
                required
                autoComplete='on'
            />
        </>
    )
  }