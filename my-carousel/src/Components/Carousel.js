import React, {useState} from "react";
import "../styles/carousel.css"
import {images} from "../Data/CarouselData"


const Carousel = () => {
    const [curImg, setCurrImg] = useState(0)
    const [fade, setFade] = useState(false)

    const animate = () => {
        setFade(true);
        setTimeout(() => setFade(false), 500);
    }
    const handleClickLeft = () => {
        curImg > 0 && setCurrImg(curImg - 1)
        curImg > 0 ? animate() : null
    }
    const handleClickRight = () => {
        curImg < images.length - 1 && setCurrImg(curImg + 1)
        curImg < images.length - 1 ? animate() : null
    }

    return (
        <div className="carousel">
            <div className={fade ? "carousel__inner fade" : "carousel__inner"} style={{backgroundImage: `url(${images[curImg].img})`}}>
                <div className="left" onClick={handleClickLeft}>
                    <span>&#10094;</span>
                </div>
                <div className="center">
                    <p>{images[curImg].title}</p>
                </div>
                <div className="right" onClick={handleClickRight}>
                    <span>&#10095;</span>
                </div>
            </div>

        </div>

    )
}

export default Carousel