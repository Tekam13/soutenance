import { useNavigation } from '@react-navigation/native';
import React, { useState, useRef, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

const Regis2 = ({ length = 4, onComplete }) => {

  const navigation = useNavigation();

  const [pin, setPin] = useState('');
  const inputRefs = useRef([]);
  const [borderColor, setBorderColor] = useState('red');

  const [seconds, setSeconds] = useState(10);
  useEffect(() => {
    if (seconds > 0) {
      const interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);

      // Nettoyage de l'intervalle lorsque le composant est démonté ou que les secondes atteignent zéro
      return () => clearInterval(interval);
    }
  }, [seconds]);

  
  const handleChange = (value, index) => {
    if (value.length <= 1) {
      const newPin = `${pin.slice(0, index)}${value}${pin.slice(index + 1)}`;
      setPin(newPin);

      if (value) {
        // Si un caractère est saisi, passer au champ suivant
        if (index < length - 1) {
          inputRefs.current[index + 1].focus();
        }
      } else {
        // Si le champ est vide, passer au champ précédent
        if (index > 0) {
          inputRefs.current[index - 1].focus();
        }
      }

      if (newPin.length === length) {
        //onComplete(newPin);
      }
    }
  };

  return (
    <View style={styles.body}>
      <View style={styles.dv0}>
        <Text style={styles.img1}>BIMM</Text>
      </View>
      <View style={styles.dv1}>
        <Text style={styles.img2}>Confirmation</Text>
        <View style={styles.dv2}>
          <Text style={styles.txt2}>Avant de pouvoir utiliser votre compte, veuillez confirmez votre numero de telephaone en entrant le code reçu par SMS.</Text>
        </View>
        <View style={styles.container}>
          {Array.from({ length }).map((_, index) => (
            <TextInput
              key={index}
              style={[styles.input, pin.length > index && styles.filled]}
              keyboardType="number-pad"
              maxLength={1}
              value={pin[index] || ''}
              onChangeText={(text) => handleChange(text, index)}
              ref={(ref) => (inputRefs.current[index] = ref)}
            />
          ))}
        </View>
        <View style={styles.dv3}>
          <TouchableOpacity style={styles.bt}>
            <Text style={styles.bttxt}>Continuer</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dv4}>
          <Text style={styles.label}>Pas reçu de code Renvoyez dans: {seconds}</Text>
          {/* {seconds === 0 && <Text style={styles.message}>Renvoyez le message!</Text>} */}
        </View>

      </View>
      <View style={styles.dv2}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt1}>Retour à la connexion</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
    height: 1000,
  },
  dv1: {
    width: 326,
    height: 384,
    borderWidth: 1,
    borderColor: '#1D0800',
    padding: 32,
    left: 60,
    top: 250,
    borderRadius: 16,
  },
  img1: {
    display: 'flex',
    textAlign: 'center',
    color: '#1D0800',
    fontSize: 40,
    top: 150
  },
  img2: {
    display: 'flex',
    textAlign: 'center',
    color: '#1D0800',
    fontSize: 25,
  },
  btn: {
    display: 'flex',
    width: 163,
    height: 37,
    left: 150,
    backgroundColor: '#E6E8F2',
    borderRadius: 8,
    top: 300,
  },
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
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#1D0800',
    width: 59.5,
    height: 79,
    textAlign: 'center',
    fontSize: 70,
    color: '#1D0800o',
    justifyContent: 'center',
    top: 50
  },
  bt:{
    display: 'flex',
    width: 262,
    height: 56,
    borderRadius:8,
    backgroundColor: '#1D0800',
    top: 70
  },
  bttxt:{
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    top: 15
  },
  filled: {
    borderColor: '#1D0800',
  },
  label:{
    display: 'flex',
    top: 80,
    textAlign: 'center'
  },
});

export default Regis2;
