import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RestauranteScreen } from "../screens/Restaurante/RestauranteScreen";
import { NuevoRestaurante } from "../screens/Restaurante/NuevoRestaurante";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function RestauranteStack() {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name={screen.restaurante.restaurante}
                component={RestauranteScreen}
                options={{ title: 'Restaurantes' }}
            />
            <Stack.Screen
                name={screen.restaurante.nuevoRestaurante}
                component={NuevoRestaurante}
                options={{ title: 'Nuevo Restaurante' }}
            />
        </Stack.Navigator>
    )
}