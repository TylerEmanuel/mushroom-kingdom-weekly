import React, { useState, useEffect } from "react"
import sampleTvListings from "../data/sampleTvListings"
import { ContentContext } from "../contentContext"
import TvListing from "../components/TvListing"
import LoadingText from "../components/LoadingText"

function TvListings() {
    const { tvListings, updateTvListings } = React.useContext(ContentContext)

    const [isLoading, setisLoading] = useState(true)
    const [requestedTvListings, setRequestedTvListings] = useState()
    
    useEffect(() => {
        const foundTvListings = sampleTvListings.tvListings
        // timeout to simulate fetch time
        setTimeout(() => {
            updateTvListings(foundTvListings)
        }, 25)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (tvListings.length) {
            setRequestedTvListings(tvListings.slice(0, 3))
            setisLoading(false)
        }
    }, [tvListings])

    return (
        <section>
            <div className="section__title_container">
                <h2 className="section__title">Upcoming TV Specials</h2>
            </div>
            {isLoading && <LoadingText />}
            {!isLoading && 
                <div className="tv-listings tv-listings--section">
                    {requestedTvListings.map(tvListing => <TvListing key={tvListing.id} tvListing={tvListing} />)}
                </div>
            }
        </section>
    )
}

export default TvListings