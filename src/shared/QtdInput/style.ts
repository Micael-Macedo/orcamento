import { StyleSheet } from "react-native";
import { DEFAULT_THEME } from "../../config/theme";

export const style = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 10,
        borderColor: DEFAULT_THEME.BORDER_COLOR,
        borderWidth: 1,
        gap: 12,
        padding: 16,
        paddingTop: 8
    },
    textContainer: {
        flex: 1,
        width: "100%",
        paddingTop: 8,
        gap:8,
    },
    title: {
        color: DEFAULT_THEME.TEXT_COLOR,
        fontWeight: "bold",
        fontSize: 16
    },
    info: {
        color: DEFAULT_THEME.TEXT_SECONDARY_COLOR
    },
    price: {
        textAlign: "right",
    }
})