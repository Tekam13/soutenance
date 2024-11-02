// import { createStackNavigator } from "@react-navigation/stack";
// import { StyleSheet, View, Image, Text } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// // const Stack = createStackNavigator();
// export default function Splash(){ 
//     const navigation = useNavigation();
//     return( 
//         <View style={styles.body}>                  
//             <View style={styles.part1}>
//                 <Image style={styles.imp1} source={require('./../ressource/Vector.png')}/>
//             </View>
//             <View style={styles.part2}>
//                 <Image style={styles.imp2} source={require('./../ressource/Frame.png')}/>
//             </View>
//             <View style={styles.part3}>
//                 <Image style={styles.imp3} source={require('./../ressource/image.png')}/>
//             </View>
//             <View style={styles.div4}> 
//             <Text onPress={()=>navigation.navigate('Onboard1')} style={styles.pass}>Next</Text>
//             </View> 
 
//         </View>     
//     )   
// }

// const styles = StyleSheet.create({  
//     body:{ 
//         backgroundColor: '#1D0800',
//         width: 500,
//         justifyContent: 'space-between'
//     },  
//     imp1:{
//         display: 'flex',
//         bottom: 17
//     },
//     imp2:{
//         position: 'relative',
//         display: 'flex',
//         bottom: 330,
//         left: 120
//     },
//     imp3:{
//         display: 'flex',
//         bottom: 520,
//     },
//     pass:{
//         position: 'relative',
//         display: 'flex',
//         bottom: 660,
//         color: '#fff',
//         left: 370
//     } 
     
// })


import React, { useEffect } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Splash() {
    const navigation = useNavigation();

    // Use useEffect to navigate after a delay
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Onboard1'); // Navigate to the next screen
        }, 10000); // 3000 milliseconds = 3 seconds

        // Cleanup the timer on component unmount
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.body}>
            <View style={styles.part1}>
                <Image style={styles.imp1} source={require('./../ressource/Vector.png')} />
            </View>
            <View style={styles.part2}>
                <Image style={styles.imp2} source={require('./../ressource/Frame.png')} />
            </View>
            <View style={styles.part3}>
                <Image style={styles.imp3} source={require('./../ressource/image.png')} />
            </View>
            <View style={styles.div4}>
                <Text onPress={() => navigation.navigate('Onboard1')} style={styles.pass}>Next</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#1D0800',
        width: '100%', // Use percentage for responsive design
        height: '100%', // Fill the entire screen
        justifyContent: 'space-between',
        alignItems: 'center', // Center items horizontally
    },
    imp1: {
        display: 'flex',
        bottom: 17,
    },
    imp2:{
        position: 'relative',
        display: 'flex',
        bottom: 330,
        left: 10
    },
    imp3: {
        display: 'flex',
        bottom: 520,
    },
    pass: {
        position: 'relative',
        display: 'flex',
        bottom: 660,
        color: '#fff',
        left: 370,
    }
});