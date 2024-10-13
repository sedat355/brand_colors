import Content from "./components/Content"
import Sidebar from "./components/Sidebar"
import MainContext from "./components/MainContext"
import BrandsData from "./brands.json"
import {useState} from "react"

let brandsArray = []
Object.keys(BrandsData).map( key => {
  brandsArray.push(BrandsData[key])
})

const App = () => {
  const [brands, setBrands] = useState(brandsArray)

  const data = {
    brands,
  }

  return (
    <>
      <MainContext.Provider value={data}>
        <Sidebar />
        <Content />
      </MainContext.Provider>
    </>
  )
}

export default App
