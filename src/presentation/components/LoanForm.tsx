import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export const LoanForm = () => {
    const [personalInfo, setPersonalInfo] = useState([]);
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
                />
            </View>

            <View>
                <Text style={styles.inputTitle}>Correo</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese su dirección de correo electrónico"
                    placeholderTextColor={'#626262'}

                />
            </View>

            <View>
                <Text style={styles.inputTitle}>Teléfono</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese su teléfono"
                    placeholderTextColor={'#626262'}

                />
            </View>

            <View>
                <Text style={styles.inputTitle}>Dirección</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese su dirección"
                    placeholderTextColor={'#626262'}

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

                />
            </View>

            <View>
                <Text style={styles.inputTitle}>Tasa de interés</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Tasa de interés"
                    placeholderTextColor={'#626262'}

                />
            </View>

            <View>
                <Text style={styles.inputTitle}>Plazos</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Plazos"
                    placeholderTextColor={'#626262'}

                />
            </View>

            <View>
                <Text style={styles.inputTitle}>Fecha de desembolso</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Fecha de desembolso"
                    placeholderTextColor={'#626262'}

                />
            </View>

            <Pressable
                style={styles.button}
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