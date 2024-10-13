import Search from "./Search"
import Brand from "./Brand"
import MainContext from "./MainContext"
import {useContext} from "react"

function Content() {
  const {brands} = useContext(MainContext);
  
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