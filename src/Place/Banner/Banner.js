import styles from './banner.module.css';
import BannerElements from './BannerElements';

const Banner = ({ nameList, keyList, dataList }) => {

    let imageName = "lanscape.jpg";

    if (dataList.imageName !== undefined) {
        imageName = dataList.imageName;
    }

    return (
        <div className={styles.banner}>
            <div className={styles.background}>
                <img src={require(`../../img/${imageName}`)} alt="banner-background" />
            </div>
            <div className={styles.bannerCont}>
                <h1>{dataList.name}</h1>
                <h2>{dataList.province}</h2>
                <ul>
                    <BannerElements
                        elementsNames={nameList}
                        titles={keyList}
                        data={dataList}
                    >
                    </BannerElements>
                </ul>
            </div>
        </div>
    );
}

export default Banner;