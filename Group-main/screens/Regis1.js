import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const Regis1 = () => {

    const navigation = useNavigation();
    const [mood, setMood] = useState('');
    return (
        <View style={styles.body}>
            <View style={styles.dv2}>
                <Text style={styles.titre}>Créer votre compte bimm maintenant</Text>
            </View>
            {/* <View style={styles.contain}> */}
                {/*<ScrollView
                    contentContainerStyle={styles.contentContainer}
                    style={styles.container}
                >*/}
                    <View style={styles.div1}>

                        {/* <View style={styles.dv4}>
                            <Text style={styles.name}>Nom d'utilisateur</Text>
                            <TextInput style={styles.input1} />
                        </View> */}
                        <View style={styles.dv5}>
                            <Text style={styles.names}>Nom d'utilisateur</Text>
                            <TextInput style={styles.inputs} />
                        </View>
                        <View style={styles.dv5}>
                            <Text style={styles.names}>Prenom</Text>
                            <TextInput style={styles.inputs} />
                        </View>
                        <View style={styles.dv5}>
                            <Text style={styles.names}>Telephone</Text>
                            <TextInput style={styles.inputs} />
                        </View>
                        <View style={styles.dv5}>
                            <Text style={styles.names}>Mot passe</Text>
                            <TextInput style={styles.inputs} />
                        </View>
                        <View style={styles.dv5}>
                            <Text style={styles.names}>Confirm Mot de passe</Text>
                            <TextInput style={styles.inputs} />
                        </View>
                        <View style={styles.dv6}>
                            <View>
                                {['happy'].map(feeling => (
                                    <View key={feeling}>
                                        <TouchableOpacity style={styles.outter} onPress={() => setMood(feeling)}>

                                            {mood === feeling && <View style={styles.inner} />}
                                        </TouchableOpacity>
                                    </View>
                                ))}
                            </View>
                        </View>
                        <View style={styles.dv7}>
                            <Text style={styles.con}>En creant votre compte, vous acceptez nos Termes et condition</Text>
                        </View>
                        <View style={styles.dv8}>
                            <TouchableOpacity style={styles.btn1} onPress={() => navigation.navigate('Regis2')}>
                                <Text style={styles.val}>Suivant</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                {/* </ScrollView> */}
            {/* </View> */}
            <View style={styles.dv9}>
                <Text style={styles.forgot2}>Déjà un compte?</Text>
                <TouchableOpacity style={styles.btn2}>
                    <Text style={styles.val1}>Se connecter</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    contentContainer: {
        paddingVertical: 20,
        height: '100%'
    },
    body: {
        backgroundColor: '#1D0800',
        height: 1000
    },
    div1: {
        width: 326,
        height: 650,
        top: 80,
        //bottom: 112,
        left: 60,
        borderRadius: 16,
        padding: 32,
        backgroundColor: '#fff'
    },
    titre: {
        fontSize: 40,
        left: 50,
        top: 50,
        color:'#fff'
    },
    name: {
        display: 'flex',
        top: 115,
        left: 10,
        color: '#1E2448',
        fontSize: 16
    },
    input1: {
        width: 262,
        height: 53,
        //borderWidth: 1,
        borderRadius: 8,
        display: 'flex',
        top: 115,
        left: 10,
        backgroundColor: '#F5F5F6'
    },
    names: {
        display: 'flex',
        bottom: 0,
        left: 10,
        color: '#1E2448',
        fontSize: 16,
        //top: 135
    },
    inputs: {
        width: 262,
        height: 53,
        //borderWidth: 1,
        borderRadius: 8,
        display: 'flex',
        bottom: 0,
        left: 10,
        backgroundColor: '#F5F5F6',
        //top: 135
    },
    dv5: {
        marginBottom: 20
    },
    outter: {
        display: 'flex',
        justifyContent: 'space-between',
        width: 25,
        height: 25,
        borderWidth: 1,
        borderRadius: 15,
        top: 10,
        left: 15
    },
    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        width: 15,
        height: 15,
        backgroundColor: 'gray',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        left: 3.5,
        top: 3.5
    },
    con: {
        display: 'flex',
        bottom: 17,
        left: 45,
    },
    dv9: {
        height: 200,
        top: 70
    },
    btn1: {
        width: 262,
        height: 56,
        backgroundColor: '#041578',
        borderRadius: 8,
        display: 'flex',
        left: 0,
        top: 10
    },
    val: {
        textAlign: 'center',
        top: 16,
        color: 'white'
    },
    forgot2: {
        top: 20,
        textAlign: 'center',
        color: '#fff'
    },
    btn2: {
        width: 132,
        height: 37,
        backgroundColor: '#fff',
        borderRadius: 8,
        display: 'flex',
        left: 150,
        top: 50
    },
    val1: {
        textAlign: 'center',
        top: 8,
        color: '#041578'
    },
    contain: {
        top: 100,
        height: 600
    },
});

export default Regis1;