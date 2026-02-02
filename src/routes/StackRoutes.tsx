import Home from "@/views/Home";
import Orcamento from "@/views/Orcamento";
import Servico from "@/views/Servico";

import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";

export type StackRoutesList = {
    home: undefined,
    orcamento: undefined | { id: string },
    servico: undefined | { id: string },
}

export type StackRoutesProps<T extends keyof StackRoutesList> = NativeStackScreenProps<StackRoutesList, T>

const Stack = createNativeStackNavigator<StackRoutesList>();

export function StackRoutes() {
    return (
        <Stack.Navigator
            id="StackRoutes"
            initialRouteName="home"
            screenOptions={{
                headerShown: false,
                gestureDirection: "horizontal"
            }}
        >
            <Stack.Screen
                name="home"
                component={Home}
            />
            <Stack.Screen
                name="orcamento"
                component={Orcamento}
            />
            <Stack.Screen
                name="servico"
                component={Servico}
            />
        </Stack.Navigator>
    )
}