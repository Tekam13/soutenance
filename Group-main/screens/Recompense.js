import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from 'react';


export default function Recompense() {
    const navigation = useNavigation();




    return (
        <View style={styles.body}>
            <View style={styles.div1}>
                <Text style={styles.title}>Invite Friends</Text>
                <Text style={styles.title}>Earn and redeem rewaeds</Text>
            </View>
            <View style={styles.div2}>
                <View style={styles.tnt1}>
                    <Image style={styles.pimg1} source={require('./../ressource/Pi1.jpg')} />
                    <Text style={styles.ttx}>591 pts</Text>
                    <Text style={styles.ttx1}>Total points valide</Text>
                </View>
                <View style={styles.tnt2}>
                    <Text style={styles.ttx2}>Telecharger vos cadeaux</Text>
                    <TouchableOpacity style={styles.bttt}>
                        <Text style={styles.btttx}>Share</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.div3}>
                    <View style={styles.cad1}>
                        <Image style={styles.fn} source={require('./../ressource/C1.jpg')} />
                        <Text style={styles.t1}>  7 jour d'abonnement{'\n'}  100 points </Text>
                        <TouchableOpacity style={styles.btt1}>
                            <Text style={styles.btttx}>Voir</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cad1}>
                        <Image style={styles.fn} source={require('./../ressource/C1.jpg')} />
                        <Text style={styles.t1}> 1 mois d'abonnement{'\n'} 300 points </Text>
                        <TouchableOpacity style={styles.btt1}>
                            <Text style={styles.btttx}>Voir</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cad1}>
                        <Image style={styles.fn} source={require('./../ressource/C1.jpg')} />
                        <Text style={styles.t1}> 3 mois d'abonnement{'\n'} 500 points </Text>
                        <TouchableOpacity style={styles.btt1}>
                            <Text style={styles.btttx}>Voir</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.div4}>
                    <View style={styles.cad2}>
                        <Image style={styles.fn1} source={require('./../ressource/H1.jpg')} />
                        <Text style={styles.t1}> Dimtri Tekam{'\n'}  </Text>
                        <Text style={styles.t11}> +10 pts{'\n'}  </Text>

                    </View>

                    <View style={styles.cad2}>
                        <Image style={styles.fn1} source={require('./../ressource/F1.jpg')} />
                        <Text style={styles.t1}> Maria Dailyse{'\n'}  </Text>
                        <Text style={styles.t11}> +10 pts{'\n'}  </Text>

                    </View>

                    <View style={styles.cad2}>
                        <Image style={styles.fn1} source={require('./../ressource/H2.jpg')} />
                        <Text style={styles.t1}> Jason Tatum{'\n'}  </Text>
                        <Text style={styles.t11}> +10 pts{'\n'}  </Text>

                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#010813',
        width: '100%',
        justifyContent: 'space-between',
        height: '100%',
    },
    div1: {
        display: 'flex',
        width: '100%',
        height: 226,
        backgroundColor: 'red'
    },
    title: {
        display: 'flex',
        color: '#fff',
        fontSize: 30,
        top: 50,
        left: 15
    },
    div2: {
        display: 'flex',
        width: 420,
        height: 160,
        backgroundColor: '#fff',
        bottom: 610,
        left: 15,
        borderRadius: 8
    },
    pimg1: {
        display: 'flex',
        width: 60,
        height: 60,
        left: 30,
        top: 20
    },
    ttx: {
        display: 'flex',
        left: 110,
        bottom: 40,
        fontSize: 35
    },
    ttx1: {
        display: 'flex',
        left: 110,
        bottom: 40,
        fontSize: 18
    },
    ttx2: {
        display: 'flex',
        left: 20,
        bottom: 20,
        fontSize: 18
    },
    bttt: {
        display: 'flex',
        left: 315,
        bottom: 50,
        width: 80,
        height: 40,
        borderRadius: 5,
        backgroundColor: 'green'
    },
    btttx: {
        textAlign: 'center',
        top: 10,
        color: 'white'
    },
    div3: {
        display: 'flex',
        width: 420,
        height: 280,
        backgroundColor: '#fff',
        //bottom: 510,
        //left: 15,
        borderRadius: 8
    },
    div4: {
        display: 'flex',
        width: 420,
        height: 280,
        backgroundColor: '#fff',
        top: 20,
        //left: 15,
        borderRadius: 8
    },
    cad1: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 25
    },
    cad2: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 25
    },
    fn: {
        display: 'flex',
        width: 50,
        height: 50,
        left: 10,
        top: 10
    },
    fn1: {
        display: 'flex',
        width: 50,
        height: 50,
        left: 10,
        top: 10,
        borderRadius: 50
    },
    btt1: {
        display: 'flex',
        left: 80,
        top: 10,
        width: 80,
        height: 40,
        borderRadius: 5,
        backgroundColor: 'green'
    },
    t1: {
        display: 'flex',
        left: 50,
        top: 15,
        fontSize: 20
    },
    t11: {
        display: 'flex',
        left: 130,
        top: 15,
        fontSize: 20,
        color: 'orange'
    },
})