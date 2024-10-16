import {getContrastYIQ} from "../helpers"

function Copied({color}) {
  console.log("color", color)
  return(
    <div className="copied" style={{"--bgColor":`#${color}`, "--textColor":`${getContrastYIQ(color)}`}}>
      <p>
        Copied {" "}
        <strong>{color}</strong>
        {" "} to clipboard
      </p>
    </div>
  )
}
export default Copied