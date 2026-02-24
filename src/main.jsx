import reactdom from "react-dom/client"
import App from "./App.jsx"

const root = reactdom.createRoot(document.getElementById("root"))

root.render(
  <>
    <App />
  </>
)