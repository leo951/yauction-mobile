import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function OffersCurrentScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Je suis les offres en cours</Text>
      <Button
        title="Allez vers offres finis"
        onPress={() => navigation.navigate('Offres terminées')}
      />
      <Button
        title="Allez vers offres Perdus"
        onPress={() => navigation.navigate('Offres Perdu')}
      />
    </View>
  );
}

function OffersClosedScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Je suis les offres finies</Text>
      <Button
        title="Allez vers les offres en cours"
        onPress={() => navigation.navigate('Offres en cours')}
      />
      <Button
        title="Allez vers les offres Perdues"
        onPress={() => navigation.navigate('Offres Perdu')}
      />
      <Button title="Revenir en arrière" onPress={() => navigation.goBack()} />
    </View>
  );
}

function OffersLostScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Je suis les offres perdus</Text>
      <Button
        title="Je suis les offres en cours"
        onPress={() => navigation.navigate('Offres en cours')}
      />
      <Button
        title="Je suis les offres terminées"
        onPress={() => navigation.navigate('Offres terminées')}
      />
      <Button title="Revenir en arrière" onPress={() => navigation.goBack()} />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Offres en cours" component={OffersCurrentScreen} />
      <Stack.Screen name="Offres terminées" component={OffersClosedScreen} />
      <Stack.Screen name="Offres Perdu" component={OffersLostScreen} />
    </Stack.Navigator>
  );
}

export function OffersScreen() {
  return (
    <NavigationContainer independent={true}>
      <MyStack />
    </NavigationContainer>
  );
}