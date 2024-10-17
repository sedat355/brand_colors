import Search from "./Search"
import Brand from "./Brand"
import MainContext from "./MainContext"
import {useContext} from "react"
import LazyLoad from 'react-lazyload';

function Content() {
  const {brands} = useContext(MainContext);
  
  return(
    <main className="content">
      <header className="content-header">
        <Search/>
      </header>

      <section className="brands">
        {brands.map( (brand, index) => 
          <LazyLoad 
            key={index} 
            once={true} 
            overflow={true} 
            placeholder="Yükleniyor...">
            <Brand brand={brand}/>
          </LazyLoad>
        )}
      </section>
    </main>
  )
}

export default Content