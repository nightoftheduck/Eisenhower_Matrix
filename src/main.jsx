import React from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App"

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("root")

  // Check if the root element exists
  if (container) {
    const root = createRoot(container)
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
  } else {
    console.error('Root element not found! Make sure there is a div with id="root" in your HTML file.')
  }
})

