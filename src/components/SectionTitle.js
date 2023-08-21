import React from "react"
import { Link } from "react-router-dom"

function SectionTitle(props) {
    const { sectionTitle, sectionLinkUrl } = props
    
    if (sectionLinkUrl) {
        return (
            <div className="section__title_container">
                <Link  to={sectionLinkUrl} className="article__link">
                    <h2 className="section__title">{sectionTitle}</h2>
                </Link>
            </div>
        )
    } else {
        return (
            <div className="section__title_container">
                <h2 className="section__title">{sectionTitle}</h2>
            </div>
        )
    }
}

export default SectionTitle