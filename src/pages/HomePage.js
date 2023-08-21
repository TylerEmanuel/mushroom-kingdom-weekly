import React, { useEffect } from "react"
import TvListings from "../components/TvListings"
import ToadCarousel from "../components/ToadCarousel"
import FeaturedArticles from "../components/FeaturedArticles"
import FrontpageArticles from "../components/FrontpageArticles"

function HomePage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main className="container container--padded">
            <FeaturedArticles />
            <FrontpageArticles articleCategory={"local"}/>
            <FrontpageArticles articleCategory={"world"}/>
            <ToadCarousel />
            <FrontpageArticles articleCategory={"sports"}/>
            <FrontpageArticles articleCategory={"politics"}/>
            <TvListings />
        </main>
    )
}

export default HomePage