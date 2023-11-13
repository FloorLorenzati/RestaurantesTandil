import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CuentaScreen } from "../screens/Cuenta/CuentaScreen";
import { screen } from "../utils/ScreenNombre";
import { LoginScreen } from "../screens/Cuenta/LoginScreen/LoginScreen";
import { RegisterScreen } from "../screens/Cuenta/RegisterScreen";

const Stack = createNativeStackNavigator();

export function CuentaStack() {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name={screen.cuenta.cuenta}
                component={CuentaScreen}
                options={{ title: 'Cuenta' }}
            />
            <Stack.Screen
                name={screen.cuenta.login}
                component={LoginScreen}
                options={{ title: 'Iniciar sesión' }}
            />
             <Stack.Screen
                name={screen.cuenta.registrarse}
                component={RegisterScreen}
                options={{ title: 'Crea tu cuenta' }}
            />
        </Stack.Navigator>
    )
}