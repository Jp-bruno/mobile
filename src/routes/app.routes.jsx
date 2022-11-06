import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import New from '../screens/New';
import Pools from '../screens/Pools';
import Find from '../screens/Find';

import { PlusCircle, SoccerBall } from 'phosphor-react-native';
import { useTheme } from 'native-base';

const { Navigator, Screen } = createBottomTabNavigator();

export default function AppRoutes() {
    const { colors, sizes } = useTheme();

    const size = sizes[6];

    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarLabelPosition: 'beside-icon',
            tabBarActiveTintColor: colors.yellow[500],
            tabBarInactiveTintColor: colors.gray[300],
            tabBarStyle: {
                position: 'absolute',
                height: 80,
                borderTopWidth: 0,
                backgroundColor: colors.gray[800]
            },
            tabBarItemStyle: {
                position: 'relative',
                top: 0
            }
        }}>
            <Screen
                name='new'
                component={New}
                options={{
                    tabBarIcon: ({ color }) => <PlusCircle color={color} size={size} />,
                    tabBarLabel: "Novo bolão"
                }}
            />

            <Screen
                name='pools'
                component={Pools}
                options={{
                    tabBarIcon: ({ color }) => <SoccerBall color={color} size={size} />,
                    tabBarLabel: "Meus bolões"
                }}
            />

            <Screen
                name='find'
                component={Find}
                options={{tabBarButton: () => null}}
            />
        </Navigator>
    )
}