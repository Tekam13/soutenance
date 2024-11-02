import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
 
import Notice from "../SVG/Notif";
import TopBar4 from "../SVG/TopBar4"

export default function Profil() {
    const navigation = useNavigation();
    return (
        <View style={styles.body}>
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image style={styles.lo} source={require('./../ressource/Frame.png')}/>
                    <Text style={styles.tlo}>Bimm</Text>
                </View>
                <View style={styles.title}>
                    <Text style={styles.text}>Profil</Text>
                    <Notice style={styles.notice}/>
                </View>
                <View style={styles.person}>
                    <View style={styles.vv}>
                        <Image style={styles.pers} source={require('./../ressource/coiffeur.png')}/>
                    </View>
                    <View style={styles.desc}>
                        <Text style={styles.t1}>Jesse Ikolo</Text>
                        <Text style={styles.t2}>Afficher le profil</Text>
                    </View>
                    <View style={styles.bb}>
                        <TouchableOpacity style={styles.bt}>
                            <Image style={styles.imbt} source={require('./../ressource/E11.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.aver}>
                    <Text style={styles.txav}>Verification de l'identité</Text>
                    <Text style={styles.txav1}>Veuillez remplis tous les information neccessaire{'\n'} afin d'avoir un compte Bimm et etre considere {'\n'}comme utilisateur de l'application </Text>
                    <Image style={styles.ptri} source={require('./../ressource/Tri.png')}/>
                </View>
            </View>
            <View style={styles.mp}> 
                <ScrollView
                contentContainerStyle={styles.contentContainer}
                style={styles.container}
                >
                    <View style={styles.part}>
                        <Text style={styles.titre}>Parametre</Text>
                        <View style={styles.v3}>
                            <View style={styles.to3}>
                                <View style={styles.df1}>
                                    <TopBar4 style={styles.imSvg}/>
                                </View>
                                <View style={styles.df2}>
                                    <Text style={styles.tv3}>Informations Privée</Text>
                                </View>
                                <View style={styles.df3}>
                                    <Image style={styles.im} source={require('./../ressource/Tri.png')}/>
                                </View>
                            </View>

                            <View style={styles.to3}>
                                <View style={styles.df1}>
                                    <TopBar4 style={styles.imSvg}/>
                                </View>
                                <View style={styles.df2}>
                                    <Text style={styles.tv3}>Informations Privée</Text>
                                </View>
                                <View style={styles.df3}>
                                    <Image style={styles.im} source={require('./../ressource/Tri.png')}/>
                                </View>
                            </View>

                            <View style={styles.to3}>
                                <View style={styles.df1}>
                                    <TopBar4 style={styles.imSvg}/>
                                </View>
                                <View style={styles.df2}>
                                    <Text style={styles.tv3}>Informations Privée</Text>
                                </View>
                                <View style={styles.df3}>
                                    <Image style={styles.im} source={require('./../ressource/Tri.png')}/>
                                </View>
                            </View>

                            <View style={styles.to3}>
                                <View style={styles.df1}>
                                    <TopBar4 style={styles.imSvg}/>
                                </View>
                                <View style={styles.df2}>
                                    <Text style={styles.tv3}>Informations Privée</Text>
                                </View>
                                <View style={styles.df3}>
                                    <Image style={styles.im} source={require('./../ressource/Tri.png')}/>
                                </View>
                            </View>

                            <View style={styles.to3}>
                                <View style={styles.df1}>
                                    <TopBar4 style={styles.imSvg}/>
                                </View>
                                <View style={styles.df2}>
                                    <Text style={styles.tv3}>Informations Privée</Text>
                                </View>
                                <View style={styles.df3}>
                                    <Image style={styles.im} source={require('./../ressource/Tri.png')}/>
                                </View>
                            </View>

                            <View style={styles.to3}>
                                <View style={styles.df1}>
                                    <TopBar4 style={styles.imSvg}/>
                                </View>
                                <View style={styles.df2}>
                                    <Text style={styles.tv3}>Informations Privée</Text>
                                </View>
                                <View style={styles.df3}>
                                    <Image style={styles.im} source={require('./../ressource/Tri.png')}/>
                                </View>
                            </View>

                            <View style={styles.to3}>
                                <View style={styles.df1}>
                                    <TopBar4 style={styles.imSvg}/>
                                </View>
                                <View style={styles.df2}>
                                    <Text style={styles.tv3}>Informations Privée</Text>
                                </View>
                                <View style={styles.df3}>
                                    <Image style={styles.im} source={require('./../ressource/Tri.png')}/>
                                </View>
                            </View>

                            <View style={styles.to3}>
                                <View style={styles.df1}>
                                    <TopBar4 style={styles.imSvg}/>
                                </View>
                                <View style={styles.df2}>
                                    <Text style={styles.tv3}>Informations Privée</Text>
                                </View>
                                <View style={styles.df3}>
                                    <Image style={styles.im} source={require('./../ressource/Tri.png')}/>
                                </View>
                            </View>

                            <View style={styles.to3}>
                                <View style={styles.df1}>
                                    <TopBar4 style={styles.imSvg}/>
                                </View>
                                <View style={styles.df2}>
                                    <Text style={styles.tv3}>Informations Privée</Text>
                                </View>
                                <View style={styles.df3}>
                                    <Image style={styles.im} source={require('./../ressource/Tri.png')}/>
                                </View>
                            </View>

                            <View style={styles.to3}>
                                <View style={styles.df1}>
                                    <TopBar4 style={styles.imSvg}/>
                                </View>
                                <View style={styles.df2}>
                                    <Text style={styles.tv3}>Informations Privée</Text>
                                </View>
                                <View style={styles.df3}>
                                    <Image style={styles.im} source={require('./../ressource/Tri.png')}/>
                                </View>
                            </View>
                            
                        </View>
                    </View>

                </ScrollView>
            </View> 
            <View style={styles.dec}>
                <Text style={styles.dd}>Deconexion</Text>
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
    title:{
        display: 'flex',
        flexDirection: 'row',
        //top: 0
    },
    text:{
        flex: 1,
        display: 'flex',
        top: 100,
        fontSize:25,
        color: '#fff',
        left: 26
    },
    notice:{
        flex: 1,
        display: 'flex',
        top: 100,
        right: 26
    },
    person:{
        display: 'flex',
        flexDirection: 'row',
        top: 150,
        left: 20,
        width: 398,
        height:80,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 8
    },
    imbt:{
        display: 'flex',
        width:25,
        height:25,
    },
    vv:{
        flex:1,
        top: 10
    },
    desc:{
        flex:1,
        top: 10,
        textAlign: 'center'
    },
    bb:{
        flex:1,
        top: 25,
        left: 70
    },
    pers:{
        display: 'flex',
        borderRadius: 100,
        width:60,
        height: 60,
        left: 26
    },
    t1:{
        color: '#fff',
        fontSize: 25
    },
    t2:{
        color: '#fff',
        fontSize: 15
    },
    logo:{
        top: 10
    },
    lo:{
        display: 'flex',
        width: 70,
        height: 70,
        left: 26,
        top: 55
    },
    tlo:{
        display: 'flex',
        color: 'red',
        fontSize: 30,
        left: 110
    },
    aver:{
        display: 'flex',
        width: 398,
        height: 110,
        backgroundColor: 'red',
        borderRadius: 18,
        top: 180,
        left: 26
    },
    txav:{
        display: 'flex',
        fontSize: 20,
        left: 20,
        top: 10,
        color: 'white'
    },
    txav1:{
        display: 'flex',
        //fontSize: 15,
        left: 20,
        top: 10,
        color: 'white'
    },
    ptri:{
        display: 'flex',
        left: 360,
        bottom: 25
    },
    mp:{
        display: 'flex',
        width: 398,
        height: 350,
        backgroundColor: 'red',
        borderRadius: 18,
        top: 100,
        left: 26
    },
    contentContainer: {
        paddingVertical: 20,
        //height: '100%'
      },
      dd:{
        textAlign: 'center',
        display: 'flex',
        color: '#fff',
        fontSize: 20,
        bottom: 5
      },
      titre:{
        display: 'flex',
        fontSize: 30,
        color: '#fff',
        left: 15
      },
      to3:{
        display: 'flex',
        flexDirection:'row',
        top: 20,
        marginTop: 16
      },
      df1:{
        flex:1,
        left: 16
      },
      df2:{
        flex:1,
        right: 60
      },
      df3:{
        flex:1,
        left: 90
      },
      tv3:{
        fontSize: 18,
        color: 'white'
      },
      v3:{
        marginTop: 25,
        width: 398,
        height: 350,
      },
})