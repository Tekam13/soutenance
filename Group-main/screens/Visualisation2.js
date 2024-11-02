/*import { StyleSheet, Image } from 'react-native';
// Fonction pour stocker des images de paysage
export const getLandscapeImages = () => {
    return [
        require('./../ressource/H1.jpg'),
        require('./../ressource/H2.jpg'),
        require('./../ressource/H3.jpg'),
        require('./../ressource/H4.jpg'),
    ];
};

// Fonction pour stocker des images d'animaux
export const getAnimalImages = () => {
    return [
        require('./../ressource/F1.jpg'),
        require('./../ressource/F2.jpg'),
        require('./../ressource/F3.jpg'),
        require('./../ressource/F4.jpg'),
    ];
};

// Fonction pour stocker des images de nature
export const getNatureImages = () => {
    return [
        require('./../ressource/o1.jpg'),
        require('./../ressource/o2.jpg'),
        require('./../ressource/o3.jpg'),
        require('./../ressource/o4.jpg'),
    ];
};

// Fonction pour stocker des images de villes
export const getCityImages = () => {
    return [
        require('./../ressource/P1.jpg'),
        require('./../ressource/P2.jpg'),
        require('./../ressource/P3.jpg'),
        require('./../ressource/P4.jpg'),
    ];
};

const styles=StyleSheet.create({

})*/

import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

// const Stack = createStackNavigator();
export default function Visualisation2() {
    const navigation = useNavigation();
    return (
        <View style={styles.body}>
            <View style={styles.title}>
                <Text style={styles.tite}>Meilleurs Manicure Pedicure</Text>
            </View>
            <View style={styles.containers}>
                <ScrollView
                    contentContainerStyle={styles.contentContainer}
                    style={styles.container}
                >

                    <View style={styles.part}>
                        <View style={styles.part1}>
                            <Image style={styles.imag1} source={require('./../ressource/o1.jpg')} />
                            <Text style={styles.footer1}>Blake Anderson</Text>
                            <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                            <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                        </View>
                        <View style={styles.part2}>
                        <Image style={styles.imag1} source={require('./../ressource/o2.jpg')} />
                            <Text style={styles.footer1}>Blake Anderson</Text>
                            <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                            <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                        </View>
                    </View>

                    <View style={styles.part}>
                        <View style={styles.part1}>
                            <Image style={styles.imag1} source={require('./../ressource/o3.jpg')} />
                            <Text style={styles.footer1}>Blake Anderson</Text>
                            <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                            <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                        </View>
                        <View style={styles.part2}>
                        <Image style={styles.imag1} source={require('./../ressource/o4.jpg')} />
                            <Text style={styles.footer1}>Blake Anderson</Text>
                            <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                            <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                        </View>
                    </View>

                    <View style={styles.part}>
                        <View style={styles.part1}>
                            <Image style={styles.imag1} source={require('./../ressource/o5.jpg')} />
                            <Text style={styles.footer1}>Blake Anderson</Text>
                            <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                            <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                        </View>
                        <View style={styles.part2}>
                        <Image style={styles.imag1} source={require('./../ressource/o6.jpg')} />
                            <Text style={styles.footer1}>Blake Anderson</Text>
                            <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                            <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                        </View>
                    </View>

                    <View style={styles.part}>
                        <View style={styles.part1}>
                            <Image style={styles.imag1} source={require('./../ressource/o7.jpg')} />
                            <Text style={styles.footer1}>Blake Anderson</Text>
                            <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                            <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                        </View>
                        <View style={styles.part2}>
                        <Image style={styles.imag1} source={require('./../ressource/o8.jpg')} />
                            <Text style={styles.footer1}>Blake Anderson</Text>
                            <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                            <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                        </View>
                    </View>

                    <View style={styles.part}>
                        <View style={styles.part1}>
                            <Image style={styles.imag1} source={require('./../ressource/o9.jpg')} />
                            <Text style={styles.footer1}>Blake Anderson</Text>
                            <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                            <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                        </View>
                        <View style={styles.part2}>
                        <Image style={styles.imag1} source={require('./../ressource/o10.jpg')} />
                            <Text style={styles.footer1}>Blake Anderson</Text>
                            <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                            <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                        </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/o11.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/o12.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/o13.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/o14.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/o15.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/o16.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/o17.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/o18.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/o19.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/o20.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/o21.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/O22.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/o23.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/o24.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/o25.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/o26.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </View>
                    </View>
                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/o27.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/o28.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/o29.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/o30.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
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
        width: '100%',
        height: '100%',
        justifyContent: 'space-between'
    },
    tite: {
        display: 'flex',
        color: 'white',
        fontSize: 35,
        top: 100,
        textAlign: 'center'
    },
    containers: {
        width: '100%',
        height: 900,
        // backgroundColor: 'red',
        top: 150
    },
    content: {
        width: '100%',
        height: 900,
    },
    part: {
        display: 'flex',
        flexDirection: 'row'
    },
    part1: {
        flex: 1
    },
    part2: {
        flex: 1
    },
    imag1: {
        display: 'flex',
        width: 200,
        height: 200,
        borderRadius: 25,
        left: 14
      },
      dta:{
        display: 'flex',
        width: 26,
        height: 26,
        bottom: 30,
        left: 190
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
})