import { StyleSheet } from "react-native";
import { DEFAULT_THEME } from "../../config/theme";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: DEFAULT_THEME.PRIMARY_COLOR
    },
    baseInput: {
        borderRadius: 50,
        gap: 8,
        fontWeight: "bold",
        flexDirection: "row",
        padding: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    primary: {
        backgroundColor: DEFAULT_THEME.PRIMARY_COLOR,
    },
    secondary: {
        borderWidth: 1,
        borderColor: DEFAULT_THEME.BORDER_COLOR,
    }
})