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
export default function Visualisation1() {
    const navigation = useNavigation();
    return (
        <View style={styles.body}>
            <View style={styles.title}>
                <Text style={styles.tite}>Coiffure Femme</Text>
            </View>
            <View style={styles.containers}>
                <ScrollView
                    contentContainerStyle={styles.contentContainer}
                    style={styles.container}
                >

                    <View style={styles.part}>
                        <View style={styles.part1}>
                            <Image style={styles.imag1} source={require('./../ressource/F1.jpg')} />
                            <Text style={styles.footer1}>Blake Anderson</Text>
                            <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                            <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                        </View>
                        <View style={styles.part2}>
                        <Image style={styles.imag1} source={require('./../ressource/F2.jpg')} />
                            <Text style={styles.footer1}>Blake Anderson</Text>
                            <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                            <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                        </View>
                    </View>

                    <View style={styles.part}>
                        <View style={styles.part1}>
                            <Image style={styles.imag1} source={require('./../ressource/F3.jpg')} />
                            <Text style={styles.footer1}>Blake Anderson</Text>
                            <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                            <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                        </View>
                        <View style={styles.part2}>
                        <Image style={styles.imag1} source={require('./../ressource/F4.jpg')} />
                            <Text style={styles.footer1}>Blake Anderson</Text>
                            <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                            <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                        </View>
                    </View>

                    <View style={styles.part}>
                        <View style={styles.part1}>
                            <Image style={styles.imag1} source={require('./../ressource/F5.jpg')} />
                            <Text style={styles.footer1}>Blake Anderson</Text>
                            <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                            <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                        </View>
                        <View style={styles.part2}>
                        <Image style={styles.imag1} source={require('./../ressource/F6.jpg')} />
                            <Text style={styles.footer1}>Blake Anderson</Text>
                            <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                            <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                        </View>
                    </View>

                    <View style={styles.part}>
                        <View style={styles.part1}>
                            <Image style={styles.imag1} source={require('./../ressource/F7.jpg')} />
                            <Text style={styles.footer1}>Blake Anderson</Text>
                            <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                            <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                        </View>
                        <View style={styles.part2}>
                        <Image style={styles.imag1} source={require('./../ressource/F8.jpg')} />
                            <Text style={styles.footer1}>Blake Anderson</Text>
                            <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                            <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                        </View>
                    </View>

                    <View style={styles.part}>
                        <View style={styles.part1}>
                            <Image style={styles.imag1} source={require('./../ressource/F9.jpg')} />
                            <Text style={styles.footer1}>Blake Anderson</Text>
                            <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                            <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                        </View>
                        <View style={styles.part2}>
                        <Image style={styles.imag1} source={require('./../ressource/F10.jpg')} />
                            <Text style={styles.footer1}>Blake Anderson</Text>
                            <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                            <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                        </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/F11.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/F12.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/F13.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/F14.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/F15.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/F16.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/F17.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/F18.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/F19.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/F20.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/F21.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/F22.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/F23.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/F24.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/F25.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/F26.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </View>
                    </View>
                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/F27.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/F28.jpg')} />
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