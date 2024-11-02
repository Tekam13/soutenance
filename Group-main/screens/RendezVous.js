import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native';
import axios from 'axios';
import { TextInput } from 'react-native-gesture-handler';

const AppointmentDataScreen = () => {
    const [appointments, setAppointments] = useState([]);

    // Fonction pour récupérer les rendez-vous
    const fetchAppointmentData = async () => {
        try {
            const response = await axios.get('http://192.168.126.1:1337/api/rendez-vous?populate=*');
            const data = response.data.data;

            // Extraire les informations nécessaires
            const extractedData = data.map(item => ({
                nom: item.attributes.nom,
                email: item.attributes.email,
                telephone: item.attributes.telephone,
                salonName: item.attributes.nomSalon,
                service: item.attributes.service,
                date: item.attributes.date,
                heure: item.attributes.heure,
                commentaire: item.attributes.commentaire,
                methodeDePaiement: item.attributes.methodeDePaiement,
            }));

            setAppointments(extractedData);
        } catch (error) {
            Alert.alert("Erreur", "Une erreur s'est produite lors de la récupération des données.");
            console.error(error);
        }
    };

    useEffect(() => {
        fetchAppointmentData(); // Appeler la fonction lors du chargement du composant
    }, []);

    return (
        <View style={styles.body}>
            <Text style={styles.title}>Rendez-vous Enregistrés</Text>
            <TextInput style={styles.input} placeholder='Recherche' placeholderTextColor="white"/>
            <View style={styles.containers}>
                <ScrollView
                    contentContainerStyle={styles.contentContainer}
                    style={styles.container}
                >

                    {appointments.length > 0 ? (
                        appointments.map((appointment, index) => (
                            <View key={index} style={styles.item}>
                                <Text style={styles.text}>Nom: {appointment.nom}</Text>
                                <Text style={styles.text}>Email: {appointment.email}</Text>
                                <Text style={styles.text}>Téléphone: {appointment.telephone}</Text>
                                <Text style={styles.text}>Salon: {appointment.salonName}</Text>
                                <Text style={styles.text}>Service: {appointment.service}</Text>
                                <Text style={styles.text}>Date: {appointment.date}</Text>
                                <Text style={styles.text}>Heure: {appointment.heure}</Text>
                                <Text style={styles.text}>Commentaire: {appointment.commentaire}</Text>
                                <Text style={styles.text}>Méthode de Paiement: {appointment.methodeDePaiement}</Text>
                            </View>
                        ))
                    ) : (
                        <Text style={styles.noData}>Aucune donnée trouvée.</Text>
                    )}

                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        display: 'flex',
        backgroundColor: '#010813',
        height: '100%',
    },
    contentContainer: {
        paddingVertical: 20,
        //height: '100%'
    },
    containers: {
        flex: 1,
        padding: 20,
        backgroundColor: '#010813',
        top: 150
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color:'white',
        top: 90
    },
    item: {
        marginBottom: 15,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
    },
    input:{
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        width: 400,
        left: 25,
        top: 120,
        height: 60
    },
    text: {
        fontSize: 16,
        color: 'white'
    },
    noData: {
        textAlign: 'center',
        fontSize: 16,
        color: 'gray',
    },
});

export default AppointmentDataScreen;


// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, StyleSheet, Alert, ScrollView } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import axios from 'axios';
// import { TouchableOpacity } from 'react-native';
// import PushNotification from 'react-native-push-notification';

// // Configuration des notifications
// PushNotification.configure({
//     onNotification: function (notification) {
//         console.log('NOTIFICATION:', notification);
//     },
//     requestPermissions: true, // Demander des permissions sur iOS
// });

// const AppointmentScreen = () => {
//     const [fullName, setFullName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     const [salonName, setSalonName] = useState('');
//     const [service, setService] = useState('');
//     const [date, setDate] = useState('');
//     const [time, setTime] = useState('');
//     const [comments, setComments] = useState('');
//     const [paymentMethod, setPaymentMethod] = useState('');
//     const [appointments, setAppointments] = useState([]);

//     // Fonction pour récupérer les rendez-vous
//     const fetchAppointments = async () => {
//         try {
//             const response = await axios.get('http://192.168.126.1:1337/api/rendez-vous?populate=*');
//             setAppointments(response.data); // Stocker les rendez-vous récupérés
//         } catch (error) {
//             console.error("Erreur lors de la récupération des rendez-vous :", error);
//         }
//     };

//     useEffect(() => {
//         fetchAppointments(); // Appeler la fonction lors du chargement du composant
//     }, []);

//     const handleSubmit = async () => {
//         if (!fullName || !email || !phone || !salonName || !service || !date || !time || !paymentMethod) {
//             Alert.alert("Erreur", "Veuillez remplir tous les champs obligatoires.");
//             return;
//         }

//         const appointmentData = {
//             data: {
//                 nom: fullName,
//                 email: email,
//                 telephone: phone,
//                 nomSalon: salonName,
//                 service: service,
//                 date: date,
//                 heure: time,
//                 commentaire: comments,
//                 methodeDePaiement: paymentMethod,
//             },
//         };

