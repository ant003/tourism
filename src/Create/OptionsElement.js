const OptionsElement = ({ labelName, options, value, handler, name }) => {
    let optionList = [];
    for (const option of options) {
        optionList.push(
            <option key={option} value={option}>{option}</option>
        );
    }
    return (
        <div className="optionsElement">
            <label>{labelName}</label>
            <select
                value={value}
                onChange={handler}
                name={name}
            >
                {optionList}
            </select>
        </div>
    );
}

export default OptionsElement;