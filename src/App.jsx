import Content from "./components/Content"
import Sidebar from "./components/Sidebar"
import MainContext from "./components/MainContext"
import BrandsData from "./brands.json"
import {useState} from "react"
import Copied from "./components/Copied"
import {useEffect} from "react"
import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
import {Collection} from "./components/Collection"

const App = () => {
  const brandsArray = []
  Object.keys(BrandsData).map(key => {
    brandsArray.push(BrandsData[key])
  })

  const [brands, setBrands] = useState(brandsArray)
  const [selectedBrands, setSelectedBrands] = useState([])
  const [copied, setCopied] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCopied(false)
    }, 1000);
    
    return () => clearTimeout(timeoutId)
  }, [copied]);

  useEffect(() => {
      setBrands(brandsArray.filter(brand => brand.title.toLowerCase().includes(searchTerm.toLowerCase())))
  }, [searchTerm]);

  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
    setSearchTerm,
  }

  return (
      <BrowserRouter>
        <MainContext.Provider value={data}>
          {copied && <Copied color={copied}/>}
          <Sidebar />
          <Routes>
            <Route path="/" exact element={<Content/>}/>
            <Route path="/collection/:slugs" element={<Collection/>} />
          </Routes>
        </MainContext.Provider>
      </BrowserRouter>
  )
}

export default App
