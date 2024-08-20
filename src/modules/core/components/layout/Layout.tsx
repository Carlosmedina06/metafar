import { ReactNode } from 'react'
import { View } from 'react-native'

function Layout({ children }: { children: ReactNode }) {
  return <View className="flex-1 bg-light-80 px-2">{children}</View>
}

export default Layout
