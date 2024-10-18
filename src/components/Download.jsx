import {useContext} from "react"
import MainContext from "./MainContext"
import { GrLink,GrDownload,GrClose } from "react-icons/gr"

const Download = () => {
  const { selectedBrands,setSelectedBrands } = useContext(MainContext)

  return(
    <div className="download">
      <div className="actions">

      </div>
      <div className="selected" onClick={	() => setSelectedBrands([])}>
        <GrClose/>
        {selectedBrands.length} brands collected
      </div>
    </div>
  )
}
export { Download }