export default function Item ({forhtml, labelText, disabled, onChange, value, placeHolder, name, type, id}) {
    return (
        <>
            <label htmlFor={forhtml}>{labelText}: </label>
            {disabled === false ? 
                <input 
                    onChange={onChange}   
                    value={value}
                    placeholder={placeHolder ? placeHolder : null}
                    name={name} 
                    type={type} 
                    id={id}
                    required
                    autoComplete='on'
                /> :
                <input 
                    onChange={onChange}   
                    value={value}
                    placeholder={placeHolder ? placeHolder : null}
                    name={name} 
                    type={type} 
                    id={id}
                    required
                    autoComplete='on'
                    disabled
                />
            }
        </>
    )
  }