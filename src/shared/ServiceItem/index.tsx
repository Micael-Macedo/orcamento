import { Text, View } from "react-native";
import { style } from "./style";

export default function ServiceItem() {
    <View style={style.container}>
        <View>
            <Text style={style.title}>Item Title</Text>
            <Text style={style.title}>Item company</Text>
        </View>
        <View>
            <Text style={style.info}>R$ 00,00</Text>
        </View>
    </View>
};
