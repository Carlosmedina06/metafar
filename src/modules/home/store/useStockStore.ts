import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Stock, TimeSeriesStock } from '@/src/interface/Stock'

interface StoreState {
  stocks: Stock[]
  filteredStocks: Stock[]
  currentPage: number
  pageSize: number
  getStocks: () => void
  searchStocks: (searchText: string) => void
  loadMoreStocks: () => void
  getStocksBySymbol: (symbol: string, interval: string) => Promise<TimeSeriesStock>
}

const useStockstore = create<StoreState>()(
  persist(
    devtools((set, get) => ({
      stocks: [],
      filteredStocks: [],
      currentPage: 1,
      pageSize: 5,

      getStocks: async () => {
        const response = await fetch(
          'https://api.twelvedata.com/stocks?exchange=NYSE&apikey=e9733d4a28ab4213b16febef24d21844',
        )

        const data = await response.json()

        if (data.code >= 400) {
          console.error('Error fetching stocks')

          return
        }

        const filterRepeated = data.data.filter(
          (stock: Stock, index: number, self: Stock[]) =>
            index === self.findIndex((t) => t.symbol === stock.symbol),
        )

        set(() => ({
          stocks: filterRepeated,
          filteredStocks: filterRepeated.slice(0, get().pageSize),
        }))
      },

      searchStocks: async (searchText: string) => {
        if (!searchText || searchText === '') {
          set(() => ({
            filteredStocks: get().stocks.slice(0, get().pageSize),
            currentPage: 1,
          }))

          return
        }

        const response = await fetch(
          `https://api.twelvedata.com/stocks?symbol=${searchText}&apikey=e9733d4a28ab4213b16febef24d21844`,
        )
        const data = await response.json()

        if (data.code >= 400) {
          console.error('Error fetching stocks')

          return
        }

        set(() => ({
          stocks: data.data,
          filteredStocks: data.data.slice(0, get().pageSize),
          currentPage: 1,
        }))
      },

      getStocksBySymbol: async (symbol: string, interval: string): Promise<TimeSeriesStock> => {
        const response = await fetch(
          `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=${interval}&outputsize=10&apikey=e9733d4a28ab4213b16febef24d21844`,
        )

        const data = await response.json()

        if (data.code >= 400) {
          console.error('Error fetching stocks')

          return {} as TimeSeriesStock
        }

        const responseStock = {
          stock: data.meta,
          values: data.values,
        }

        return responseStock
      },

      loadMoreStocks: () => {
        const { currentPage, pageSize, stocks } = get()
        const nextPage = currentPage + 1
        const newStocks = stocks.slice(0, nextPage * pageSize)

        set(() => ({
          filteredStocks: newStocks,
          currentPage: nextPage,
        }))
      },
    })),
    {
      name: 'stock-store',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)

export default useStockstore
