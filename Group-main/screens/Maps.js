import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';

const CameroonMapScreen = () => {
    const [city, setCity] = useState('');
    const [region, setRegion] = useState({
        latitude: 3.848,
        longitude: 11.5021,
        latitudeDelta: 5,
        longitudeDelta: 5,
    });
    const [beautySalons, setBeautySalons] = useState([]);

    // Coordonnées des villes au Cameroun
    const cities = {
        Yaoundé: { latitude: 3.848, longitude: 11.5021 },
        Douala: { latitude: 4.0511, longitude: 9.7085 },
        Garoua: { latitude: 9.3072, longitude: 13.3985 },
        Bamenda: { latitude: 5.9631, longitude: 10.1591 },
        Bafoussam: { latitude: 5.9582, longitude: 10.1591 },
    };

    // Fonction pour récupérer les salons de beauté
    const fetchBeautySalons = async () => {
        try {
            const response = await axios.get('http://192.168.126.1:1337/api/salons-de-beaute'); // Remplacez par votre API
            setBeautySalons(response.data); // Stocker les salons récupérés
        } catch (error) {
            Alert.alert("Erreur", "Impossible de récupérer les salons de beauté.");
            console.error(error);
        }
    };

    useEffect(() => {
        fetchBeautySalons(); // Appeler la fonction lors du chargement du composant
    }, []);

    const handleSearch = () => {
        const selectedCity = cities[city];
        if (selectedCity) {
            setRegion({
                ...region,
                latitude: selectedCity.latitude,
                longitude: selectedCity.longitude,
            });
        } else {
            Alert.alert('Ville non trouvée');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Entrez le nom d'une ville"
                value={city}
                onChangeText={setCity}
            />
            <Button title="Rechercher" onPress={handleSearch} />

            <MapView
                style={styles.map}
                initialRegion={region}
            >
                {beautySalons.map((salon, index) => (
                    <Marker
                        key={index}
                        coordinate={{ latitude: salon.latitude, longitude: salon.longitude }}
                        title={salon.name}
                        description={salon.description}
                    />
                ))}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    map: {
        flex: 1,
    },
});

export default CameroonMapScreen;


{/*import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const CameroonMapScreen = () => {
    const [city, setCity] = useState('');
    const [region, setRegion] = useState({
        latitude: 3.848,
        longitude: 11.5021,
        latitudeDelta: 5,
        longitudeDelta: 5,
    });

    // Coordonnées des villes au Cameroun
    const cities = {
        Yaoundé: { latitude: 3.848, longitude: 11.5021 },
        Douala: { latitude: 4.0511, longitude: 9.7085 },
        Garoua: { latitude: 9.3072, longitude: 13.3985 },
        Bamenda: { latitude: 5.9631, longitude: 10.1591 },
        Bafoussam: { latitude: 5.9582, longitude: 10.1591 },
    };

    const handleSearch = () => {
        const selectedCity = cities[city];
        if (selectedCity) {
            setRegion({
                ...region,
                latitude: selectedCity.latitude,
                longitude: selectedCity.longitude,
            });
        } else {
            alert('Ville non trouvée');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Entrez le nom d'une ville"
                value={city}
                onChangeText={setCity}
            />
            <Button title="Rechercher" onPress={handleSearch} />
            <MapView
                style={styles.map}
                initialRegion={region}
            >
                {Object.keys(cities).map((cityName) => (
                    <Marker
                        key={cityName}
                        coordinate={cities[cityName]}
                        title={cityName}
                    />
                ))}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    map: {
        flex: 1,
    },
});

export default CameroonMapScreen;*/}


{/*import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, PermissionsAndroid } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const BeautySalons = () => {
  const [salons, setSalons] = useState([]);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Permission de localisation',
          message: 'Cette application a besoin d\'accéder à votre localisation.',
          buttonNeutral: 'Plus tard',
          buttonNegative: 'Annuler',
          buttonPositive: 'OK',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getCurrentLocation();
      } else {
        console.log('Permission de localisation refusée');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        fetchBeautySalons(latitude, longitude);
      },
      (error) => {
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  };

  const fetchBeautySalons = async (latitude, longitude) => {
    try {
      const response = await fetch(`https://api.example.com/salons?lat=${latitude}&lng=${longitude}`);
      const data = await response.json();
      setSalons(data.salons);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Salons de Beauté au Cameroun</Text>
      <FlatList
        data={salons}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text>{item.address}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#f9c2ff',
  },
  itemTitle: {
    fontSize: 18,
  },
});

export default BeautySalons;*/}