//         try {
//             const response = await axios.post('http://192.168.126.1:1337/api/rendez-vous', appointmentData, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });

//             if (response.status === 200 || response.status === 201) {
//                 // Envoyer une notification
//                 PushNotification.localNotification({
//                     title: "Nouveau rendez-vous",
//                     message: `Rendez-vous de ${fullName} au salon "${salonName}" le ${date} à ${time}.`,
//                 });

//                 Alert.alert("Succès", `Le rendez-vous de ${fullName} au salon "${salonName}" a été enregistré avec succès !`);
//                 // Réinitialiser le formulaire ou rediriger l'utilisateur si nécessaire
//             } else {
//                 Alert.alert("Erreur", "Une erreur s'est produite lors de l'envoi des données.");
//             }
//         } catch (error) {
//             Alert.alert("Erreur", error.message);
//         }
//     };

//     return (
//         <ScrollView style={styles.body}>
//             <View style={styles.container}>
//                 <Text style={styles.title}>Prendre un Rendez-Vous</Text>

//                 <TextInput
//                     style={styles.input}
//                     placeholder="Nom du salon"
//                     placeholderTextColor="white"
//                     value={salonName}
//                     onChangeText={setSalonName}
//                 />
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Nom complet"
//                     placeholderTextColor="white"
//                     value={fullName}
//                     onChangeText={setFullName}
//                 />
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Adresse e-mail"
//                     placeholderTextColor="white"
//                     value={email}
//                     onChangeText={setEmail}
//                     keyboardType="email-address"
//                 />
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Numéro de téléphone"
//                     placeholderTextColor="white"
//                     value={phone}
//                     onChangeText={setPhone}
//                     keyboardType="phone-pad"
//                 />

//                 <Text style={styles.label}>Service souhaité</Text>
//                 <Picker
//                     selectedValue={service}
//                     style={styles.picker}
//                     onValueChange={(itemValue) => setService(itemValue)}
//                 >
//                     <Picker.Item label="Sélectionnez un service" value="" />
//                     <Picker.Item label="Coupe de cheveux" value="haircut" />
//                     <Picker.Item label="Manucure" value="manicure" />
//                     <Picker.Item label="Massage" value="massage" />
//                     <Picker.Item label="Soins du visage" value="facial" />
//                     <Picker.Item label="Autre" value="other" />
//                 </Picker>

//                 <TextInput
//                     style={styles.input}
//                     placeholder="Date souhaitée (JJ/MM/AAAA)"
//                     placeholderTextColor="white"
//                     value={date}
//                     onChangeText={setDate}
//                 />
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Heure souhaitée (HH:MM)"
//                     placeholderTextColor="white"
//                     value={time}
//                     onChangeText={setTime}
//                 />

//                 <TextInput
//                     style={styles.textArea}
//                     placeholder="Commentaires ou demandes spéciales"
//                     placeholderTextColor="white"
//                     value={comments}
//                     onChangeText={setComments}
//                     multiline
//                 />

//                 <Text style={styles.label}>Méthode de paiement</Text>
//                 <Picker
//                     selectedValue={paymentMethod}
//                     style={styles.picker}
//                     onValueChange={(itemValue) => setPaymentMethod(itemValue)}
//                 >
//                     <Picker.Item label="Sélectionnez une méthode de paiement" value="" />
//                     <Picker.Item label="Carte de crédit" value="credit_card" />
//                     <Picker.Item label="PayPal" value="paypal" />
//                     <Picker.Item label="Virement bancaire" value="bank_transfer" />
//                 </Picker>

//                 <View style={styles.bt}>
//                     <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
//                         <Text style={styles.tbtn}>Prendre Rendez-Vous</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     body: {
//         display: 'flex',
//         backgroundColor: '#010813',
//         height: '100%',
//     },
//     container: {
//         display: 'flex',
//         top: 70,
//         width: 396,
//         height: '100%',
//         left: 12,
//     },
//     title: {
//         fontSize: 30,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         marginBottom: 20,
//         top: 100,
//         color: 'white',
//     },
//     input: {
//         height: 60,
//         borderColor: '#ccc',
//         borderWidth: 1,
//         marginBottom: 15,
//         paddingHorizontal: 10,
//         color: '#fff',
//     },
//     textArea: {
//         height: 120,
//         borderColor: '#ccc',
//         borderWidth: 1,
//         marginBottom: 15,
//         paddingHorizontal: 10,
//         textAlignVertical: 'top',
//     },
//     label: {
//         fontSize: 16,
//         marginBottom: 5,
//         color: 'white',
//     },
//     picker: {
//         height: 50,
//         width: '100%',
//         marginBottom: 15,
//         color: 'white',
//     },
//     bt: {
//         width: 396,
//         height: 120,
//         backgroundColor: '#fff',
//         borderRadius: 50,
//         top: 5,
//     },
//     btn: {
//         width: 300,
//         height: 56,
//         backgroundColor: '#010813',
//         left: 50,
//         top: 30,
//         borderRadius: 32,
//     },
//     tbtn: {
//         textAlign: 'center',
//         top: 15,
//         fontWeight: 'bold',
//         color: 'white',
//     },
// });

// export default AppointmentScreen;