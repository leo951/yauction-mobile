import React from 'react';
import { Card, Image, StyleSheet, Text, View, FlatList } from 'react-native';

import { AuthContext } from '../contexts/AuthContext';
import { HeaderIconButton } from '../components/HeaderIconButton';
import { useGetOne } from '../hooks/useGet';


export function DetailScreen({ route }) {
  const id = route.params.id;
  const product = useGetOne(`products/${id}`)
  return (
    <View style={styles.infoContainer}>
      <Image
        style={styles.thumb}
        source={product.image}
      />
      <Text style={styles.description}>{product.year}</Text>
      <Text style={styles.price}>{product.startingPrice} €</Text>
      <Text style={styles.info}>Date limite: {product.auctionEndDate}</Text>
      <Text style={styles.info}>Etat: {product.state} Km</Text>
      <Text style={styles.info}>Année: {product.year}</Text>
      <Text style={styles.info}>Kilomètres: {product.mileage} Km</Text>
      <Text style={styles.info}>Couleur: {product.color} Km</Text>
      <Text style={styles.info}>Energie: {product.energy} Km</Text>
      <Text style={styles.info}>Région: {product.region} Km</Text>
      <Text style={styles.info}>Siège: {product.seat} Km</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: '#fafafa',
  },
  productsListContainer: {
    backgroundColor: '#fafafa',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  card: {
    marginVertical: 20,
  },
  info: {
    marginHorizontal: 30,
    marginTop: 10
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