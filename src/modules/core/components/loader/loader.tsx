import { ActivityIndicator, View } from 'react-native'

const Loader = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator color="#0000ff" size="large" />
    </View>
  )
}

export default Loader
