import { Text, View } from 'react-native'

interface LetterAvatarProps {
  text: string
  color: string
  backgroundColor: string
}

const LetterAvatar = ({ text, color, backgroundColor }: LetterAvatarProps) => {
  return (
    <View
      className="h-[40px] w-[80px] items-center justify-center rounded-md"
      style={{ backgroundColor: backgroundColor }}
    >
      <Text className="text-tiny font-bold" style={{ color }}>
        {text}
      </Text>
    </View>
  )
}

export default LetterAvatar
