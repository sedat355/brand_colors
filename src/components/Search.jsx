import {useContext} from "react"
import { GrSearch } from "react-icons/gr"
import MainContext from "./MainContext"

function Search() {
  const { setSearchTerm } = useContext(MainContext)

  return (
    <div className="search">
      <div className="icon">
        <GrSearch />
      </div>
      <input
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search brands.." 
      />
    </div>
  )
}

export default Search
