
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

// const Stack = createStackNavigator();
export default function Visualisation3() {
    const navigation = useNavigation();
    return (
        <View style={styles.body}>
            <View style={styles.title}>
                <Text style={styles.tite}>Les Meilleur Salons</Text>
            </View>
            <View style={styles.containers}>
                <ScrollView
                    contentContainerStyle={styles.contentContainer}
                    style={styles.container}
                >

                    <View style={styles.part}>
                        <View style={styles.part1}>
                            <Image style={styles.imag1} source={require('./../ressource/s1.jpg')} />
                            <Text style={styles.footer1}>Dijon Haircut</Text>
                            <Text style={styles.footer2}>Logbessou </Text>
                            <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.part2}>
                        <Image style={styles.imag1} source={require('./../ressource/s2.jpg')} />
                            <Text style={styles.footer1}>Avenida Fashion</Text>
                            <Text style={styles.footer2}>Logpom </Text>
                            <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.part}>
                        <View style={styles.part1}>
                            <Image style={styles.imag1} source={require('./../ressource/s3.jpg')} />
                            <Text style={styles.footer1}>Marvil Pro</Text>
                            <Text style={styles.footer2}>Makepe </Text>
                            <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.part2}>
                        <Image style={styles.imag1} source={require('./../ressource/s4.jpg')} />
                            <Text style={styles.footer1}>Blake Fashion</Text>
                            <Text style={styles.footer2}>Libreville </Text>
                            <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.part}>
                        <View style={styles.part1}>
                            <Image style={styles.imag1} source={require('./../ressource/s5.jpg')} />
                            <Text style={styles.footer1}>Blake Anderson</Text>
                            <Text style={styles.footer2}>P14 </Text>
                            <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.part2}>
                        <Image style={styles.imag1} source={require('./../ressource/s6.jpg')} />
                            <Text style={styles.footer1}>Blake Anderson</Text>
                            <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                            <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.part}>
                        <View style={styles.part1}>
                            <Image style={styles.imag1} source={require('./../ressource/s7.jpg')} />
                            <Text style={styles.footer1}>Blake Anderson</Text>
                            <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                            <TouchableOpacity onPress={()=>navigation.navigate('Coiffure')}>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.part2}>
                        <Image style={styles.imag1} source={require('./../ressource/s8.jpg')} />
                            <Text style={styles.footer1}>Blake Anderson</Text>
                            <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                            <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.part}>
                        <View style={styles.part1}>
                            <Image style={styles.imag1} source={require('./../ressource/s9.jpg')} />
                            <Text style={styles.footer1}>Blake Anderson</Text>
                            <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                            <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.part2}>
                        <Image style={styles.imag1} source={require('./../ressource/s10.jpg')} />
                            <Text style={styles.footer1}>Blake Anderson</Text>
                            <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                            <TouchableOpacity onPress={()=>navigation.navigate('Coiffure')}>
                                <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/s11.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/s12.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                </TouchableOpacity>
                            </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/s13.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/s14.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                </TouchableOpacity>
                            </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/s15.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/s16.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                </TouchableOpacity>
                            </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/s17.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/s18.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                </TouchableOpacity>
                            </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/s19.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/s20.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')}/>
                                </TouchableOpacity>
                            </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/s21.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/s22.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')}/>
                                </TouchableOpacity>
                            </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/s23.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/s24.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                </TouchableOpacity>
                            </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/s25.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/s26.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                </TouchableOpacity>
                            </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/s27.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/s28.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                </TouchableOpacity>
                            </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/s29.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/s30.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                </TouchableOpacity>
                            </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/s31.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/s32.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                </TouchableOpacity>
                            </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/s33.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/s34.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                </TouchableOpacity>
                            </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/s35.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/s36.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                </TouchableOpacity>
                            </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/s37.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/s38.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                </TouchableOpacity>
                            </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/s39.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/s40.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                </TouchableOpacity>
                            </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/s41.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/s42.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')}/>
                                </TouchableOpacity>
                            </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/s43.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/s44.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                </TouchableOpacity>
                            </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/s45.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/s46.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')}/>
                                </TouchableOpacity>
                            </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/s47.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/s48.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                </TouchableOpacity>
                            </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/s49.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/s50.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                </TouchableOpacity>
                            </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/s51.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/s52.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                </TouchableOpacity>
                            </View>
                    </View>

                    <View style={styles.part}>
                            <View style={styles.part1}>
                                <Image style={styles.imag1} source={require('./../ressource/s53.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.part2}>
                            <Image style={styles.imag1} source={require('./../ressource/s54.jpg')} />
                                <Text style={styles.footer1}>Blake Anderson</Text>
                                <Text style={styles.footer2}>Meilleur style de coiffure </Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Coiffure')}>
                                    <Image style={styles.dta} source={require('./../ressource/E11.png')} />
                                </TouchableOpacity>
                            </View>
                    </View>
                    <View style={styles.haut}></View>

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
      haut:{
        height: 150
      },
})