const adjustColorBrightness = (hex: string, percent: number) => {
  let r = parseInt(hex.substring(1, 3), 16)
  let g = parseInt(hex.substring(3, 5), 16)
  let b = parseInt(hex.substring(5, 7), 16)

  r = Math.round(r * (percent / 100 + 1))
  g = Math.round(g * (percent / 100 + 1))
  b = Math.round(b * (percent / 100 + 1))

  r = Math.min(255, Math.max(0, r))
  g = Math.min(255, Math.max(0, g))
  b = Math.min(255, Math.max(0, b))

  return `rgb(${r},${g},${b})`
}

export default adjustColorBrightness
