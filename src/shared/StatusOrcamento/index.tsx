import { StatusEnum } from "@/interfaces/statusEnum";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { style } from "./style";
import { DEFAULT_THEME } from "@/config/theme";

export type Props = {
    status: StatusEnum
}

export default function StatusOrcamento({ status }: Props) {

    let backgroundColor = "";
    let statusIconColor = "";
    let textColor = "";

    let statusText = ''

    switch (status) {
        case StatusEnum.APROVADO:
            statusText = 'Aprovado'
            backgroundColor = DEFAULT_THEME.SUCCESS_LIGHT
            statusIconColor = DEFAULT_THEME.SUCCESS_BASE
            textColor = DEFAULT_THEME.SUCCESS_DARK

            break;
        case StatusEnum.ENVIADO:
            statusText = 'Enviado'
            backgroundColor = DEFAULT_THEME.FEEDBACK_LIGHT
            statusIconColor = DEFAULT_THEME.FEEDBACK_BASE
            textColor = DEFAULT_THEME.FEEDBACK_LIGHT

            break;
        case StatusEnum.RASCUNHO:
            statusText = 'Rascunho'
            backgroundColor = DEFAULT_THEME.DRAFT_LIGHT
            statusIconColor = DEFAULT_THEME.DRAFT_BASE
            textColor = DEFAULT_THEME.DRAFT_DARK

            break;
        case StatusEnum.RECUSADO:
            statusText = 'Recusado'
            backgroundColor = DEFAULT_THEME.DANGER_LIGHT
            statusIconColor = DEFAULT_THEME.DANGER_BASE
            textColor = DEFAULT_THEME.DANGER_DARK

            break;
        default:
            break;
    }

    return (
        <View style={[
            style.container,
            { backgroundColor: backgroundColor }
            ]}>
            <View 
                style={[
                    style.statusIcon,
                    { backgroundColor: statusIconColor }
                ]}
                />
            <Text style={[{ 
                color: textColor
             }, style.baseText
             ]}>{statusText}</Text>
        </View>
    )
};
