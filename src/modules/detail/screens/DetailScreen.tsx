import { View, Dimensions } from 'react-native'
import { useRoute, RouteProp } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { LineChart } from 'react-native-chart-kit'

import CharBar from '@/src/modules/detail/components/CharBar'
import Loader from '@/src/modules/core/components/loader/loader'
import Layout from '@/src/modules/core/components/layout/Layout'
import chartConfig from '@/src/modules/detail/utils/constants/chartConfig'
import getLabels from '@/src/modules/detail/utils/helpers/getLabels'
import useStockstore from '@/src/modules/home/store/useStockStore'
import { TimeSeriesStock } from '@/src/interface/Stock'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

type RootStackParamList = {
  Detail: { symbol: string }
}

type DetailRouteProp = RouteProp<RootStackParamList, 'Detail'>

const DetailScreen = () => {
  const [stock, setStock] = useState<TimeSeriesStock | null>(null)
  const [interval, setInterval] = useState<'1day' | '1week' | '1month'>('1day')
  const getStocksBySymbol = useStockstore((state) => state.getStocksBySymbol)
  const route = useRoute<DetailRouteProp>()
  const { symbol } = route.params

  useEffect(() => {
    getStocksBySymbol(symbol, interval).then(setStock)
  }, [symbol, interval]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!stock) return <Loader />

  const data = {
    labels: getLabels(interval),
    datasets: [
      {
        data: stock.values.map((value) => parseFloat(value.close)),
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2,
      },
      {
        data: stock.values.map((value) => parseFloat(value.open)),
        color: (opacity = 1) => `rgba(255, 99, 71, ${opacity})`,
      },
      {
        data: stock.values.map((value) => parseFloat(value.high)),
        color: (opacity = 1) => `rgba(255, 215, 0, ${opacity})`,
      },
      {
        data: stock.values.map((value) => parseFloat(value.low)),
        color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
      },
    ],
    legend: ['Close', 'Open', 'High', 'Low'],
  }

  return (
    <Layout>
      <CharBar interval={interval} setInterval={setInterval} />
      <View className={`flex-1 items-center`}>
        <LineChart
          chartConfig={chartConfig}
          data={data}
          height={screenHeight * 0.8}
          width={screenWidth}
        />
      </View>
    </Layout>
  )
}

export default DetailScreen
