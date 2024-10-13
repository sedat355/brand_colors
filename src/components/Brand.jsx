import {useContext} from "react"
import { getContrastYIQ } from "../helpers"
import MainContext from "./MainContext"

function Brand({brand}) {
  const { selectedBrands, setSelectedBrands } = useContext(MainContext)

  const toggleSelected = () => {
    if(selectedBrands.includes(brand.slug)) {
      setSelectedBrands(selectedBrands.filter(slug => slug !== brand.slug))
    } else {
      setSelectedBrands([...selectedBrands, brand.slug])
    }
  }

  return(
    <div className={`brand ${selectedBrands.includes(brand.slug) ? 'selected' : ''}`}>
      <h5 onClick={toggleSelected}>{brand.title}</h5>

      <div className="brand-colors">
        {brand.colors.map( (color, i) => 
          <span 
            style={{'--bgColor':`#${color}`, '--textColor':`${getContrastYIQ(color)}`}} 
            key={i}
          >{color}</span>)}
      </div>
    </div>
  )
}

export default Brand