import Content from "./components/Content"
import Sidebar from "./components/Sidebar"
import MainContext from "./components/MainContext"
import BrandsData from "./brands.json"
import {useState} from "react"
import Copied from "./components/Copied"
import {useEffect} from "react"

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
    <>
      <MainContext.Provider value={data}>
        {copied && <Copied color={copied}/>}
        <Sidebar />
        <Content />
      </MainContext.Provider>
    </>
  )
}

export default App
