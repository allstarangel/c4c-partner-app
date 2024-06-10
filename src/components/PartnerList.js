// PartnerList.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PartnerList = ({ route }) => {
  const navigation = useNavigation();
  const partners = route.params.partners;

  const renderPartnerItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('PartnerDetails', { partner: item })}>
      <View style={styles.partnerItem}>
        <Text style={styles.partnerName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={partners}
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