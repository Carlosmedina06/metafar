import { Pressable, View } from 'react-native'
import { useNavigation, NavigationProp } from '@react-navigation/native'

import StockInfo from '@/src/modules/home/components/stock/StockInfo'
import useAvatarStyles from '@/src/modules/core/hooks/useAvatarStyle'
import LetterAvatar from '@/src/modules/core/components/avatar/LetterAvatar'

type RootStackParamList = {
  Detail: { symbol: string }
}

type Navigation = NavigationProp<RootStackParamList>

interface StockCardProps {
  stock: {
    name: string
    currency: string
    type: string
    symbol: string
  }
}

const StockCard = ({ stock }: StockCardProps) => {
  const { avatarText, avatarColor, textColor } = useAvatarStyles(stock.symbol)
  const navigation = useNavigation<Navigation>()

  return (
    <View className="mb-2 flex-row items-center justify-between rounded-md border-light-60 bg-light-60 p-2">
      <Pressable onPress={() => navigation.navigate('Detail', { symbol: stock.symbol })}>
        <LetterAvatar backgroundColor={avatarColor} color={textColor} text={avatarText} />
      </Pressable>

      <StockInfo currency={stock.currency} name={stock.name} type={stock.type} />
    </View>
  )
}

export default StockCard
