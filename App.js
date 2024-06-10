// App.js
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PartnerList from './components/PartnerList';
import PartnerDetails from './components/PartnerDetails';
import AddPartnerForm from './components/AddPartnerForm';

const Stack = createStackNavigator();

const App = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    try {
      const response = await fetch('https://your-api-url.com/partners');
      const data = await response.json();
      setPartners(data);
    } catch (error) {
      console.error('Error fetching partners:', error);
    }
  };

  const handleAddPartner = (newPartner) => {
    // Logic to add new partner to the partners array
    setPartners([...partners, newPartner]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PartnerList"
          component={PartnerList}
          options={{ title: 'Partners' }}
          initialParams={{ partners }}
        />
        <Stack.Screen
          name="PartnerDetails"
          component={PartnerDetails}
          options={({ route }) => ({ title: route.params.partner.name })}
        />
        <Stack.Screen
          name="AddPartner"
          component={AddPartnerForm}
          options={{ title: 'Add Partner' }}
          initialParams={{ onAddPartner: handleAddPartner }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;