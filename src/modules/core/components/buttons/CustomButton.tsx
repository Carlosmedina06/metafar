import { Pressable, Text } from 'react-native'

interface CustomButtonProps {
  onPress: () => void
  text: string
  fill?: boolean
}

const CustomButton = ({ onPress = () => {}, text, fill = false }: CustomButtonProps) => {
  return (
    <Pressable className={`rounded-lg p-2 ${fill ? 'bg-[#85A342]' : ''}`} onPress={onPress}>
      <Text className="text-white">{text}</Text>
    </Pressable>
  )
}

export default CustomButton
