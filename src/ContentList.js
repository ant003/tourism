const ContentList = ({nameList,keyList,dataList}) => {
    let list = []; 
    let nameIndex = 0;
        
    for(let key of keyList)
    {
        if(nameIndex === nameList.length)
            break;

        if(dataList.hasOwnProperty(key))
        {
            list.push(<p key={key}><strong>{nameList[nameIndex]} </strong>{dataList[key]}</p>);
            ++nameIndex;
        }
    }

    return (list);
}

export default ContentList;