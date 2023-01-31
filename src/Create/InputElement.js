const InputElement = ({labelName, value, handler,name}) => {
    return (
      <div className="labelElement">
        <label>{labelName}</label>
                <input
                    type="text"
                    required
                    value={value}
                    onChange={handler}
                    name={name}
                />
      </div>  
    );
}

export default InputElement;