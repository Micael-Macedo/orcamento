import { StyleSheet } from "react-native";
import { DEFAULT_THEME } from "../../config/theme";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
    },
    title: {
        color: DEFAULT_THEME.PRIMARY_COLOR
    },
    info: {
        color: DEFAULT_THEME.TEXT_SECONDARY_COLOR
    }
})