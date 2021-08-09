//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Home = props => {

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50, fontWeight: "bold", color: "green" }}>Welcome</Text>
      <Text style={{ fontSize: 50, fontWeight: "bold", color: "green" }}>to</Text>
      <Text style={{ fontSize: 50, fontWeight: "bold", color: "green" }}>LiveVac</Text>
      <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        props.navigation.navigate({
                        routeName: 'AnimalList'
                        })
                    }}>
                    <Text style={{fontSize: 20, color: "white"}}>My Herd</Text>
        </TouchableOpacity>
        <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        props.navigation.navigate({
                        routeName: 'Events'
                        })
                    }}>
                    <Text style={{fontSize: 20, color: "white"}}>My Events</Text>
        </TouchableOpacity>
        <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        props.navigation.navigate({
                        routeName: 'AnimalForm'
                        })
                    }}>
                    <Text style={{fontSize: 20, color: "white"}}>Add a Vaccination Event</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    padding: 15,
    width: '100%'
  },

  button:{
    alignItems: "center",
    backgroundColor: "green",
    padding: 20,
    margin: 20,
    borderColor: 'black',
    borderRadius:6,
    borderWidth: 2
}

});

export default Home;
