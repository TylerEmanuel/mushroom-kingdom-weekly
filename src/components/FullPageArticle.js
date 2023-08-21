import React from "react"

function FullPageSampleArticle(props) {
    const {id, title, desc, topic, publishedDate, author, imgSrc, imgCaption, imgAuthor, body} = props.article

    const bodyText = body.split("\r\n").map((textStr, index) =>  {
        return <p key={index} className="article__body-text">{textStr}</p>
    })

    return (
        <div id={id} className="article article--full-page">
                        
            <div>
                <span className="article__topic">{topic}</span>
                <h2 className="article__title">{title}</h2>
                <p className="article__desc">{desc}</p>
            </div>

            <figure>
                <div className="article__media-container">
                    <img className="article__media-source" src={imgSrc} alt={`${title}`} />
                </div>     
                <figcaption className="article__media-caption-container">
                    <hr className="article__media-caption-dash" />
                    <span className="article__media-caption">{imgCaption}</span>
                    <span className="article__media-attribution">{imgAuthor}</span>
                </figcaption>
            </figure>

            <div className="article__publication-info">
                <span className="article__date">{publishedDate}</span>
                <span className="article__byline">By {author}</span>
            </div>

            <div>
                 {bodyText}   
            </div>

        </div>
    )
}

export default FullPageSampleArticle