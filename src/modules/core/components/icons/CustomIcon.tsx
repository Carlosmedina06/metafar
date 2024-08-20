import { View } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome5'

interface IconProps {
  color: string
  size: number
  name: string
  style?: {
    [key: string]: string | number
  }
}

const CustomIcon = (props: IconProps) => (
  <View style={props.style}>
    <FontAwesome6 color={props.color} name={props.name} size={props.size} />
  </View>
)

export default CustomIcon
