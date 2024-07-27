import { AmortizationPlan } from '../../components/AmortizationPlan';
import { ScrollView } from 'react-native-gesture-handler';

export const DetailsScreen = () => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#e3e3e3' }}>
            <AmortizationPlan />
        </ScrollView>
    );
};
