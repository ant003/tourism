import BannerElement from "./BannerElement";

const keyList = ( {nameList,keyList,dataList,kind} ) => {
    let list = []; 
    let nameIndex = 0;
        
    for(let key of keyList){
        if(nameIndex === nameList.length)
            break;

        if(dataList.hasOwnProperty(key)){
            if(kind === "banner"){
                list.push(
                    <li key={key}>
                        <BannerElement 
                        index={key}
                        nameList={nameList}
                        nameIndex={nameIndex}
                        dataList={dataList}
                        >
                        </BannerElement>
                    </li>
                );
            }
            else if(kind === "content"){
                list.push(<p key={key}><strong>{nameList[nameIndex]} </strong>{dataList[key]}</p>);
            }
            ++nameIndex;
        }
    }
    return(list);
}

export default keyList;