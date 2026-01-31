import { NavigationContainer } from "@react-navigation/native";

import { StackRoutes } from "./StackRoutes";

//Informa todas as rotas disponiveis no app
export function Routes(){
    return (
    <NavigationContainer>
        <StackRoutes />
    </NavigationContainer>
    )
}