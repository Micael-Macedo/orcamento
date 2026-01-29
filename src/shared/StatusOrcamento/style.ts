import { StyleSheet } from "react-native";
import { DEFAULT_THEME } from "../../config/theme";

export const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        alignItems: "center",
        gap: 6
    },
    statusIcon: {
        width: 8,
        height: 8,
        borderRadius: 8
    },
    baseText: {
        fontSize: 12,
        fontWeight: "bold",
    }
})