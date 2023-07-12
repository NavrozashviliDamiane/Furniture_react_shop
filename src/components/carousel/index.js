import { useState } from "react";
import style from './Carousel.module.scss'


const Carousel = ({ slides,url }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideStyle = {
        width: '569px',
        height: '455px',
        margin: '0 57px 0 57px',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex].url})`
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    const goToSlide = slideIndex => {
        setCurrentIndex(slideIndex);
    }
    return (
        <div className={style.sliderStyles}>
            
            
            <div className={style.sliderImageBox}>
                <img src={url} />
            </div>
        </div>
    )
}

export default Carousel