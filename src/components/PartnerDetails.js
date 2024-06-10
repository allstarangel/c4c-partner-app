// PartnerDetails.js
import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

const PartnerDetails = ({ partner}) => {
    return (
        <View style={StyleSheet.container}>
            <Image source={{ uri: partner.logo}} style={StyleSheet.logo}/>
            <Text style={StyleSheet.name}>{partner.name}</Text>
            <Text style={StyleSheet.description}>{partner.description}</Text>
            <Text style={StyleSheet.status}>
                status: {partner.isActive ? 'Active' : 'Inactive'}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 10,
    },
    status: {
        fontSize: 16,
        color: '#888',
    },
});

export default PartnerDetails;