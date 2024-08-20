const getColorFromSymbol = (symbol: string) => {
  const colors = ['#FDA2A9', '#93EACA', '#8AC0FF', '#FCDDA1', '#D3BDFF']

  return colors[symbol.length % colors.length]
}

export default getColorFromSymbol
