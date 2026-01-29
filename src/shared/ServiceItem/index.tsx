import { Text, View } from "react-native";
import { style } from "./style";
import { IServiceItem } from "@/interfaces/serviceItem";
type Props = {
    data: IServiceItem
}
export default function ServiceItem({data}: Props) {
    return (
        <View style={style.container}>
            <View>
                <Text style={style.title}>Item Title</Text>
                <Text style={style.title}>Item company</Text>
            </View>
            <View>
                <Text style={style.info}>R$ 00,00</Text>
            </View>
        </View>
    )
};
