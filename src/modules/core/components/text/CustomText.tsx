import { Text } from 'react-native'

interface CustomTextProps {
  text: string
  size?: string
  color?: string
  weight?: string
}

const CustomText: React.FC<CustomTextProps> = ({
  text,
  size = 'text-title3',
  color = 'text-dark-100',
  weight = 'font-bold',
}) => {
  return <Text className={`${color} ${size} ${weight}`}>{text}</Text>
}

export default CustomText
