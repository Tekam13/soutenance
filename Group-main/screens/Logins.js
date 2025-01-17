import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const Logins = () => {
    const navigation = useNavigation();
   const [mood, setMood] = useState('');
  return (
    <View style={styles.body}>
        <View style={styles.div1}>
               <View style={styles.dv2}>
                   <Text style={styles.img1}>BIMM</Text>
               </View>
               <View style={styles.dv3}>
                   <Text style={styles.img2}>Se Connecter</Text>
               </View>
               <View style={styles.dv4}>
                   <Text style={styles.name}>Nom d'utilisateur</Text>
                   <TextInput style={styles.input1}/>
               </View>
               <View style={styles.dv5}>
                   <Text style={styles.names}>Mot passe</Text>
                   <TextInput style={styles.inputs}/>
               </View>
               <View style={styles.dv8}>
                   <TouchableOpacity style={styles.btn1}>
                       <Text style={styles.val}>Suivant</Text>
                   </TouchableOpacity>
               </View>
               <View style={styles.dv9}>
                    <Text style={styles.txtO}>Mot de passe oublié?</Text>
                    <Text style={styles.txtR} onPress={()=>navigation.navigate('Forgot1')}>Renisialiser</Text>
               </View>
           </View>
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

   
  body: {
       backgroundColor: '#1D0800',
       height: '100%'
   },
   div1:{
       width: 326,
       height: 518,
       top: 112,
       left:60,
       borderRadius: 16,
       padding: 32,
       backgroundColor: '#fff'
   },
   img1:{
       display: 'flex',
       color: '#1D0800',
       fontSize: 35,
       textAlign: 'center'
   },
   img2:{
       display: 'flex',
       color: '#1D0800',
       fontSize: 25,
       textAlign: 'center',
       top: 50
   },
   name:{
       display: 'flex',
       top: 115,
       left: 0,
       color: '#1E2448',
       fontSize: 16
   },
   input1:{
       width: 262,
       height: 53,
       //borderWidth: 1,
       borderRadius: 8,
       display: 'flex',
       top: 115,
       left: 0,
       backgroundColor: '#F5F5F6'
   },
   names:{
       display: 'flex',
       top: 115,
       left: 0,
       color: '#1E2448',
       fontSize: 16,
       top: 135
   },
   inputs:{
       width: 262,
       height: 53,
       //borderWidth: 1,
       borderRadius: 8,
       display: 'flex',
       top: 115,
       left: 0,
       backgroundColor: '#F5F5F6',
       top: 135
   },
   con:{
       display: 'flex',
       top: 105,
       left: 45,
   },
   dv9:{
       height: 200
   },
   btn1:{
       width: 262,
       height: 56,
       backgroundColor: '#1D0800',
       borderRadius: 8,
       display: 'flex',
       left: 0,
       top: 160
   },
   val:{
       textAlign: 'center',
       top: 16,
       color: 'white'
   },
   forgot2:{
       top: 140,
       textAlign: 'center',
       color: '#fff'
   },
   btn2:{
       width: 132,
       height: 37,
       backgroundColor: '#fff',
       borderRadius: 8,
       display: 'flex',
       left: 160,
       top: 170
   },
   val1:{
       textAlign: 'center',
       top: 8,
       color: '#041578'
   },
   txtO:{
    display:'flex',
    top:170,
    left: 25
   },
   txtR:{
    display:'flex',
    top:150,
    left: 165,
    color: '#041578'
   },
});

export default Logins;