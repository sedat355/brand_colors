function Brand({brand}) {
  return(
    <div className="brand">
      <h5>{brand.title}</h5>

      <div className="brand-colors">
        {brand.colors.map( (color, i) => <span style={{'--bgColor':`#${color}`}} key={i}>{color}</span>)}
      </div>
    </div>
  )
}

export default Brand