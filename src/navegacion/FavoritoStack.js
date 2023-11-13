import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FavoritoScreen } from "../screens/FavoritoScreen";
import { screen } from "../utils/ScreenNombre";

const Stack = createNativeStackNavigator();

export function FavoritoStack() {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name={screen.favorito.favorito}
                component={FavoritoScreen}
                options={{ title: 'Favorito' }}
            />

        </Stack.Navigator>
    )
}