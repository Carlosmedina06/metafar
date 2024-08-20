import { View } from 'react-native'

import CustomText from '@/src/modules/core/components/text/CustomText'

interface StockInfoProps {
  name: string
  currency: string
  type: string
}

const StockInfo = ({ name, currency, type }: StockInfoProps) => (
  <View className="ml-4 flex-1">
    <CustomText size="text-small" text={name} weight="font-bold" />
    <View className="mt-4 flex-row items-center justify-between">
      <CustomText color="text-light-20" size="text-tiny" text={currency} weight="font-light" />
      <CustomText color="text-light-20" size="text-tiny" text={type} weight="font-light" />
    </View>
  </View>
)

export default StockInfo
