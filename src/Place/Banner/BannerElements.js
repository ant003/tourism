import IconElement from './IconElement';
const BannerElements = ({ elementsNames, titles, data }) => {
    let list = [];
    let nameIndex = 0;

    for (let key of titles) {
        if (nameIndex === elementsNames.length)
            break;

        if (data.hasOwnProperty(key)) {
            list.push(
                <li key={key}>
                    <IconElement
                        index={key}
                        nameList={elementsNames}
                        nameIndex={nameIndex}
                        dataList={data}
                    >
                    </IconElement>
                </li>
            );

            ++nameIndex;
        }
    }
    return (list);
}

export default BannerElements;