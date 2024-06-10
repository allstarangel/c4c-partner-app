// AddPartnerForm.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const AddPartnerForm = ({ onAddPartner }) => {
  const navigation = useNavigation();
  const { onAddPartner} = route.params;


  const [name, setName] = useState('');
  const [logo, setLogo] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    const newPartner = {
      name,
      logo,
      description,
      isActive: true,
    };
    onAddPartner(newPartner);
    // Reset form fields and navigate to the partner list
    setName('');
    setLogo('');
    setDescription('');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Partner Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Logo URL"
        value={logo}
        onChangeText={setLogo}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <Button title="Add Partner" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
});

export default AddPartnerForm;