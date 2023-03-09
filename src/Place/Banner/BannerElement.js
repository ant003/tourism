import styles from './banner.module.css';
import { Icon } from '@iconify/react';

const BannerElement = ({ property, nameList, nameIndex, data }) => {
    return (
        <div className={styles.iconName}>
            <Icon icon={nameList[nameIndex]} width="45" height="45" alt="icon"></Icon>
            <div>
                {data[property]}
            </div>
        </div>
    );
}

export default BannerElement;