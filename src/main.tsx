import "@abraham/reflection";
import React from "react"
import ReactDOM from "react-dom/client"
import Movies from "./web/features/movies"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Movies/>
  </React.StrictMode>,
)
