import "./App.css"
import * as Pages from "./components/pages/Pages"
import { useEffect } from "react"

//npm install --save aos@next
//aos
import AOS from "aos"
import "aos/dist/aos.css"

function App() {
  //aos
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <>
      <Pages.Pages />
    </>
  )
}

export default App