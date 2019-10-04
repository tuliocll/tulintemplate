import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { StyleSheet, View, Text } from 'react-native';
import { Container } from './styles';

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionSubtitle: {
        fontSize: 19,
        marginTop: 10,
        fontWeight: '200',
        color: Colors.dark,
    },
});

console.tron.log('Tulin Template V1');

export default function Main() {
    return (
        <Container>
            <Text style={styles.sectionTitle}>Tulin Template V1</Text>
            <Text style={styles.sectionSubtitle}>
                Template para React Native
            </Text>
        </Container>
    );
}

Main.navigationOptions = {
    title: 'Tulin Temaplete V1',
};
