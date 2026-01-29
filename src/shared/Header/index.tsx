import { Text, View } from "react-native";

import { style } from "./style";
import Button from "../Button";

export type HeaderProps = {
    totalDrafts: number;
}

export default function Header({ totalDrafts }: HeaderProps) {
    return (
        <View style={style.container}>
            <View style = {{ gap: 4 }}>
                <Text style={style.title}>Orçamentos</Text>
                <Text style={style.info}>Você tem {totalDrafts} item em rascunho</Text>
            </View>
            <Button iconName="add" label="Novo" type="primary" />
        </View>
    )
};
