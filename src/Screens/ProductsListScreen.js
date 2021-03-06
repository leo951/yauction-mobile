import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

import {Product} from '../components/Product'
import { AuthContext } from '../contexts/AuthContext';
import {HeaderIconButton} from '../components/HeaderIconButton';
import { useGet } from '../hooks/useGet';


export function ProductsListScreen({route, navigation}) {

  // const {logout} = React.useContext(AuthContext);
  // React.useLayoutEffect( () => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <HeaderIconButton
  //       name={'log-out'}
  //       onPress={() => {
  //         logout();
  //       }}
  //       />
  //     ),
  //   })
  // }, [navigation, logout])
  const vehicle = route.params.vehicle;
  const products = useGet(`products/vehicle/${vehicle}`)

  function renderProduct({item: product}) {
    return (
      <Product product={product} navigation={navigation}/>
    );
  }

  return (
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      data={products}
      renderItem={renderProduct}
      keyExtractor={product => product.id}
    />
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
});