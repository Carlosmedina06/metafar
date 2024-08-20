import { View, Text, Pressable } from 'react-native'

import intervalData from '@/src/modules/detail/utils/constants/intervalData'

interface CharBarProps {
  interval: '1day' | '1week' | '1month'
  setInterval: (interval: '1day' | '1week' | '1month') => void
}

export default function CharBar({ interval, setInterval }: CharBarProps) {
  return (
    <View className={`bg-gray-900 p-4`}>
      <View className={`mb-4 flex-row justify-around`}>
        {intervalData?.map((item) => (
          <Pressable
            className={`p-2 ${interval === item.value ? 'border-blue-500 border-b-2' : ''}`}
            onPress={() => setInterval(item?.value as '1day' | '1week' | '1month')}
          >
            <Text className={`${interval === item?.value ? 'text-blue-500' : 'text-white'}`}>
              {item.label}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  )
}
