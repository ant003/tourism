import styles from './banner.module.css';
import BannerElementList from './BannerElementList';

const Banner = ({ namesList, propertiesList, data }) => {

    const defaultImage = "lanscape.jpg";
    let imageName = defaultImage;

    if (data.imageName !== undefined) {
        imageName = data.imageName;
    }

    return (
        <div className={styles.banner}>
            <div className={styles.background}>
                <img src={require(`../../img/${imageName}`)} alt="banner-background" />
            </div>
            <div className={styles.bannerCont}>
                <h1>{data.name}</h1>
                <h2>{data.province}</h2>
                <ul>
                    <BannerElementList
                        namesList={namesList}
                        propertiesList={propertiesList}
                        data={data}
                    >
                    </BannerElementList>
                </ul>
            </div>
        </div>
    );
}

export default Banner;