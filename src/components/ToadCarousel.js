import React, { useState, useEffect } from "react"
import sampleCarouselSlides  from "../data/sampleCarouselSlides"
import { ContentContext } from "../contentContext"
import CarouselSlide from "../components/CarouselSlide"
import LoadingText from "../components/LoadingText"

function ToadCarousel() {
    const { carouselSlides, updateCarouselSlides } = React.useContext(ContentContext)
    const [isLoading, setisLoading] = useState(true)
    const [requestedCarouselSlides, setRequestedCarouselSlides] = useState()
    const [carouselIndex, setCarouselIndex] = useState(0)
    const carouselLength = carouselSlides.length


    useEffect(() => {
        const foundCarouselSlides = sampleCarouselSlides.carouselSlides
        // timeout to simulate fetch time
        setTimeout(() => {
            updateCarouselSlides(foundCarouselSlides)
        }, 25)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (carouselSlides.length) {
            setRequestedCarouselSlides(carouselSlides.slice(0, 6))
            setisLoading(false)
        }
    }, [carouselSlides])

    function prevCarouselSlide() {
        setCarouselIndex(prevIndex => {
            const newIndex = carouselIndex === 0 ? carouselLength - 1 : prevIndex - 1
            return newIndex
        })
    }

    function nextCarouselSlide() {
        setCarouselIndex(prevIndex => {
            const newIndex = carouselIndex === carouselLength - 1 ? 0 : prevIndex + 1
            return newIndex
        })
    }

    function selectCarouselSlide(slideIndex) {
        setCarouselIndex(slideIndex)
    }

    function checkForCurrentSlide(slideIndex) {
        return carouselIndex === slideIndex ? true : false
    }

    function getCarouselNav() {
        const carouselNavHtml = carouselSlides.map((slide, index) =>{
            const isCurrentSlide = checkForCurrentSlide(index)
            return (
                <button
                    key={`slide-indicator-${index}`}
                    className={`carousel__nav-indicator ${isCurrentSlide && 'carousel__nav-indicator--current'}`}
                    onClick={() => selectCarouselSlide(index)}
                >
                </button>
            )
        })
        return carouselNavHtml
    }

    return (
        <section>
            <div className="section__title_container">
                <h2 className="section__title">Toad's Prize House</h2>
            </div>

            {isLoading && <LoadingText />}
            {!isLoading && 
                <div className="carousel">

                    <div>
                        <h3 className="carousel__title">New items in stock this week!</h3>
                    </div>

                    <div className="carousel__track">
                        {requestedCarouselSlides.map((slide, index) => {
                            return <CarouselSlide key={`slide-${index}`} slide={slide} isCurrentSlide={checkForCurrentSlide(index)} />
                        })}
                    </div>

                    <button className="carousel__btn carousel__btn--prev" onClick={prevCarouselSlide}>{`<`}</button>
                    <button className="carousel__btn carousel__btn--next" onClick={nextCarouselSlide}>{`>`}</button>

                    <div className="carousel__nav">
                        {getCarouselNav()}
                    </div>
                    
                </div>
            }
            

        </section>
    )
}

export default ToadCarousel