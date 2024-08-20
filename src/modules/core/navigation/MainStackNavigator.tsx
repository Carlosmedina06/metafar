import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

import MainTabNavigator from '@/src/modules/core/navigation/MainTabNavigator'
import DetailScreen from '@/src/modules/detail/screens/DetailScreen'

type RootStackParamList = {
  Home: undefined
  Detail: { symbol?: string }
}

const Stack = createStackNavigator<RootStackParamList>()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen component={MainTabNavigator} name="Home" />
        <Stack.Screen
          component={DetailScreen}
          name="Detail"
          options={({ route }: { route: RouteProp<RootStackParamList, 'Detail'> }) => ({
            headerShown: true,
            title: route.params?.symbol || 'Detail',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator
