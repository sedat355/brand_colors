import Search from "./Search"
import BrandsData from "../brands.json"
import Brand from "./Brand"
import {useState} from "react"
 
let brandsArray = []
Object.keys(BrandsData).map( key => {
  brandsArray.push(BrandsData[key])
})

function Content() {
  const [brands, setBrands] = useState(brandsArray)

  return(
    <main className="content">
      <header className="content-header">
        <Search/>
      </header>

      <section className="brands">
        {brands.map( (brand, index) => <Brand key={index} brand={brand}/>)}
      </section>
    </main>
  )
}

export default Content