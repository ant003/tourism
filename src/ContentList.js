import KeyList from "./KeyList";
const ContentList = ({nameList,keyList,dataList}) => {
    return (
        <KeyList 
        nameList={nameList}
        keyList={keyList}
        dataList={dataList}
        kind={"content"}
        >
        </KeyList>
    );
}
export default ContentList;