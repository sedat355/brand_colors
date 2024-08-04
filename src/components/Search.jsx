import { GrSearch } from "react-icons/gr"

function Search(props) {
  return(
    <div className="search">
      <div className="icon">
      <GrSearch/>
      </div>
      <input placeholder="Search brands.." />
    </div>
  )
}

export default Search