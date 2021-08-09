import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, AsyncStorage} from 'react-native';

const Login = props => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    getData();
    },[]);

  const auth = () => {
    fetch('https://livevacapp.pythonanywhere.com/auth/',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'},
      body: JSON.stringify({username: username, password: password})
    })
    .then(res => res.json())
    .then(resJson => {console.log("done");
      saveData(resJson.token);
      props.navigation.navigate("Home");})
    .catch(err => console.log(err));
  };

  const saveData = async (token) => {
    await AsyncStorage.setItem("App_Token", token);
  };

  const getData = async () => {
    const token = await AsyncStorage.getItem("App_Token")
    if (token) props.navigation.navigate("Home")
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 35, fontWeight: "bold", color: "green"}}>LiveVac</Text>
        <Text style={{fontSize: 25, fontWeight: "bold"}}>Login</Text>
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
          <Text style={{fontSize: 20, color: "white"}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
                    onPress={() => {props.navigation.navigate("Register");}}>
          <Text style={{fontSize: 20, color: "green", paddingVertical:15}}>Don't have an account? Register here</Text>
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

export default Login;
