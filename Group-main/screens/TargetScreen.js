import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const TargetScreen = ({ route }) => {
  const navigation = useNavigation();
  const { itemId } = route.params;
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://192.168.126.1:1337/api/salons/${itemId}?populate=*`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setItem(json.data);
      } catch (error) {
        console.error(error);
        alert('Une erreur s\'est produite lors de la récupération des données: ' + error.message);
      }
    };

    fetchData();
  }, [itemId]);

  if (!item) {
    return <Text>Loading...</Text>;
  }

  const photoUrl = item.attributes.photo.data.length > 0
    ? item.attributes.photo.data[0].attributes.url
    : null;

  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Detail Salon</Text>
      <Text style={styles.title}>Nom: {item.attributes.nom}</Text>
      <Text style={styles.text}>Lieu: {item.attributes.lieu}</Text>
      <Text style={styles.tex}>Specialisation du salon</Text>
      <Text style={styles.text1}>🔆 {item.attributes.traitement}</Text>
      <Text style={styles.text1}>🔆 {item.attributes.produit}</Text>
      <Text style={styles.text1}>🔆 {item.attributes.qualification}</Text>
      <Text style={styles.text1}>🔆 {item.attributes.securite}</Text>
      <Text style={styles.text1}>🔆 {item.attributes.acceuil}</Text>
      <Text style={styles.text1}>🔆 {item.attributes.detente}</Text>
      {photoUrl && (
        <Image
          source={{ uri: `http://192.168.126.1:1337${photoUrl}` }}
          style={styles.image}
        />
      )}
      <View style={styles.valide}>
        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('RendezVous2')}>
          <Text style={styles.btnT}>Prendre Rendez-Vous</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#010813',
  },
  title: {
    display: 'flex',
    fontSize: 20,
    fontWeight: 'bold',
    top: 400,
    left: 10,
    marginBottom: 10,
    color: 'white'
  },
  text: {
    display: 'flex',
    fontSize: 16,
    marginBottom: 10,
    top: 400,
    marginBottom: 10,
    left: 10,
    fontSize: 20,
    color: 'white'
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 10,
    display: 'flex',
    top: 140,
    position: 'absolute',
    left: 20
  },
  titre:{
    display:'flex',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    top: 20,
    color: 'white'
  },
  text1: {
    display: 'flex',
    fontSize: 16,
    marginBottom: 10,
    top: 410,
    marginBottom: 10,
    left: 10,
    fontSize: 20,
    color: 'white'
  },
  tex: {
    display: 'flex',
    fontSize: 16,
    marginBottom: 10,
    top: 400,
    marginBottom: 10,
    left: 10,
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'
  },
  btn:{
    width: 396,
    height: 56,
    backgroundColor: 'red',
    display: 'flex',
    top: 420,
    borderRadius: 32,
  },
  btnT:{
    textAlign: 'center',
    top: 15,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default TargetScreen;