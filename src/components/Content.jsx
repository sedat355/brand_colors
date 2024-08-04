import Search from "./Search"
import BrandsData from "../brands.json"
import Brand from "./Brand"

function Content() {

  let brandsArray = []
  Object.keys(BrandsData).map( key => {
    brandsArray.push(BrandsData[key])
  })

  return(
    <main className="content">
      <header className="content-header">
        <Search/>
      </header>

      <section className="brands">
        {brandsArray.map( (brand, index) => <Brand key={index} brand={brand}/>)}
      </section>
    </main>
  )
}

export default Content