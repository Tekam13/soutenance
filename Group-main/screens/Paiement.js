import React, { useState } from 'react';
import { View, Button, Text, TextInput, Alert, ActivityIndicator } from 'react-native';
import axios from 'axios';

const PaymentScreen = () => {
    const [amount, setAmount] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [loading, setLoading] = useState(false);

    const initializeOrangePayment = async () => {
        setLoading(true);
        const url = 'https://api.orange.com/orange-money-webpay/dev/v1/webpayment';
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Remplacez par votre vrai jeton d'accès
        };

        const data = {
            merchant_key: 'YOUR_MERCHANT_KEY', // Remplacez par votre clé marchande
            currency: 'XAF',
            order_id: `ORDER-${Date.now()}`,
            amount: amount,
            return_url: 'https://your-app.com/return',
            cancel_url: 'https://your-app.com/cancel',
            notif_url: 'https://your-app.com/notify',
            lang: 'fr',
            reference: `REF-${Date.now()}`,
        };

        try {
            const response = await axios.post(url, data, { headers });
            setLoading(false);
            
            if (response.data.status === 'SUCCESS') {
                // Ici, vous devriez normalement rediriger l'utilisateur vers response.data.payment_url
                // Comme nous n'utilisons pas de WebView dans cette version simplifiée, 
                // nous allons simplement afficher un message
                Alert.alert('Succès', `Paiement initié. Veuillez compléter la transaction sur votre téléphone. ID de transaction : ${response.data.pay_token}`);
            } else {
                Alert.alert('Erreur', 'Échec de l\'initiation du paiement.');
            }
        } catch (error) {
            setLoading(false);
            console.error(error);
            Alert.alert('Erreur', 'Échec de la connexion à l\'API Orange Money.');
        }
    };

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={{ padding: 20 }}>
            <TextInput
                placeholder="Montant"
                keyboardType="numeric"
                value={amount}
                onChangeText={setAmount}
                style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
            />
            <TextInput
                placeholder="Numéro de téléphone"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
            />
            <Button title="Payer avec Orange Money" onPress={initializeOrangePayment} />
        </View>
    );
};

export default PaymentScreen;