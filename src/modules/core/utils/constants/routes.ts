import FontAwesome6 from '@expo/vector-icons/FontAwesome6'

import HomeScreen from '@/src/modules/home/screens/HomeScreen'

export interface Route {
  name: string
  iconName: React.ComponentProps<typeof FontAwesome6>['name']
  iconSize: number
  component: React.ComponentType
}

const ROUTES: Route[] = [
  {
    name: 'home',
    iconName: 'home',
    iconSize: 20,
    component: HomeScreen,
  },
]

export default ROUTES
