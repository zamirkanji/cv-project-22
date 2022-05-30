export default function Item (props) {
    return (
        <>
            <label htmlFor={props.for}>{props.labelText}: </label>
            {props.disabled === false ? 
                <input 
                    onChange={props.onChange}   
                    value={props.value}
                    placeholder={props.placeHolder ? props.placeHolder : null}
                    name={props.name} 
                    type={props.type} 
                    id={props.id}
                    required
                    autoComplete='on'
                /> :
                <input 
                    onChange={props.onChange}   
                    value={props.value}
                    placeholder={props.placeHolder ? props.placeHolder : null}
                    name={props.name} 
                    type={props.type} 
                    id={props.id}
                    required
                    autoComplete='on'
                    disabled
                />
            }
            {/* <input 
                onChange={props.onChange}   
                value={props.value}
                placeholder={props.placeHolder ? props.placeHolder : null}
                name={props.name} 
                type={props.type} 
                id={props.id}
                required
                autoComplete='on'
            /> */}
        </>
    )
  }