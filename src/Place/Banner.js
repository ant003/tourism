import KeyList from "./KeyList";
// import landscape from "../img/lanscape.jpg"

const Banner = ({nameList,keyList,dataList}) => {

    let imageName = "lanscape.jpg";
   
    if(dataList.imageName !== undefined){
        imageName = dataList.imageName;
    }

    return(
            <div className="banner">
                <div className="background">
                    <img src={require(`../img/${imageName}`)} alt="banner-background" />
                </div>
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