import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { LoanForm } from '../../components/LoanForm';

export const HomeScreen = () => {
    return (
        <ScrollView>
            <LoanForm />
        </ScrollView>
    );
};
