import React from "react"
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import ArticlesPage from "./pages/ArticlesPage"
import ArticlePage from "./pages/ArticlePage"

function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="local" element={<ArticlesPage />} />
                    <Route path="world" element={<ArticlesPage />} />
                    <Route path="sports" element={<ArticlesPage />} />
                    <Route path="politics" element={<ArticlesPage />} />
                    <Route path="articles/:articleCategory" element={<ArticlesPage />} />
                    <Route path="articles/:articleCategory/:articleId" element={<ArticlePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
