import {useContext} from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import MainContext from "./MainContext"
import LazyLoad from "react-lazyload"
import Brand from "./Brand"
import {Download} from "./Download"
import {useEffect} from "react"
import {GrLinkPrevious} from "react-icons/gr"

function Collection () {
  const {selectedBrands,setSelectedBrands,brands} = useContext(MainContext)
  const navigate = useNavigate()
  const { slugs } = useParams()
  //http://localhost:5173/collection/500px,about-me adres satırı buyken gelen değerler aşağıda
  console.log(slugs) //500px,about-me

  const clearSelectedBrands = () => {
    setSelectedBrands([])
    navigate(-1)
  }

  useEffect(() => {
    setSelectedBrands(slugs.split(','))
  },[])

  return(
    <main className="content">
      <header className="content-header">
        <Link to="/" onClick={clearSelectedBrands}>
          <a className="back-btn">
            <GrLinkPrevious/>
            All Brands
          </a>
        </Link>
        {selectedBrands.length !== 0 && <Download/>}
      </header>

      <section className="brands">
        {selectedBrands.map( (slug, index) => {
          let brand = brands.find(brand => brand.slug === slug)
            return(
              <LazyLoad
                key={index} 
                once={true} 
                overflow={true} 
                placeholder="Yükleniyor..."
              >
                <Brand brand={brand}/>
              </LazyLoad>
            )
          }
        )}
      </section>
    </main>
  )
}
export { Collection } 