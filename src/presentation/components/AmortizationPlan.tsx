import { StyleSheet, Text, View } from 'react-native';
import { useProfileStore } from '../stores/profile-store';
import { useLoanCalculator } from '../hooks/useLoanCalculator';

export const AmortizationPlan = () => {

    // SE EXTRAE LA INFORMACION DESDE LA STORE
    const name = useProfileStore((state) => state.name);
    const email = useProfileStore((state) => state.email);
    const phone = useProfileStore((state) => state.phone);
    const direction = useProfileStore((state) => state.direction);

    const mount = useProfileStore((state) => state.mount);
    const interest = useProfileStore((state) => state.interest);
    const rate = useProfileStore((state) => state.rate);
    const refundDate = useProfileStore((state) => state.refundDate);

    const {quota, calculateQuota} = useLoanCalculator();


    // FUNCIONES ENCARGADAS DE DAR FORMATO A LOS DATOS QUE SERAN MOSTRADOS
    const formattedMount = mount.toLocaleString('es-ES', {
        style: 'currency',
        currency: 'USD',
    });
    const formattedInterest = `${interest.toFixed(2)}%`;
    const formattedRate = rate.toLocaleString('es-ES');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Plan de Pago</Text>

            <Text style={styles.subTitle}>Información Personal</Text>
            <View style={styles.body}>
                <Text style={styles.data}>{name}</Text>
                <Text style={styles.data}>{email}</Text>
                <Text style={styles.data}>{phone}</Text>
                <Text style={styles.data}>{direction}</Text>
            </View>

            <Text style={styles.subTitle}>Datos Relacionados a Prestamo</Text>
            <View style={styles.body}>
                <Text style={styles.data}>{formattedMount}</Text>
                <Text style={styles.data}>{formattedInterest}</Text>
                <Text style={styles.data}>{formattedRate} meses</Text>
                <Text style={styles.data}>{refundDate}</Text>
            </View>

            <Text style={styles.subTitle}>Plan Calculado</Text>
            <View style={styles.body}>
                <Text style={styles.data}>{quota}</Text>
            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

    },
    body: {
        alignContent: 'flex-end',
        marginEnd: 30,
        padding: 25,
        backgroundColor: '#cbcbcb',
        borderRadius: 13,
        width: '75%',
    },
    title: {
        fontSize: 30,
        alignContent: 'center',
        padding: 15,
        fontWeight: 'bold',
        alignItems: 'center',
        color: 'black',
    },
    subTitle: {
        fontSize: 21,
        alignContent: 'center',
        padding: 15,
        fontWeight: 'semibold',
        alignItems: 'center',
        color: 'black',
    },
    data: {
        fontSize: 17,
        alignContent: 'center',
        padding: 2,
        alignItems: 'center',
        color: 'gray',
    },
});