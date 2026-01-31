import { DEFAULT_THEME } from "@/config/theme";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        marginTop: 40,
        flex: 1,
        justifyContent: "flex-start"
    },
    headerTitle: {
        color: DEFAULT_THEME.PRIMARY_COLOR,
        fontWeight: "bold",
        fontSize: 18
    },
    headerInfo: {
        color: DEFAULT_THEME.TEXT_SECONDARY_COLOR,
        fontSize: 14
    },
    page: {
        paddingHorizontal: 20,
        paddingVertical: 24,
    },
    filterContainer: {
        flexDirection: "row",
        gap: 8,
    },
    searchContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: DEFAULT_THEME.BORDER_COLOR,
        gap: 8,
        borderRadius: 48,
        paddingHorizontal: 16,
    },
    listContent: {
        paddingTop: 24,
        paddingBottom: 62,
    },
    separator: {
        marginVertical: 8
    }

})