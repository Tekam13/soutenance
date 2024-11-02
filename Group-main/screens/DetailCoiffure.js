import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DetailCoiffure = ({ route }) => {
  const { itemId } = route.params; // Get the itemId from route params
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://192.168.126.1:1337/api/visualisations/${itemId}?populate=*`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setItem(json.data); // Set the fetched data
      } catch (error) {
        console.error(error);
        alert('Une erreur s\'est produite lors de la récupération des données: ' + error.message);
      }
    };

    fetchData();
  }, [itemId]);

  if (!item) {
    return <Text>Loading...</Text>; // Show loading state
  }

  // Accessing the attributes from the fetched data
  const { name, description, promo } = item.attributes;

  // Fetching the photo URL if it exists
  const photoUrl = item.attributes.photo?.data.length > 0
    ? item.attributes.photo.data[0].attributes.url
    : null;

  return (
    <View style={styles.container}>
        <Text style={styles.titre}>Detail Coiffure</Text>
      {photoUrl && (
        <Image
          source={{ uri: `http://192.168.126.1:1337${photoUrl}` }} // Ensure the URL is correct
          style={styles.image}
        />
      )}
      <Text style={styles.title}>Prix: {name}</Text>
      <Text style={styles.description}>Description: {description}</Text>
      <View style={styles.v1}>
        <Text style={styles.pro}>Promotion{'\n'} ⭐⭐⭐</Text>
        <Text style={styles.pro1}>{promo}</Text>
      </View>
      {/* Add more fields as needed */}

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.bbt}>Payer</Text>
      </TouchableOpacity>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    top: 80
  },
  description: {
    display: 'flex',
    fontSize: 16,
    color: 'white',
    marginTop: 10,
    top: 80
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: 'cover',
    marginBottom: 20,
    borderRadius: 32,
    top: 90
  },
  titre:{
    display: 'flex',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    top: 35
  },
  btn:{
    display: 'flex',
    width: 396,
    height: 60,
    backgroundColor: 'red',
    top: 150,
    borderRadius: 32
  },
  bbt:{
    textAlign: 'center',
    top: 18,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  v1:{
    display: 'flex',
    width: 150,
    height:150,
    borderWidth: 2,
    borderColor: 'white',
    top: 110,
    left: 230
  },
  pro:{
    color: 'white',
    textAlign: 'center',
    top: 20,
    fontWeight: 'bold',
    fontSize: 25
  },
  pro1:{
    color: 'white',
    textAlign: 'center',
    top: 20,
    fontWeight: 'bold',
    fontSize: 40
  },
});

export default DetailCoiffure;