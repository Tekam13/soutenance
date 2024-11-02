import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

// const Stack = createStackNavigator();
export default function Splash() {
    const navigation = useNavigation();
    return (
        <View style={styles.body}>
            <View style={styles.part1}>

                <View style={styles.content}>
                    <Image style={styles.imp1} source={require('./../ressource/Vector.png')} />
                </View>
                <View style={styles.para}>
                    <Text style={styles.txtt}>Commencer avec Bimm en Creant votre compte ou en{'\n'} vous connectant directement</Text>
                </View>
                <View style={styles.btn}>
                    <View style={styles.dv4}>
                        <TouchableOpacity style={styles.btn1} onPress={() => navigation.navigate('Regis1')}>
                            <Text style={styles.btt1}>Créer un Compte</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.dv5}>
                        <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate('Logins')}>
                            <Text style={styles.btt2}>Se Connecter</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.dv6}></View>
                    <Text style={styles.vxd}>Ou</Text>
                    <View style={styles.dv7}></View>
                    <View style={styles.dv8}>
                        <TouchableOpacity style={styles.btn3}>
                            <Text style={styles.btt3}>Se connecter avec Google</Text>
                            <Image style={styles.glg} source={require('./../ressource/glg.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.dv9}>
                        <TouchableOpacity style={styles.btn4}>
                            <Text style={styles.btt4}>Se connecter avec Facebook</Text>
                            <Image style={styles.fce} source={require('./../ressource/fce.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#1D0800',
        width: '100%',
        height: '100%',
        justifyContent: 'space-between'
    },
    imp1: {
        display: 'flex',
        bottom: 17,
        //left: 50,
        width: '100%'
    },
    txtt: {
        display: 'flex',
        color: 'white',
        bottom: 500,
        fontSize: 30,
        left: 20
    },
    btn:{
        display: 'flex',
        top: 450
    },
    btn1:{
        display: 'flex',
        width: 326,
        height: 56,
        borderRadius: 8,
        backgroundColor: '#E6E8F2',
        bottom: 840,
        left: 60
    },
    btt1:{
        textAlign: 'center',
        top: 15,
        fontSize: 18,
        color: '#041578'
    },
    btn2:{
        display: 'flex',
        width: 326,
        height: 56,
        borderRadius: 8,
        backgroundColor: '#041578',
        bottom: 825,
        left: 60
    },
    btt2:{
        textAlign: 'center',
        top: 15,
        fontSize: 18,
        color: 'white'
    },
    dv6:{
        display: 'flex',
        bottom: 780,
        //borderWidth: 2,
        height: 5,
        width: 130,
        backgroundColor: 'white',
        left: 65
    },
    vxd:{
        display: 'flex',
        bottom: 795,
        color: 'white',
        fontSize: 20,
        left: 210
    },
    dv7:{
        display: 'flex',
        bottom: 810,
        //borderWidth: 2,
        height: 5,
        width: 130,
        backgroundColor: 'white',
        left: 250
    },
    btn3:{
        display: 'flex',
        width: 326,
        height: 56,
        borderRadius: 8,
        backgroundColor: '#020931',
        bottom: 780,
        left: 60
    },
    btt3:{
        textAlign: 'center',
        top: 15,
        fontSize: 18,
        color: 'white'
    },
    glg:{
        bottom:5,
        left: 20
    },
    btn4:{
        display: 'flex',
        width: 326,
        height: 56,
        borderRadius: 8,
        backgroundColor: '#020931',
        bottom: 770,
        left: 60
    },
    btt4:{
        textAlign: 'center',
        top: 15,
        fontSize: 18,
        color: 'white'
    },
    fce:{
        bottom:5,
        left: 20
    },
})