import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useProfileStore } from '../stores/profile-store';
import { useNavigation } from '@react-navigation/native';
import { useLoanCalculator } from '../hooks/useLoanCalculator';

export const LoanForm = () => {
    const { name, email, phone, direction, mount, interest, rate, refundDate, changeProfile } = useProfileStore();

    const [localName, setLocalName] = useState(name);
    const [localEmail, setLocalEmail] = useState(email);
    const [localPhone, setLocalPhone] = useState(phone);
    const [localDirection, setLocalDirection] = useState(direction);
    const [localMount, setLocalMount] = useState(mount);
    const [localInterest, setLocalInterest] = useState(interest);
    const [localRate, setLocalRate] = useState(rate);
    const [localRefundDate, setLocalRefundDate] = useState(refundDate);

    const navigation = useNavigation();

    const {quota, calculateQuota} = useLoanCalculator();

    const handleSaveProfile = () => {
        changeProfile(localName, localEmail, localPhone, localDirection, localMount, localInterest, localRate, localRefundDate);
        
        calculateQuota(interest, mount, rate);

        console.log(quota.toFixed(2).toString());
        
    };

    const handleNumericInput = (setter: React.Dispatch<React.SetStateAction<number>>, value: string) => {
        const numericValue = Number(value);
        if (!isNaN(numericValue)) {
            setter(numericValue);
        }
    };


    return (
        <View style={styles.container}>

            <Text style={styles.title}>Préstamos Personales</Text>

            <Text style={styles.subTitle}>Datos Personales</Text>

            {/* FORMULARIO DE DATOS PERSONALES */}
            <View>
                <Text style={styles.inputTitle}>Nombre Completo</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese su nombre"
                    placeholderTextColor={'#626262'}
                    value={localName}
                    onChangeText={setLocalName}
                />
            </View>

            <View>
                <Text style={styles.inputTitle}>Correo</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese su dirección de correo electrónico"
                    placeholderTextColor={'#626262'}
                    value={localEmail}
                    onChangeText={setLocalEmail}
                />
            </View>

            <View>
                <Text style={styles.inputTitle}>Teléfono</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese su teléfono"
                    placeholderTextColor={'#626262'}
                    value={localPhone}
                    onChangeText={setLocalPhone}
                />
            </View>

            <View>
                <Text style={styles.inputTitle}>Dirección</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese su dirección"
                    placeholderTextColor={'#626262'}
                    value={localDirection}
                    onChangeText={setLocalDirection}
                />
            </View>

            {/* FORMULARIO DE DATOS PRESTAMO */}
            <Text style={styles.subTitle}>Datos de Prestamo</Text>
            <View>
                <Text style={styles.inputTitle}>Monto</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Monto"
                    placeholderTextColor={'#626262'}
                    value={String(localMount)}
                    onChangeText={(value) => handleNumericInput(setLocalMount, value)}
                    keyboardType="numeric"
                />
            </View>

            <View>
                <Text style={styles.inputTitle}>Tasa de interés</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Tasa de interés"
                    placeholderTextColor={'#626262'}
                    value={String(localInterest)}
                    onChangeText={(value) => handleNumericInput(setLocalInterest, value)}
                    keyboardType="numeric"

                />
            </View>

            <View>
                <Text style={styles.inputTitle}>Plazos</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Plazos"
                    placeholderTextColor={'#626262'}
                    value={String(localRate)}
                    onChangeText={(value) => handleNumericInput(setLocalRate, value)}
                    keyboardType="numeric"
                />
            </View>

            <View>
                <Text style={styles.inputTitle}>Fecha de desembolso</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Fecha de desembolso"
                    placeholderTextColor={'#626262'}
                    value={localRefundDate}
                    onChangeText={setLocalRefundDate}
                />
            </View>

            <Pressable
                style={styles.button}
                onPress={handleSaveProfile}
            >
                <Text style={styles.textButton}>Enviar y Calcular</Text>
            </Pressable>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    input: {

        width: 250,
        height: 35,
        borderColor: '#c0c0c0',
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 7,
        fontSize: 12,
        color: 'black',
    },
    title: {
        fontSize: 25,
        alignContent: 'center',
        padding: 10,
        fontWeight: 'bold',
        alignItems: 'center',
        color: 'black',
    },
    subTitle: {
        fontSize: 18,
        alignContent: 'center',
        padding: 10,
        fontWeight: 'bold',
        alignItems: 'center',
        color: 'black',
    },
    inputTitle: {
        fontSize: 13,
        alignContent: 'center',
        padding: 10,
        fontWeight: 'medium',
        alignItems: 'center',
        color: 'black',
    },
    button: {
        backgroundColor: '#4da0f9',
        padding: 3,
        paddingHorizontal: 10,
        borderRadius: 8,
        marginTop: 20,
        width: 140,
        height: 45,
    },
    textButton: {
        fontSize: 13,
        alignContent: 'center',
        padding: 11,
        fontWeight: 'bold',
        alignItems: 'center',
        color: 'white',
    },
});