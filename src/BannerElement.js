import { Icon } from '@iconify/react';

const BannerElement = ({index,nameList,nameIndex,dataList}) => {
    return (          
            <div className='icon-name'>
                <Icon icon={nameList[nameIndex]} width="45" height="45" alt="icon"></Icon>
                <div>
                    {dataList[index]}
                </div>
            </div>
    );
}
 
export default BannerElement;