import React from 'react';
import {View,Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

const PartnerList = ({ partners, onSelectPartner})=> {
    const renterPartnerItem = ({ item }) => (
        <TouchableOpacity onprogress={() => onSelectPartner(item)}>
            <View style={StyleSheet.partnerItem}>
                <Text style={StyleSheet.partnerName}>{item.name}</Text>
                </View> 
        </TouchableOpacity>
    );

    return(
        <View style={StyleSheet.container}>
            <FlatList
                data={partner}
                renderItem={renderPartnerItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    partnerItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    partnerName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default PartnerList;