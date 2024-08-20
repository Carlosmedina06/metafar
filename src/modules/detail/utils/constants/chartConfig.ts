const chartConfig = {
  backgroundGradientFrom: '#000',
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: true,
}

export default chartConfig
