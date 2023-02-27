import style from './content.module.css';
const Content = ({ propertiesNames, titles, data }) => {

    let list = [];
    let nameIndex = 0;

    for (let key of titles) {
        if (nameIndex === propertiesNames.length)
            break;

        if (data.hasOwnProperty(key)) {
            list.push(
                <p key={key}><strong>{propertiesNames[nameIndex]} </strong>{data[key]}</p>
            );
            ++nameIndex;
        }
    }
    return (
        <div className={style.content}>
            {list}
        </div>
    );
}
export default Content;