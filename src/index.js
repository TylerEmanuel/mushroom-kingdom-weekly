import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ContentContextProvider } from "./contentContext"

ReactDOM.createRoot(document.getElementById("root")).render(
    <ContentContextProvider>
        <App />
    </ContentContextProvider>
)