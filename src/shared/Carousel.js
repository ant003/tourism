import './carousel.css';
import { useEffect } from "react";
import { useState } from "react";

const Carousel = ({ children, size }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children.length);

    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length);
    }, [children]);

    const handleNext = () => {
        if (currentIndex < length - size) {
            setCurrentIndex(prev => prev + 1);
        }
    }

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    }

    return (
        <div className="carousel">
            <div className="carousel-wrapper">
                {
                    currentIndex > 0 &&
                    <button onClick={handlePrev} className="left-arrow">
                        &lt;
                    </button>
                }
                <div className="carousel-content-wrapper">
                    <div className={`carousel-content show-${size}`}
                        style={{ transform: `translateX(-${currentIndex * (100 / size)}%)` }}
                    >
                        {children}
                    </div>
                </div>
                {
                    currentIndex < (length - size) &&
                    <button onClick={handleNext} className="right-arrow">
                        &gt;
                    </button>
                }
            </div>
        </div>
    )
}

export default Carousel;