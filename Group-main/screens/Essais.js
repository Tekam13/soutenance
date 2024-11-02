
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native"; 

export default function Connects() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://192.168.126.1:1337/api/essais?populate=*');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      setData(json.data); // Set the fetched data to state
    } catch (error) {
      console.error(error);
      alert('Une erreur s\'est produite lors de la récupération des données: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Optionnel : Charger les données au démarrage
    // fetchData(); 
  }, []);

  const renderItem = ({ item }) => {
    // Check if photo data exists and has items
    const photoData = item.attributes.photo && item.attributes.photo.data;
    const photoUrl = photoData && photoData.length > 0 
      ? photoData[0].attributes.url 
      : null; // Get the URL of the first photo if it exists

    return (
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Nom: {item.attributes.nom}</Text>
        <Text>Profession: {item.attributes.proffession}</Text>
        {photoUrl && (
          <Image
            source={{ uri: `http://192.168.126.1:1337${photoUrl}` }} // Prepend the base URL for the image
            style={styles.image}
          />
        )}
      </View>
    );
  };

  return (
    <View style={styles.body}>
      <TouchableOpacity style={styles.btn} onPress={fetchData}>
        <Text style={styles.txt2}>Fetch</Text>
      </TouchableOpacity>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  btn: {
    width: 200,
    height: 59,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  txt2: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
  item: {
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 10,
  },
});






// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, Alert } from 'react-native';
// import axios from 'axios';

// const AppointmentDataScreen = () => {
//     const [appointmentData, setAppointmentData] = useState([]);

//     const fetchAppointmentData = async () => {
//         try {
//             const response = await axios.get('http://192.168.126.1:1337/api/rendez-vous?populate=*');
//             const data = response.data.data;

//             // Extraire les noms et emails
//             const extractedData = data.map(item => ({
//                 nom: item.attributes.nom,
//                 email: item.attributes.email,
//             }));

//             setAppointmentData(extractedData);
//         } catch (error) {
//             Alert.alert("Erreur", "Une erreur s'est produite lors de la récupération des données.");
//             console.error(error);
//         }
//     };

//     useEffect(() => {
//         fetchAppointmentData();
//     }, []);

//     return (
//         <View style={styles.container}>
//             {appointmentData.length > 0 ? (
//                 appointmentData.map((appointment, index) => (
//                     <View key={index} style={styles.item}>
//                         <Text style={styles.text}>Nom: {appointment.nom}</Text>
//                         <Text style={styles.text}>Email: {appointment.email}</Text>
//                     </View>
//                 ))
//             ) : (
//                 <Text style={styles.text}>Aucune donnée trouvée.</Text>
//             )}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//         backgroundColor: '#FFFFFF',
//     },
//     item: {
//         marginBottom: 15,
//         padding: 10,
//         borderColor: '#ccc',
//         borderWidth: 1,
//         borderRadius: 5,
//     },
//     text: {
//         fontSize: 16,
//     },
// });

// export default AppointmentDataScreen;