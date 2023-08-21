import React from "react"
import Article from "../components/Article"

function Articles(props) {
    const { articles, articlesClass } = props

    return (
        <div className={`articles articles--${articlesClass}`}>
            {articles.map(article => {
                return <Article key={article.id} article={article}/>
            })}
        </div>
    )
}

export default Articles