
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, ScrollView} from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Assurez-vous que c'est le bon import
import axios from 'axios';
import { TouchableOpacity } from 'react-native';

const AppointmentScreen = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [salonName, setSalonName] = useState('');
    const [service, setService] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [comments, setComments] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    const handleSubmit = async () => {
        if (!fullName || !email || !phone || !salonName || !service || !date || !time || !paymentMethod) {
            Alert.alert("Erreur", "Veuillez remplir tous les champs obligatoires.");
            return;
        }

        const appointmentData = {
            data: {
                nom: fullName,
                email: email,
                telephone: phone,
                nomSalon: salonName,
                service: service,
                date: date,
                heure: time,
                commentaire: comments,
                methodeDePaiement: paymentMethod,
            },
        };

        try {
            const response = await axios.post('http://192.168.126.1:1337/api/rendez-vous', appointmentData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200 || response.status === 201) {
                Alert.alert("Succès", `Le rendez-vous de ${fullName} au salon ${salonName} a été enregistré avec succès !`);
            } else {
                Alert.alert("Erreur", "Une erreur s'est produite lors de l'envoi des données.");
            }
        } catch (error) {
            Alert.alert("Erreur", error.message);
        }
    };

    return (
        <View style={styles.body}>
            <Text style={styles.title}>Prendre un Rendez-Vous</Text>
            <View style={styles.container}>
                
                <ScrollView
                    contentContainerStyle={styles.contentContainer}
                    style={styles.container}
                >
                    <TextInput style={styles.input} placeholder="Nom du salon" placeholderTextColor="white" value={salonName} onChangeText={setSalonName} />
                    <TextInput style={styles.input} placeholder="Nom complet" placeholderTextColor="white" value={fullName} onChangeText={setFullName} />
                    <TextInput style={styles.input} placeholder="Adresse e-mail" placeholderTextColor="white" value={email} onChangeText={setEmail} keyboardType="email-address" />
                    <TextInput style={styles.input} placeholder="Numéro de téléphone" placeholderTextColor="white" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
                    <Text style={styles.label}>Service souhaité</Text>
                    <Picker selectedValue={service} style={styles.picker} onValueChange={(itemValue) => setService(itemValue)}>
                        <Picker.Item label="Sélectionnez un service" value="" />
                        <Picker.Item label="Coupe de cheveux" value="haircut" />
                        <Picker.Item label="Manucure" value="manicure" />
                        <Picker.Item label="Massage" value="massage" />
                        <Picker.Item label="Soins du visage" value="facial" />
                        <Picker.Item label="Autre" value="other" />
                    </Picker>
                    <TextInput style={styles.input} placeholder="Date souhaitée (JJ/MM/AAAA)" placeholderTextColor="white" value={date} onChangeText={setDate} />
                    <TextInput style={styles.input} placeholder="Heure souhaitée (HH:MM)" placeholderTextColor="white" value={time} onChangeText={setTime} />
                    <TextInput style={styles.textArea} placeholder="Commentaires ou demandes spéciales" placeholderTextColor="white" value={comments} onChangeText={setComments} multiline />
                    <Text style={styles.label}>Méthode de paiement</Text>
                    <Picker selectedValue={paymentMethod} style={styles.picker} onValueChange={(itemValue) => setPaymentMethod(itemValue)}>
                        <Picker.Item label="Sélectionnez une méthode de paiement" value="" />
                        <Picker.Item label="Carte de crédit" value="credit_card" />
                        <Picker.Item label="PayPal" value="paypal" />
                        <Picker.Item label="Virement bancaire" value="bank_transfer" />
                    </Picker>
                    <View style={styles.bt}>
                        <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                            <Text style={styles.tbtn}>Prendre Rendez-Vous</Text>
                        </TouchableOpacity>
                    </View>
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
    container: {
        display: 'flex',
        top: 50,
        width: 396,
        left: 14,
        height: 730
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        paddingTop: 30,
        color: 'white',
        top: 60
    },
    input: {
        height: 60,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        color: '#fff',
    },
    textArea: {
        height: 120,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        textAlignVertical: 'top',
        color: '#fff'
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: 'white',
    },
    picker: {
        height: 50,
        width: '100%',
        marginBottom: 15,
        color: 'white',
    },
    bt: {
        width: 396,
        height: 120,
        backgroundColor: '#fff',
        borderRadius: 50,
        top: 5,
    },
    btn: {
        width: 300,
        height: 56,
        backgroundColor: '#010813',
        left: 50,
        top: 30,
        borderRadius: 32,
    },
    tbtn: {
        textAlign: 'center',
        top: 15,
        fontWeight: 'bold',
        color: 'white',
    },
    contentContainer: {
        paddingVertical: 20,
        //height: '100%'
    },
});

export default AppointmentScreen;




// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, Alert, ScrollView } from 'react-native';
// import { Picker } from '@react-native-picker/picker'; // Mise à jour de l'import
// import axios from 'axios';
// import { TouchableOpacity } from 'react-native';

// // Configuration des notifications
// import PushNotification from 'react-native-push-notification';

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
//     const [salonName, setSalonName] = useState(''); // État pour le nom du salon
//     const [service, setService] = useState('');
//     const [date, setDate] = useState('');
//     const [time, setTime] = useState('');
//     const [comments, setComments] = useState('');
//     const [paymentMethod, setPaymentMethod] = useState('');

//     const handleSubmit = async () => {
//         if (!fullName || !email || !phone || !salonName || !service || !date || !time || !paymentMethod) {
//             Alert.alert("Erreur", "Veuillez remplir tous les champs obligatoires.");
//             return;
//         }

//         // Préparez les données à envoyer
//         const appointmentData = {
//             data: {
//                 nom: fullName,
//                 email: email,
//                 telephone: phone,
//                 nomSalon: salonName, // Ajout du nom du salon
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


