import { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'
import { Inter_400Regular, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter'
import FontAwesome from '@expo/vector-icons/FontAwesome'

import MainStackNavigator from '@/src/modules/core/navigation/MainStackNavigator'

export default function App() {
  const [loaded, error] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    ...FontAwesome.font,
  })

  useEffect(() => {
    if (error) {
      console.error(error)
    }
  }, [error])

  if (!loaded) {
    return null
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <MainStackNavigator />
    </SafeAreaProvider>
  )
}
