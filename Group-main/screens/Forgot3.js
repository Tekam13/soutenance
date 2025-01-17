import { useNavigation } from '@react-navigation/native';
import React, { useState, useRef, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

const Forgot3 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.body}>
      <View style={styles.dv0}>
        <Text style={styles.img1}>BIMM</Text>
      </View>
      <View style={styles.dv1}>
        <Text style={styles.img2}>Entrer votre nouveau mot passe</Text>
        {/* <View style={styles.dv2}>
          <Text style={styles.txt2}>Entrez un nous mot de passe</Text>
        </View> */}
        <View style={styles.dv2}>
          <Text style={styles.lab}>Mot de Passe</Text>
          <TextInput style={styles.input1}/>
        </View>
        <View style={styles.dv3}>
          <TouchableOpacity style={styles.bt} onPress={()=>navigation.navigate('Forgot4')}>
            <Text style={styles.bttxt}>Renitialiser</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
    height: '100%',
  },
  dv1: {
    width: 326,
    height: 384,
    borderWidth: 1,
    borderColor: '#1E2448',
    padding: 32,
    left: 60,
    top: 250,
    borderRadius: 16,
  },
  img1: {
    display: 'flex',
    top: 150,
    color: '#1D0800',
    fontSize: 35,
    textAlign: 'center'
  },
  img2: {
    display: 'flex',
    color: '#1D0800',
    fontSize: 20,
    textAlign: 'center'
  },
//   btn: {
//     display: 'flex',
//     width: 163,
//     height: 37,
//     left: 150,
//     backgroundColor: '#1D0800',
//     borderRadius: 8,
//     top: 300,
//   },
  txt1: {
    textAlign: 'center',
    top: 5,
    color: '#1E2448',
  },
  txt2:{
    display: 'flex',
    top: 30,
    textAlign: 'center',
    fontSize: 16
  },

  bt:{
    display: 'flex',
    width: 262,
    height: 56,
    borderRadius:8,
    backgroundColor: '#1D0800',
    top: 120
  },
  bttxt:{
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    top: 15
  },
  input1:{
    width: 262,
    height: 53,
    borderRadius: 8,
    display: 'flex',
    top: 80,
    left: 0,
    backgroundColor: '#F5F5F6'
},
lab:{
    display: 'flex',
    fontSize: 16,
    top: 70,
    left: 5
},
});

export default Forgot3;

