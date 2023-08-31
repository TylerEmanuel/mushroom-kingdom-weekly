import React, { useState, useEffect } from "react"
import sampleArticles from "../data/sampleArticles"
import { ContentContext } from "../contentContext"
import Articles from "../components/Articles"
import LoadingText from "../components/LoadingText"

function FeaturedArticlesSection() {
    const { articles, updateArticles } = React.useContext(ContentContext)

    const [isLoading, setisLoading] = useState(true)
    const [requestedArticles, setRequestedArticles] = useState()

    useEffect(() => {
        const foundArticles = sampleArticles.articles.filter(article => article.featured === true)
        // timeout to simulate fetch time
        setTimeout(() => {
            updateArticles("featured", foundArticles)
        }, 25)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (articles.featured.length) {
            setRequestedArticles(articles.featured.slice(0, 3))
            setisLoading(false)
        }
    }, [articles])

    return (
        <section>
            {isLoading ? <LoadingText /> : <Articles articles={requestedArticles} articlesClass={"featured"}/>}
        </section>
    )
}

export default FeaturedArticlesSection