import React from "react"
import { Link } from "react-router-dom"

function SectionReadMore(props) {
    const { sectionLinkUrl } = props
    return (
        <div className="section__read-more-container">
            <Link to={sectionLinkUrl}>
                <span className="section__read-more">Read more</span>
            </Link>
        </div>
    )
}

export default SectionReadMore