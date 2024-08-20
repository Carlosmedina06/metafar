import { View, Image } from 'react-native'

const UserAvatar = () => {
  return (
    <View className="flex-row items-center rounded-full border-2 border-[#7f3dFF] p-1">
      <Image
        className="h-8 w-8 rounded-full"
        source={{
          uri: 'https://avatar.iran.liara.run/public/39',
        }}
      />
    </View>
  )
}

export default UserAvatar
