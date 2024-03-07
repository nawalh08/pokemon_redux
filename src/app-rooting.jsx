import {createBrowserRouter} from "react-router-dom"
import App from "./App"
import DetailPoke from "./components/DetailPoke"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/detail/:id",
    element: <DetailPoke/>
  },
 

])

export default router