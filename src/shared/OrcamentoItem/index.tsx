import { Text, View } from "react-native";
import { style } from "./style";

import { IOrcamento } from "@/interfaces/orcamento";
import StatusOrcamento from "../StatusOrcamento";

type Props = {
    data: IOrcamento,
}

export default function OrcamentoItem({ data }: Props) {
    let price = 0;

    data.items.forEach(item => {
        price += parseFloat(item.price);
    });

    return (
        <View style={style.container}>
            <View style={style.textContainer}>
                <Text style={style.title}>{data.title}</Text>
                <Text style={style.info}>{data.client}</Text>
            </View>
            <View>
                <StatusOrcamento status={data.status} />
                <Text style={style.price}>R$ {price}</Text>
            </View>
        </View>
    )
};
