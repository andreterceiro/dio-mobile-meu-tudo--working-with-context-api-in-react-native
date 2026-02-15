import { useState } from 'react';
import { View, TextInput, Button } from "react-native";

import { StackNavigationProp } from '@react-navigation/stack';
import { rootStackParamList } from '../../App';

type HomeScreenProps = {
    navigation: StackNavigationProp<rootStackParamList, "Home">
}

export default function HomeScreen({navigation}: HomeScreenProps) {
    const [ inputText, setInputText ] = useState("")

    const navigateToUserScreen = function () {
        navigation.navigate("User", {username: inputText});
    }
    
    return (
        <View>
            <TextInput
                placeholder="Digite seu nome..."
                value={inputText}
                onChangeText={setInputText}
            />
            <Button title="Logar" onPress={navigateToUserScreen} />
        </View>
    )
}