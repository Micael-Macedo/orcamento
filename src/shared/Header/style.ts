import { StyleSheet } from "react-native";
import { DEFAULT_THEME } from "../../config/theme";

export const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: DEFAULT_THEME.BORDER_COLOR
    },
    title: {
        color: DEFAULT_THEME.PRIMARY_COLOR,
        fontWeight: "bold",
        fontSize: 18
    },
    info: {
        color: DEFAULT_THEME.TEXT_SECONDARY_COLOR,
        fontSize: 14
    }
})