import KeyList from "./KeyList";

const Banner = ({nameList,keyList,dataList}) => {
    return(
            <div className="banner">
            <div className="bannerCont">
                <h1>{ dataList.name }</h1>
                <h2>{dataList.province}</h2>
                <ul>
                    <KeyList 
                        nameList={nameList} 
                        keyList={keyList}
                        dataList={dataList}
                        kind={"banner"}
                    >
                    </KeyList>
                </ul>
            </div>
        </div>
    ); 
}

export default Banner;