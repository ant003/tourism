import style from './content.module.css';
const Content = ({ namesList, propertiesList, data }) => {

    let list = [];
    let nameIndex = 0;

    for (let property of propertiesList) {
        if (nameIndex === namesList.length)
            break;

        if (data.hasOwnProperty(property)) {
            list.push(
                <p key={property}><strong>{namesList[nameIndex]} </strong>{data[property]}</p>
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