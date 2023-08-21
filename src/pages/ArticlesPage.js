import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import ListedArticles from "../components/ListedArticles"

function ArticlesPage() {
    const params = useParams()
    const articleCategory = params.articleCategory

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [articleCategory])

    return (
        <main className="container container--padded">
            <ListedArticles articleCategory={articleCategory} />
        </main>
    )
}

export default ArticlesPage
