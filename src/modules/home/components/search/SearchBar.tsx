import { useState, useEffect } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'

import CustomIcon from '@/src/modules/core/components/icons/CustomIcon'
import useStockstore from '@/src/modules/home/store/useStockStore'

interface SearchBarProps {
  placeholder?: string
  onSearch: (searchText: string) => void
}

const SearchBar = ({ placeholder = 'Search...', onSearch }: SearchBarProps) => {
  const [searchText, setSearchText] = useState('')
  const getStocks = useStockstore((state) => state.getStocks)

  useEffect(() => {
    if (searchText === '') {
      getStocks()
    }
  }, [searchText, getStocks])

  const handleSearch = (text: string) => {
    setSearchText(text)
    if (text === '') {
      getStocks()
    } else {
      onSearch(text)
    }
  }

  return (
    <View className="mb-2 flex-row items-center justify-between bg-light-80 px-4 py-2">
      <TextInput
        className="text-base flex-1"
        placeholder={placeholder}
        value={searchText}
        onChangeText={(text) => handleSearch(text)}
      />
      <TouchableOpacity onPress={() => handleSearch(searchText)}>
        <CustomIcon color="#000" name="search" size={24} />
      </TouchableOpacity>
    </View>
  )
}

export default SearchBar
