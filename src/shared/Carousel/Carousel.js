import styles from './carousel.module.css';
import { useEffect } from "react";
import { useState } from "react";

const Carousel = ({ children, size }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children.length);

    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length);
    }, [children]);

    /**
     * Called when the right arrow is clicked
     * it moves the carousel one slide to the
     * right.
     */
    const handleNext = () => {
        if (currentIndex < length - size) {
            setCurrentIndex(prev => prev + 1);
        }
    }
    /**
     * Called when the left arrow is clicked
     * it moves the carousel one slide to the
     * left.
     */
    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    }

    return (
        <div>
            <div className={styles.wrapper}>
                {
                    currentIndex > 0 &&
                    <button onClick={handlePrev} className={styles.leftArrow}>
                        &lt;
                    </button>
                }
                <div className={styles.contentWrapper}>
                    <div className={styles.content + ' ' + styles[`show${size}`]}
                        style={{ transform: `translateX(-${currentIndex * (100 / size)}%)` }}
                    >
                        {children}
                    </div>
                </div>
                {
                    currentIndex < (length - size) &&
                    <button onClick={handleNext} className={styles.rightArrow}>
                        &gt;
                    </button>
                }
            </div>
        </div>
    )
}

export default Carousel;