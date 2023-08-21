import React, { useState } from "react"

const ContentContext = React.createContext()

function ContentContextProvider(props) {
    const [articles, setArticles] = useState({
        featured: [],
        local: [],
        world: [],
        sports: [],
        politics: [],
    })

    function updateArticles(articleCategory, newArticles) {
        setArticles(prevArticles => {
            return {
                ...prevArticles,
                [articleCategory]: newArticles
            }
        })
    }

    const [tvListings, setTvListings] = useState([])

    function updateTvListings(newTvListings) {
        setTvListings(prevTvListings => newTvListings)
    }

    const [carouselSlides, setCarouselSlides] = useState([])

    function updateCarouselSlides(newCarouselSlides) {
        setCarouselSlides(prevCarouselSlides => newCarouselSlides)
    }       

    return (
        <ContentContext.Provider value={{ articles, updateArticles, tvListings, updateTvListings, carouselSlides, updateCarouselSlides}} >
            {props.children}
        </ContentContext.Provider>
    )
}

export {ContentContextProvider, ContentContext}