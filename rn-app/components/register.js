import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, AsyncStorage} from 'react-native';

const Register = props => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  /* useEffect(() => {
    saveData();
    },[]); */

  const auth = () => {
    fetch('https://livevacapp.pythonanywhere.com/api/users/',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'},
      body: JSON.stringify({username: username, password: password})
    })
    .then(res => res.json())
    .then(resJson => {console.log("done");
      saveData(resJson.id);
      props.navigation.navigate("Login");})
    .catch(err => console.log(err));
  };

  const saveData = async (userid) => {
    await AsyncStorage.setItem("userid", userid.toString());
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 35, fontWeight: "bold", color: "green"}}>LiveVac</Text>
        <Text style={{fontSize: 25, fontWeight: "bold"}}>Register</Text>
        <Text style={{fontSize: 20}}>Username:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          onChangeText={text => setUsername(text)}
        />
        <Text style={{fontSize: 20}}>Password:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Enter your password"
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity
                    style={styles.button}
                    onPress={() => auth()}>
          <Text style={{fontSize: 20, color: "white"}}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
                    onPress={() => {props.navigation.navigate("Login");}}>
          <Text style={{fontSize: 20, color: "green", paddingVertical:15}}>Already have an account? Login here</Text>
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

      input: {
        backgroundColor: '#fff',
        margin: 15,
        padding: 15,
        borderWidth: 1,
        borderColor: "#20232a",
        borderRadius: 10,
        width: "75%"
      },

      button:{
        alignItems: "center",
        backgroundColor: "green",
        padding: 10,
        margin: 10,
        borderColor: 'black',
        borderRadius:6,
        borderWidth: 2,
    }
});

export default Register;
