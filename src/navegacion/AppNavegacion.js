import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements';
import { RestauranteStack } from './RestauranteStack';
import { FavoritoStack } from './FavoritoStack';
import { RankingStack } from './RankingStack';
import { BuscarStack } from './BuscarStack';
import { CuentaStack } from './CuentaStack';
import { screen } from '../utils/ScreenNombre';

import { NuevoRestaurante } from '../screens/Restaurante/NuevoRestaurante'

const Tab = createBottomTabNavigator();

export function AppNavegacion() {

    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: '#00a680',
            tabBarInactiveTintColor: '#646464',
            tabBarIcon: ({ color, size }) => iconOptions(route, color, size)
        })}>
            <Tab.Screen
                name={screen.restaurante.tab}
                component={RestauranteStack}
                options={{ title: 'Restaurante' }} />

            <Tab.Screen
                name={screen.favorito.tab}
                component={FavoritoStack}
                options={{ title: 'Favoritos' }} />
            <Tab.Screen
                name={screen.ranking.tab}
                component={RankingStack}
                options={{ title: 'Ranking' }} />
            <Tab.Screen
                name={screen.buscar.tab}
                component={BuscarStack}
                options={{ title: 'Buscar' }} />
            <Tab.Screen
                name={screen.cuenta.tab}
                component={CuentaStack}
                options={{ title: 'Cuenta' }} />
        </Tab.Navigator>

    )
}

function iconOptions(route, color, size) {
    let iconName;

    if (route.name === screen.restaurante.tab) {
        iconName = 'compass-outline'
    }
    if (route.name === screen.favorito.tab) {
        iconName = 'heart-outline'
    }
    if (route.name === screen.ranking.tab) {
        iconName = 'star-outline'
    }
    if (route.name === screen.buscar.tab) {
        iconName = 'magnify'
    }
    if (route.name === screen.cuenta.tab) {
        iconName = 'home-outline'
    }

    return (<Icon type='material-community' name={iconName} color={color} size={size} />)
}