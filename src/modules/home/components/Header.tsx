import { View } from 'react-native'

import CustomText from '@/src/modules/core/components/text/CustomText'
import UserAvatar from '@/src/modules/core/components/avatar/UserAvatar'
import CustomIcon from '@/src/modules/core/components/icons/CustomIcon'

const Header = () => {
  return (
    <View className="flex-row items-center justify-between px-6 pb-4">
      <UserAvatar />
      <CustomText size="text-title1" text="Metafarm" weight="font-bold" />
      <CustomIcon
        color="white"
        name="bell"
        size={24}
        style={{
          backgroundColor: '#7f3dFF',
          borderRadius: 50,
          width: 44,
          height: 44,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    </View>
  )
}

export default Header
