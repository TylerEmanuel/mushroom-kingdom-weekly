import React, { useState, useEffect } from "react"
import sampleArticles from "../data/sampleArticles"
import { ContentContext } from "../contentContext"
import SectionTitle from "../components/SectionTitle"
import SectionReadMore from "../components/SectionReadMore"
import Articles from "../components/Articles"
import LoadingText from "../components/LoadingText"

function FrontpageArticles(props) {
    const { articles, updateArticles } = React.useContext(ContentContext)
    const { articleCategory } = props

    const [isLoading, setisLoading] = useState(true)
    const [requestedArticles, setRequestedArticles] = useState()

    const sectionTitle = articleCategory
    const sectionLinkUrl = `/articles/${articleCategory}`

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
            const filteredArticles = articles[articleCategory].filter(article => {
                return !article.featured
            })
            setRequestedArticles(filteredArticles.slice(0, 5))
            setisLoading(false)
        }
    }, [articles, articleCategory])

    return (
        <section>
            <SectionTitle sectionTitle={sectionTitle} sectionLinkUrl={sectionLinkUrl}/>
            {isLoading ? <LoadingText /> : <Articles articles={requestedArticles} articlesClass={"frontpage"}/>}
            <SectionReadMore sectionLinkUrl={sectionLinkUrl}/>
        </section>
    )
}
export default FrontpageArticles