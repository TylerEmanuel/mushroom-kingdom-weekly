import React from "react"

function CarouselSlide(props) {
    const { slide, isCurrentSlide } = props

    return (
        <div className={`carousel__slide ${isCurrentSlide && "carousel__slide--current"}`}>
            <img className="carousel__slide-img" src={slide.imgSrc} alt="asdf" />
        </div>
    )
}

export default CarouselSlide