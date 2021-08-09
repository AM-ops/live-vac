import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity, AsyncStorage} from "react-native";

const AnimalForm = props => {
    //const [modalOpen, setModalOpen] = useState(false);
    const [numbValue, setNumbValue] = useState('');
    const [categoryValue, setCategoryValue] = useState('');
    const [breedValue, setBreedValue] = useState('');
    const [dateValue, setDateValue] = useState('');
    const [intervalValue, setIntervalValue] = useState('');
  
  
    const numbChangeHandler = text => {
      // you could add validation
      setNumbValue(text);
    };

    const categoryChangeHandler = text => {
        // you could add validation
        setCategoryValue(text);
    };

    const breedChangeHandler = text => {
        // you could add validation
        setBreedValue(text);
    };

    const dateChangeHandler = text => {
        // you could add validation
        setDateValue(text);
    };

    const intervalChangeHandler = text => {
        // you could add validation
        setIntervalValue(text);
    };

    let token = null;

 
    const saveAnimalHandler = async () => {
        token = await AsyncStorage.getItem("App_Token")
        userid = await AsyncStorage.getItem("userid")
        await fetch('https://livevacapp.pythonanywhere.com/api/animals/',{
                    method:'POST',
                    headers:{
                            'Authorization': `Token ${token}`,
                            'Content-Type': 'application/json'},
                    body: JSON.stringify({user: userid, animalid: numbValue, category: categoryValue, breed: breedValue, vacdate:dateValue, interval: intervalValue})
                })
        .then(res => res.json())
        .then(resJson => {console.log("done");
            props.navigation.goBack();})
        .catch(err => console.log(err));
    };
  
    return (
      <ScrollView>
        <View style={styles.form}>
          <Text style={styles.label}>Farm Livestock ID:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={numbChangeHandler}
            value={numbValue}
            placeholder={"eg. SM102"}
          />

         <Text style={styles.label}>Livestock category:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={categoryChangeHandler}
            value={categoryValue}
            placeholder={"eg. Sheep"}
          />

         <Text style={styles.label}>Breed:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={breedChangeHandler}
            value={breedValue}
            placeholder={"eg. Merino"}
          />

         <Text style={styles.label}>Initial Vaccination Date:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={dateChangeHandler}
            value={dateValue}
            placeholder={"eg. 2021-01-15"}
          />

         <Text style={styles.label}>Interval for next Vaccination:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={intervalChangeHandler}
            value={intervalValue}
            placeholder={"eg. 65 days"}
            keyboardType="numeric"
          />
          
            <TouchableOpacity onPress={saveAnimalHandler} 
                                          style={{margin:10,
                                                padding:5, 
                                                backgroundColor: 'green', 
                                                borderWidth:1, 
                                                borderRadius:6, 
                                                alignItems: "center",}}>
                            <Text style={{fontSize: 15, color:'white'}}>Add Event</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };

const styles = StyleSheet.create({
  inputs:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,

  },

  form: {
    margin: 30
  },

  label: {
    fontSize: 18,
    marginBottom: 15
  },

  textInput:{
      padding: 15,
      margin: 15,
      borderRadius: 6,
      borderWidth:1,
      borderColor: '#ddd',
      shadowColor: 'black',
      shadowOpacity:0.25,
      shadowRadius:6
  },

  modal:{
    marginTop: 30
  }
});

export default AnimalForm;