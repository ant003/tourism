import styles from './place.module.css';
import KeyList from './KeyList';

const Banner = ({ nameList, keyList, dataList }) => {

    let imageName = "lanscape.jpg";

    if (dataList.imageName !== undefined) {
        imageName = dataList.imageName;
    }

    return (
        <div className={styles.banner}>
            <div className={styles.background}>
                <img src={require(`../img/${imageName}`)} alt="banner-background" />
            </div>
            <div className={styles.bannerCont}>
                <h1>{dataList.name}</h1>
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