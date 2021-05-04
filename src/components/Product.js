
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Card } from './Card';
import { NavigationContainer } from '@react-navigation/native';


const RootStack = createStackNavigator();

export function Product({ product, navigation }) {
  
  return (
    <Card style={styles.card} onPress={() => navigation.navigate('Detail', {
      id: product._id
    })} >
      <Image
        style={styles.thumb}
        source={product.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.brand.title}</Text>
        <Text style={styles.price}>{product.model.title}</Text>
        <Text style={styles.description}>{product.year}</Text>
        <Text style={styles.price}>{product.startingPrice} €</Text>
        <Text style={styles.description}>Fin de l'enchère : {product.auctionEndDate.substring(0, 10)}</Text>
        <Text style={styles.description}>Nombre d'offre en cours : {product.offers.length}</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 20,
  },
  thumb: {
    height: 260,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
  },
});