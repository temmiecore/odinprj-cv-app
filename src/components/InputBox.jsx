export default function InputBox({ id, label, type, placeholder, onChange, isRequired, value }) {
    const _required = isRequired ? {required: true} : {}

    return (
      <div className="inputBox">
        <label htmlFor={id}>
          <span className="inputBox-label">{label}</span>
          {isRequired && <span className="inputBox-required"> required</span>}
        </label>
  
        {type === "textarea" ? 
          <textarea value={value} id={id} name={id} placeholder={placeholder} onChange={onChange} {..._required}></textarea> 
          : 
          <input value={value} type={type} name={id} id={id} placeholder={placeholder} onChange={onChange} {..._required}/>
        }
      </div>
    );
  }