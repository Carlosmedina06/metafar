import { FlatList, View } from 'react-native'
import { useEffect } from 'react'

import StockCard from '@/src/modules/home/components/stock/StockCard'
import useStockstore from '@/src/modules/home/store/useStockStore'
import CustomText from '@/src/modules/core/components/text/CustomText'
import SearchBar from '@/src/modules/home/components/search/SearchBar'

const StockList = () => {
  const [getStocks, searchStocks, loadMoreStocks, filteredStocks] = useStockstore((state) => [
    state.getStocks,
    state.searchStocks,
    state.loadMoreStocks,
    state.filteredStocks,
  ])

  useEffect(() => {
    getStocks()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <SearchBar placeholder="Search stocks by symbol..." onSearch={searchStocks} />
      {filteredStocks.length > 0 ? (
        <FlatList
          data={filteredStocks}
          keyExtractor={(item) => item.figi_code?.toString() || item.symbol}
          renderItem={({ item }) => <StockCard stock={item} />}
          onEndReached={loadMoreStocks}
          onEndReachedThreshold={0.5}
        />
      ) : (
        <View className="flex-1 items-center ">
          <CustomText size="text-tiny" text="No stocks found" weight="font-bold" />
        </View>
      )}
    </>
  )
}

export default StockList
