import React from "react"

function TvListing(props) {
    const {title, station, time, imgSrc} = props.tvListing
    
    return (
        <div className="tv-listing">
            <h4 className="tv-listing__title">{title}</h4>
            
            
            <span className="tv-listing__time">{time} - {station}</span>
            
            <div className="tv-listing__media-container">
                <img className="tv-listing__media-source" src={imgSrc} alt={`${title}`} />
            </div>
        </div>
    )
}

export default TvListing