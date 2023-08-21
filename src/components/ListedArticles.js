import React, { useState, useEffect } from "react"
import sampleArticles from "../data/sampleArticles"
import { ContentContext } from "../contentContext"
import SectionTitle from "../components/SectionTitle"
import Articles from "../components/Articles"
import LoadingText from "../components/LoadingText"

function ListedArticles(props) {
    const { articles, updateArticles } = React.useContext(ContentContext)
    const { articleCategory } = props

    const [isLoading, setisLoading] = useState(true)
    const [requestedArticles, setRequestedArticles] = useState()

    const sectionTitle = articleCategory

    useEffect(() => {
        const foundArticles = sampleArticles.articles.filter(article => article.category === articleCategory)
        // timeout to simulate fetch time
        setTimeout(() => {
            updateArticles(articleCategory, foundArticles)
        }, 200)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (articles[articleCategory].length) {
            setRequestedArticles(articles[articleCategory].slice(0, 15))
            setisLoading(false)
        }
    }, [articles, articleCategory])

    return (
        <section>
            <SectionTitle sectionTitle={sectionTitle}/>
            {isLoading ? <LoadingText /> : <Articles articles={requestedArticles} articlesClass={"listed"}/>}
        </section>
    )
}
export default ListedArticles