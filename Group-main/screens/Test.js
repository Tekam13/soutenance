import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

//const Stack = createStackNavigator();  
export default function Onboard1() {
    const navigation = useNavigation();
    return (
        <View style={styles.body}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#1D0800',
        width: 500,
        justifyContent: 'space-between'
    },
})