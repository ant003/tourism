import { Icon } from '@iconify/react';

const Banner = ({nameList,keyList,dataList}) => {
    let list = []; 
    let nameIndex = 0;
        
    for(let key of keyList)
    {
        if(nameIndex === nameList.length)
            break;

        if(dataList.hasOwnProperty(key))
        {
            list.push(
            <li key={key}>
                <div className='icon-name'>
                    <Icon icon={nameList[nameIndex]} width="45" height="45" alt="icon"></Icon>
                    <div>
                        {dataList[key]}
                    </div>
                </div>
            </li>
            );
            ++nameIndex;
        }
    }
    
    return (
        <div className="banner">
        <div className="bannerCont">
            <h1>{ dataList.name }</h1>
            <h2>{dataList.province}</h2>
            <ul>{list}</ul>
        </div>
    </div>
    ); 
}

export default Banner;