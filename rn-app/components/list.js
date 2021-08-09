import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, FlatList, AsyncStorage} from 'react-native';

const AnimalList = props => {

  const [animals, setAnimals] = useState([]);

  let token = null;

  const getData = async () => {
    token = await AsyncStorage.getItem("App_Token")
    if (token) {
      getAnimals();
    }
    else {
      props.navigation.navigate("Login")
    }
  };

  const getAnimals = () => {
    fetch('https://livevacapp.pythonanywhere.com/api/animals/',{
      method:'GET',
      headers:{
        'Authorization': `Token ${token}`}
    })
    .then(res => res.json())
    .then(resJson => setAnimals(resJson))
    .catch(err => console.log(err))
  };

  useEffect(() => {
    getData();
  },[]);


  return (
    <View>
      <FlatList 
      data={animals}
      renderItem={
        ({item}) => (
          <View style={styles.listItem}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Farm Livestock ID: {item.animalid}</Text>
          <Text style={{ fontSize: 20 }}>Livestock category: {item.category}</Text>
          <Text style={{ fontSize: 20 }}>Breed: {item.breed}</Text>
          </View>
        )
      }
      keyExtractor={(item, index) => index.toString()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  screen:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},

listItem: {
    flex: 1,
    margin: 20,
    padding:10,
    height:135,
    borderWidth: 2,
    borderColor: "#20232a",
    borderRadius: 10,
},
});

export default AnimalList;
