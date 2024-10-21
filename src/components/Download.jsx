import {useContext} from "react"
import MainContext from "./MainContext"
import { GrLink,GrDownload,GrClose } from "react-icons/gr"
import {useState} from "react"
import {useEffect} from "react"
import {Link} from "react-router-dom"

const Download = () => {
  const { selectedBrands,setSelectedBrands,brands } = useContext(MainContext)
  const [downloadUrl,setDownloadUrl] = useState()
  const [cssMethod, setCssMethod] = useState('css')

  const getLink = () => {
    prompt('Here\'s the URL to share',`http://localhost:5173/collection/${selectedBrands.join(',')}`)
  }

  useEffect(() => {
    if(selectedBrands.length > 0) {
      let output = ''

      switch (cssMethod) {
        case 'css':
          output += ':root {\n'
          selectedBrands.map(slug => {
            let brand = brands.find(brand => brand.slug === slug)
            brand.colors.map((color,key) => {
              output += `--${slug}-${key}: #${color};\n`
            })
          })
          output += '}'
          break;
        case 'scss':
          selectedBrands.map(slug => {
            let brand = brands.find(brand => brand.slug === slug)
            brand.colors.map((color,key) => {
              output += `\$${slug}-${key}: #${color};\n`
            })
          })
          break;
        case 'less':
          selectedBrands.map(slug => {
            let brand = brands.find(brand => brand.slug === slug)
            brand.colors.map((color,key) => {
              output += `@${slug}-${key}: #${color};\n`
            })
          })
          break;
      }

      console.log('output',output)
      
      const blob = new Blob([output])
      console.log('blob', blob)//Blob {size: 69, type: ''}
      const url = URL.createObjectURL(blob)
      console.log('url', url)
      console.log('url', typeof url)//url string
      setDownloadUrl(url)

      return () => {
        URL.revokeObjectURL(url)
        setDownloadUrl('')
      }
    }
  },[selectedBrands,cssMethod])

  return(
    <div className="download">
      <div className="actions">
        <select className="download-list" onChange={(e) => setCssMethod(e.target.value)}>
          <option value='css'>CSS</option>
          <option value='scss'>SCSS</option>
          <option value='less'>LESS</option>
        </select>
        <a download={`brands.${cssMethod}`} href={downloadUrl}><GrDownload/></a>

        <Link to={`/collection/${selectedBrands.join(',')}`}>
          <GrLink/>
        </Link>

      </div>
      <div className="selected" onClick={	() => setSelectedBrands([])}>
        <GrClose/>
        {selectedBrands.length} brands collected
      </div>
    </div>
  )
}
export { Download }