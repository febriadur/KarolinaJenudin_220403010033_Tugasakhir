import React, { useState } from 'react';
import { Text, Image, View, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';

const products = [
  { id: 1, name: 'Kopi 1', price: '670', imageUri: 'https://tip.unmuhjember.ac.id/images/beritakopi.jpg' },
  { id: 2, name: 'Kopi 2', price: '150', imageUri: 'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/01/2023/11/09/side-view-coffee-white-cup-with-coffee-beans-isolated-white-wooden-background-2775040649.jpg' },
  { id: 3, name: 'Kopi 3', price: '400', imageUri: 'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/03/30045227/Minum-Kopi-Tanpa-Gula-Mampu-Turunkan-Berat-Badan.jpg.webp' },
  { id: 4, name: 'Kopi 4', price: '100', imageUri: 'https://kailipost.com/wp-content/uploads/2023/11/pakar-nutrisi-ingatkan-3-orang-ini-tak-dianjurkan-minum-kopi-siapa-saja-un6QkIjvnV.jpg' },
  { id: 5, name: 'Kopi 5', price: '200', imageUri: 'https://tip.unmuhjember.ac.id/images/beritakopi.jpg' },
  { id: 6, name: 'Kopi 6', price: '100', imageUri: 'https://img.okezone.com/content/2021/02/11/481/2360658/ini-4-jenis-kopi-yang-miliki-manfaat-tersembunyi-untuk-kesehatan-kUClm1l2dw.jpg' },
  { id: 7, name: 'Kopi 7', price: '30', imageUri: 'https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG' },
];

const ProdukScreen = () => {
  const [cartItems, setCartItems] = useState([]);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.imageUri }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>Harga: Rp {item.price}</Text>
      <TouchableOpacity style={styles.button} onPress={() => addToCart(item)}>
        <Text style={styles.buttonText}>Tambahkan ke Troli</Text>
      </TouchableOpacity>
    </View>
  );

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
    Alert.alert('Sukses', ${product.name} ditambahkan ke troli!);
  };

  const checkout = () => {
    Alert.alert('Sukses', 'Pesanan Anda berhasil ditempatkan!');
    setCartItems([]); // Clear the cart
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Warkop Karolin</Text>
      <Text style={styles.subtitle}>Produk</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContainer}
      />
      <Text style={styles.cartTitle}>Troli:</Text>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text style={styles.cartItemName}>{item.name}</Text>
            <Text style={styles.cartItemPrice}>Rp {item.price}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.cartListContainer}
      />
      <TouchableOpacity style={styles.checkoutButton} onPress={checkout}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#666',
  },
  flatListContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: '#333',
  },
  price: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    color: '#666',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  cartListContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    maxHeight: 150,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 5,
  },
  cartItemName: {
    fontSize: 16,
    color: '#333',
  },
  cartItemPrice: {
    fontSize: 16,
    color: '#666',
  },
  checkoutButton: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 10,
    marginTop: 20,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProdukScreen;
