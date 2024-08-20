import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

import CustomIcon from '@/src/modules/core/components/icons/CustomIcon'
import ROUTES from '@/src/modules/core/utils/constants/routes'

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerTitle: '',
        headerStyle: {
          backgroundColor: '#FCFCFC',
          shadowColor: 'transparent',
        },
        tabBarActiveTintColor: '#7f3dFF',
        tabBarInactiveTintColor: '#91919F',
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          height: 85,
          paddingHorizontal: 10,
          paddingVertical: 8,
          paddingBottom: 20,
          borderRadius: 40,
          borderWidth: 1,
          borderTopWidth: 1,
          borderTopColor: '#FCFCFC',
          borderColor: '#FCFCFC',
          elevation: 5,
          shadowColor: '#000000',
          shadowOpacity: 0.15,
          backgroundColor: '#FCFCFC',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowRadius: 3.84,
        },
        tabBarItemStyle: {
          marginVertical: 5,
          marginHorizontal: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
      }}
    >
      {ROUTES.map((route) => (
        <Tab.Screen
          key={route.name}
          component={route.component}
          name={route.name}
          options={{
            title: route.name,
            tabBarIcon: ({ color }) =>
              CustomIcon({
                name: route.iconName,
                size: route.iconSize,
                color,
              }),
          }}
        />
      ))}
    </Tab.Navigator>
  )
}

export default MainTabNavigator
