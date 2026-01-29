import { DEFAULT_THEME } from "@/config/theme";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        marginTop: 40,
        flex: 1,
        justifyContent: "flex-start"
    },
    page: {
        paddingHorizontal: 20,
        paddingVertical: 24,
    },
    filterContainer:{
        flexDirection: "row",
        gap: 8,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: DEFAULT_THEME.BORDER_COLOR,
        gap: 8,
        borderRadius: 12,
        padding: 14,
    },

})