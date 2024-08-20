import { View } from 'react-native'

import StockList from '@/src/modules/home/components/stock/StockList'
import CustomText from '@/src/modules/core/components/text/CustomText'

const StocksTable = () => {
  return (
    <>
      <View className="flex-row items-center justify-between px-6 pb-2">
        <CustomText color="text-dark-100" size="text-title3" text="Stocks" weight="font-bold" />
      </View>
      <StockList />
    </>
  )
}

export default StocksTable
