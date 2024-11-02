import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Platform, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DateTimePickerComponent = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [savedDateTime, setSavedDateTime] = useState('');

  const onChange = (event, selectedDate) => {
    // Vérifiez si selectedDate est défini
    if (event.type === 'set') {
      const currentDate = selectedDate || date;
      setDate(currentDate);
      setShow(Platform.OS === 'ios');
    } else {
      // Si l'utilisateur annule la sélection, masquez le DateTimePicker
      setShow(false);
    }
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const handleSave = () => {
    const formattedDateTime = `Date : ${date.toLocaleDateString()} - Heure : ${date.toLocaleTimeString()}`;
    setSavedDateTime(formattedDateTime);
  };

  return (
    <View style={styles.container}>
      <View style={styles.dev1}>
        <Image style={styles.pro} source={require('./../ressource/P1.jpg')} />
      </View>

      <View style={styles.dv2}>
        <View style={styles.titre}>
          <Text style={styles.tite}>Date & Time</Text>
        </View>
        <View style={styles.dateTimeContainer}>
          <View style={styles.btn}>
            <Text style={styles.txtd}>Entre la date de votre rendez-vous afin d'etre la priorite lors de la rencontre au salon de beauté avec nos Pro </Text>
            <TouchableOpacity style={styles.btd} onPress={showDatepicker}>
              <Text style={styles.tt1}>Sélectionner la date</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.btn}>
            <Text style={styles.txth}>Entre l'heure de votre rendez-vous afin d'etre la priorite lors de la rencontre au salon de beauté avec nos Pro </Text>
            <TouchableOpacity style={styles.bth} onPress={showTimepicker}>
              <Text style={styles.tt1}>Sélectionner l'heure</Text>
            </TouchableOpacity>
          </View>
          {/* <Button onPress={showDatepicker} title="Sélectionner la date" style{styles.btn}/>
          <Button onPress={showTimepicker} title="Sélectionner l'heure" style={styles.btn}/> */}
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </View>
      </View>

      {/* <Button title="Enregistrer" onPress={handleSave} /> */}
      
      <View style={styles.part6}>
        <TouchableOpacity style={styles.btnf} onPress={handleSave}>
          <Text style={styles.txtb}>Save</Text>
        </TouchableOpacity>
      </View>

      {savedDateTime !== '' && (
        <View style={styles.savedDateTimeContainer}>
          <Text style={styles.savedDateTime}>{savedDateTime}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: '#010813'
  },
  dateTimeContainer: {
    display: 'flex',
    marginBottom: 20,
    top: 150

  },
  savedDateTimeContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    bottom: 250,
    width: 296,
    height: 56,
    left: 75,
    borderColor: '#fff',
  },
  savedDateTime: {
    fontSize: 16,
    color: '#fff'
  },
  pro: {
    display: 'flex',
    width: '100%',
    height: 250
  },
  dv2: {
    display: 'flex',
    width: '100%',
    height: 610,
    backgroundColor: '#010813',
    bottom: 50,
    borderRadius: 40
  },
  tite: {
    display: 'flex',
    left: 50,
    top: 40,
    fontSize: 40,
    color: 'white'
  },
  txtd: {
    display: 'flex',
    fontSize: 20,
    left: 16,
    bottom: 80,
    color: '#fff'
  },
  txth: {
    display: 'flex',
    fontSize: 20,
    left: 16,
    bottom: 20,
    color: '#fff'
  },
  btd: {
    display: 'flex',
    width: 396,
    height: 56,
    //backgroundColor: 'white',
    bottom: 50,
    left: 25,
    borderRadius: 32,
    borderColor: '#fff',
    borderWidth: 1
  },
  bth: {
    display: 'flex',
    width: 396,
    height: 56,
    //backgroundColor: 'white',
    top: 15,
    left: 25,
    borderRadius: 32,
    borderColor: '#fff',
    borderWidth: 1
  },
  tt1: {
    textAlign: 'center',
    top: 15,
    fontSize: 20,
    color: 'white'
  },
  part6: {
    display: 'flex',
    width: 420,
    height: 110,
    borderWidth: 1,
    borderColor: '#000',
    left: 10,
    bottom: 20,
    borderRadius: 40,
    backgroundColor: '#fff'
},
btnf: {
    display: 'flex',
    width: 326,
    height: 56,
    backgroundColor: 'red',
    top: 25,
    left: 45,
    borderRadius: 20
},
txtb: {
    display: 'flex',
    textAlign: 'center',
    top: 15,
    fontSize: 20,
    color: 'white'
},
});

export default DateTimePickerComponent;