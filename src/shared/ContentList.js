import './content.css';
import KeyList from '../Place/KeyList';
const ContentList = ({ nameList, keyList, dataList }) => {
    return (
        <div className="content">
            <KeyList
                nameList={nameList}
                keyList={keyList}
                dataList={dataList}
                kind={"content"}
            >
            </KeyList>
        </div>
    );
}
export default ContentList;