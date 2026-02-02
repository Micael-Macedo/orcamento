import { Text, View } from "react-native";
import { style } from "./style";
import { IServiceItem } from "@/interfaces/serviceItem";
import Button from "../Button";
type Props = {
    data: IServiceItem
}
export default function ServiceItem({data}: Props) {

    return (
        <View style={style.container}>
            <View>
                <Text style={style.title}>Item company</Text>
                <Text style={style.title}>{data.description}</Text>
            </View>
            <View>
                <Text style={style.info}>R$ {parseFloat(data.price) * data.qty}</Text>
            </View>
        </View>
    )
};
