import Header from '../components/Header'
import StocksTable from '../components/stock/StockTable'

import Layout from '@/src/modules/core/components/layout/Layout'

const HomeScreen = () => {
  return (
    <Layout>
      <Header />
      <StocksTable />
    </Layout>
  )
}

export default HomeScreen
