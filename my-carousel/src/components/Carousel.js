import React, {useState} from "react";
import "./Carousel.css"
import {images} from "../Data/CarouselData"


const Carousel = () => {
    const [curImg, setCurrImg] = useState(0)

    const handleClickLeft = () => {
        curImg > 0 && setCurrImg(curImg - 1)
    }
    const handleClickRight = () => {
        curImg < images.length - 1 && setCurrImg(curImg + 1)
    }

    return (
        <div className="carousel">

            <div className="carouselInner" style={{backgroundImage: `url(${images[curImg].img})`}}>
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