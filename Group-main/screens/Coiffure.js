import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Image, TouchableOpacity, Text, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Barre1 from "../SVG/Barre1";

//const Stack = createStackNavigator();  
export default function Onboard1() {
    const navigation = useNavigation();
    return (
        <View style={styles.body}>
            <View style={styles.home}>

                <View style={styles.title}>
                    <Text style={styles.titre}>Nos Meilleur Coiffure</Text>
                </View>

                <ScrollView
                    contentContainerStyle={styles.contentContainer}
                    style={styles.container}
                >

                    <View style={styles.vertical}>

                        <View style={styles.txt}>
                            <Text style={styles.txt1}>Recommended</Text>
                            <Text style={styles.txt2} onPress={() => navigation.navigate('Visualisation')}>See all</Text>
                        </View>


                        <View style={styles.scroll}>
                            <ScrollView horizontal={true} style={styles.scrollView}>
                                <View style={styles.image}>
                                    <Image style={styles.imag1} source={require('./../ressource/H1.jpg')} />
                                    <Text style={styles.footer1}>15000 fcfa</Text>
                                    <Text style={styles.footer2}>Coiffure Homme </Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('DetailCoiffure', { itemId: 14 })}>
                                        <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.image}>
                                    <Image style={styles.imag1} source={require('./../ressource/H2.jpg')} />
                                    <Text style={styles.footer1}>10000 fcfa</Text>
                                    <Text style={styles.footer2}>Coiffure Homme </Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('DetailCoiffure', { itemId: 15 })}>
                                        <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.image}>
                                    <Image style={styles.imag1} source={require('./../ressource/H3.jpg')} />
                                    <Text style={styles.footer1}>12000 fcfa</Text>
                                    <Text style={styles.footer2}>Coiffure Homme </Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('DetailCoiffure', { itemId: 16 })}>
                                        <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.image}>
                                    <Image style={styles.imag1} source={require('./../ressource/H4.jpg')} />
                                    <Text style={styles.footer1}>20000 fcfa</Text>
                                    <Text style={styles.footer2}>Coiffure Homme </Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('DetailCoiffure', { itemId: 17 })}>
                                        <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.image}>
                                    <Image style={styles.imag1} source={require('./../ressource/H5.jpg')} />
                                    <Text style={styles.footer1}>30000 fcfa</Text>
                                    <Text style={styles.footer2}>Coiffure Homme </Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('DetailCoiffure', { itemId: 18 })}>
                                        <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>

                        <View style={styles.txt}>
                            <Text style={styles.txt1}>Recommended</Text>
                            <Text style={styles.txt2} onPress={() => navigation.navigate('Visualisation1')}>See all</Text>
                        </View>


                        <View style={styles.scroll}>
                            <ScrollView horizontal={true} style={styles.scrollView}>
                                <View style={styles.image}>
                                    <Image style={styles.imag1} source={require('./../ressource/F1.jpg')} />
                                    <Text style={styles.footer1}>50000 fcfa</Text>
                                    <Text style={styles.footer2}>Coiffure Femme </Text><TouchableOpacity onPress={() => navigation.navigate('DetailCoiffure', { itemId: 19 })}>
                                        <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.image}>
                                    <Image style={styles.imag1} source={require('./../ressource/F2.jpg')} />
                                    <Text style={styles.footer1}>50000 fcfa</Text>
                                    <Text style={styles.footer2}>Coiffure Femme </Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('DetailCoiffure', { itemId: 20 })}>
                                        <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.image}>
                                    <Image style={styles.imag1} source={require('./../ressource/F3.jpg')} />
                                    <Text style={styles.footer1}>30000 fcfa</Text>
                                    <Text style={styles.footer2}>Coiffure Femme </Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('DetailCoiffure', { itemId: 21 })}>
                                        <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.image}>
                                    <Image style={styles.imag1} source={require('./../ressource/F4.jpg')} />
                                    <Text style={styles.footer1}>40000 fcfa</Text>
                                    <Text style={styles.footer2}>Coiffure Femme</Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('DetailCoiffure', { itemId: 22 })}>
                                        <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.image}>
                                    <Image style={styles.imag1} source={require('./../ressource/F5.jpg')} />
                                    <Text style={styles.footer1}>30000 fcfa</Text>
                                    <Text style={styles.footer2}>Coiffure Femme</Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('DetailCoiffure', { itemId: 23 })}>
                                        <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>

                        <View style={styles.txt}>
                            <Text style={styles.txt1}>Recommended</Text>
                            <Text style={styles.txt2} onPress={() => navigation.navigate('Visualisation2')}>See all</Text>
                        </View>


                        <View style={styles.scroll}>
                            <ScrollView horizontal={true} style={styles.scrollView}>
                                <View style={styles.image}>
                                    <Image style={styles.imag1} source={require('./../ressource/o1.jpg')} />
                                    <Text style={styles.footer1}>10000 fcfa</Text>
                                    <Text style={styles.footer2}>Meilleur Ongle</Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('DetailCoiffure', { itemId: 24 })}>
                                        <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.image}>
                                    <Image style={styles.imag1} source={require('./../ressource/o2.jpg')} />
                                    <Text style={styles.footer1}>25000 fcfa</Text>
                                    <Text style={styles.footer2}>Meilleur Ongle </Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('DetailCoiffure', { itemId: 25 })}>
                                        <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.image}>
                                    <Image style={styles.imag1} source={require('./../ressource/o4.jpg')} />
                                    <Text style={styles.footer1}>25000 fcfa</Text>
                                    <Text style={styles.footer2}>Meilleur Ongle </Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('DetailCoiffure', { itemId: 26 })}>
                                        <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.image}>
                                    <Image style={styles.imag1} source={require('./../ressource/o5.jpg')} />
                                    <Text style={styles.footer1}>10000 fcfa</Text>
                                    <Text style={styles.footer2}>Meilleur Ongle </Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('DetailCoiffure', { itemId: 27 })}>
                                        <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.image}>
                                    <Image style={styles.imag1} source={require('./../ressource/o6.jpg')} />
                                    <Text style={styles.footer1}>25000 fcfa</Text>
                                    <Text style={styles.footer2}>Meilleur Ongle </Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('DetailCoiffure', { itemId: 28 })}>
                                        <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>

                        <View style={styles.txt}>
                            <Text style={styles.txt1}>Recommended</Text>
                            <Text style={styles.txt2} onPress={() => navigation.navigate('Visualisation3')}>See all</Text>
                        </View>


                        <View style={styles.scroll}>
                            <ScrollView horizontal={true} style={styles.scrollView}>
                                <View style={styles.image}>
                                    <Image style={styles.imag1} source={require('./../ressource/P1.jpg')} />
                                    <Text style={styles.footer1}>Sarah Cater</Text>
                                    <Text style={styles.footer2}> Soins Visage </Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('DetailCoiffure', { itemId: 29 })}>
                                        <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.image}>
                                    <Image style={styles.imag1} source={require('./../ressource/P2.jpg')} />
                                    <Text style={styles.footer1}>Ashley Brooke</Text>
                                    <Text style={styles.footer2}>Pedicure Manicure </Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('DetailCoiffure', { itemId: 30 })}>
                                        <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.image}>
                                    <Image style={styles.imag1} source={require('./../ressource/P3.jpg')} />
                                    <Text style={styles.footer1}>Debora Mayer</Text>
                                    <Text style={styles.footer2}>Pedicure Manicure </Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('DetailCoiffure', { itemId: 31 })}>
                                        <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.image}>
                                    <Image style={styles.imag1} source={require('./../ressource/P4.jpg')} />
                                    <Text style={styles.footer1}>Mira Bell</Text>
                                    <Text style={styles.footer2}> Soins Coiffeuse   </Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('DetailCoiffure', { itemId: 32 })}>
                                        <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.image}>
                                    <Image style={styles.imag1} source={require('./../ressource/P5.jpg')} />
                                    <Text style={styles.footer1}>Flora Wys</Text>
                                    <Text style={styles.footer2}>Soins Coiffeuse  </Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('DetailCoiffure', { itemId: 33 })}>
                                        <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
                        <View style={styles.scroll1}>
                            {/* <ScrollView horizontal={true} style={styles.scrollView}>
                            <View style={styles.image}>
                            <Text style={styles.footer1}>Blake Anderson</Text>
                            <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                            </View>
                            <View style={styles.image}>
                            <Text style={styles.footer1}>Blake Anderson</Text>
                            <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                            </View>
                            <View style={styles.image}>
                            <Text style={styles.footer1}>Blake Anderson</Text>
                            <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                            </View>
                            <View style={styles.image}>
                            <Text style={styles.footer1}>Blake Anderson</Text>
                            <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                            </View>
                            <View style={styles.image}>
                            <Text style={styles.footer1}>Blake Anderson</Text>
                            <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                            </View>
                            </ScrollView> */}
                        </View>


                    </View>


                </ScrollView>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#010813',
        width: 500,
        justifyContent: 'space-between'
    },
    // part1: {
    //     display: 'flex',
    //     width: 396,
    //     height: 130,
    //     borderRadius: 34,
    //     borderWidth: 1,
    //     backgroundColor: '#F03D00',
    //     left: 16
    // },
    home: {
        top: 150
    },
    input1: {
        display: 'flex',
        width: 420,
        height: 64,
        backgroundColor: '#fff',
        borderRadius: 8,
        left: 20,
        bottom: 25
        //position: 'relative'
    },
    scrollView: {
        marginHorizontal: 20,
    },
    // btn: {
    //     display: 'flex',
    //     width: 185,
    //     height: 52,
    //     backgroundColor: '#fff',
    //     top: 70,
    //     borderRadius: 16,
    //     marginLeft: 10
    // },
    // txtb: {
    //     textAlign: 'center',
    //     fontSize: 20,
    //     top: 10
    // },
    // scrol: {
    //     height: 150,
    //     bottom: 50
    // },
    scroll: {
        height: 350,
        right: 15,

    },
    txt: {
        display: 'flex',
        flexDirection: 'row'
    },
    txt1: {
        display: 'flex',
        flex: 1,
        left: 30,
        color: '#fff',
        //top: 30,
        fontSize: 30
    },
    txt2: {
        display: 'flex',
        flex: 1,
        left: 90,
        color: '#fff',
        top: 10,
        fontSize: 18
    },
    image: {
        display: 'flex',
        width: 250,
        height: 306,
        backgroundColor: '#010813',
        top: 30,
        borderRadius: 25,
        marginLeft: 26
    },
    footer1: {
        display: 'flex',
        top: 0,
        fontSize: 25,
        left: 10,
        color: '#fff'
    },
    footer2: {
        display: 'flex',
        top: 0,
        left: 10,
        color: '#fff'
    },
    contentContainer: {
        paddingVertical: 20,
        //height: '100%'
    },
    vertical: {
        height: '100%',
        //backgroundColor: 'red',
        bottom: 10
    },
    imag1: {
        display: 'flex',
        width: 250,
        height: 250,
        borderRadius: 25
    },
    dta: {
        display: 'flex',
        width: 26,
        height: 26,
        bottom: 30,
        left: 210
    },
    scroll1: {
        height: 550,

    },
    container: {
        bottom: 25
    },
    titre: {
        display: 'flex',
        fontSize: 35,
        color: '#fff',
        bottom: 60,
        left: 50
    },
})