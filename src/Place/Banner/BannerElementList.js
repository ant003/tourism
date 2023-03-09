import BannerElement from './BannerElement';
const BannerElementList = ({ namesList, propertiesList, data }) => {
    let list = [];
    let nameIndex = 0;

    for (let property of propertiesList) {
        if (nameIndex === namesList.length)
            break;

        if (data.hasOwnProperty(property)) {
            list.push(
                <li key={property}>
                    <BannerElement
                        property={property}
                        nameList={namesList}
                        nameIndex={nameIndex}
                        data={data}
                    >
                    </BannerElement>
                </li>
            );

            ++nameIndex;
        }
    }
    return (list);
}

export default BannerElementList;