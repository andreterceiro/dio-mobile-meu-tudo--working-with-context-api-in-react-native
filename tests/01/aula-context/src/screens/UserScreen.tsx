import { View, Text } from "react-native";
import { RouteProp } from '@react-navigation/native'
import { rootStackParamList } from "../../App";

type UserScreenProps = {
    route : RouteProp <rootStackParamList, "User">
}

export default function UserScreen({route} : UserScreenProps) {
    const { username } = route.params;

    return (
        <View>
            <Text>Bem vindo { username }</Text>
        </View>
    )
}