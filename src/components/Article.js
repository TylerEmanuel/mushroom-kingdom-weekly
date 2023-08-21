import React from "react"
import { Link } from "react-router-dom"

function Article(props) {
    const {id, title, desc, category, topic, imgSrc} = props.article

    const articleUrl = `/articles/${category}/${id}`
    
    return (
        <article id={id} className={`article`}>
            <div className="article__media-container">
                <Link to={articleUrl} className="article__link">
                    <img className="article__media-source" src={imgSrc} alt={`${title}`} />
                </Link>
            </div>
            <div>
                <span className="article__topic">{topic}</span>
                <Link to={articleUrl} className="article__link">
                    <h3 className="article__title">{title}</h3>
                </Link>
                <div className="article__desc-container">
                    <hr className="article__desc-seperator" />
                    <p className="article__desc">{desc}</p>
                </div>
            </div>
        </article>
    )
}

export default Article