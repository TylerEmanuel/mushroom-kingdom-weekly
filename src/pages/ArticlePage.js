import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import sampleArticles from "../data/sampleArticles"
import { ContentContext } from "../contentContext"
import FullPageArticle from "../components/FullPageArticle"
import LoadingText from "../components/LoadingText"

function ArticlePage() {
    const { articles, updateArticles } = React.useContext(ContentContext)
    const params = useParams()
    const {articleCategory, articleId} = params

    const [isLoading, setisLoading] = useState(true)
    const [requestedArticle, setRequestedArticle] = useState()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
        const foundArticles = sampleArticles.articles.filter(article => article.category === articleCategory)
        // timeout to simulate fetch time
        setTimeout(() => {
            updateArticles(articleCategory, foundArticles)
        }, 200)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [articleId])

    useEffect(() => {
        const foundArticle = articles[articleCategory].find(article => article.id === articleId)
        if (foundArticle) {
            setRequestedArticle(foundArticle)
            setisLoading(false)
        }
    }, [articles, articleCategory, articleId])
    
    return (
        <main className="container container--padded">
            {isLoading ? <LoadingText /> : <FullPageArticle article={requestedArticle} />}
        </main>
    )
}

export default ArticlePage