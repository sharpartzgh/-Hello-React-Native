import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default function App() {
   const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Hello React Native!</Text>
      <Text style={{color: "white", fontSize: 20,}}>I'm new here </Text>
      <Text style={{color: "white", fontSize: 20,}}>Kindly be nice to me</Text>
      <Text style={styles.textStyle2}>
        { name ? `Hi ${name}, don't worry okay` : ' Whats your name ?'}

      </Text>
      <TextInput style={styles.textInputStyle}
        onChangeText={ text => setName(text)}
        secureTextEntry
      />
      <StatusBar style="auto" />

      <View style={styles.secondView}>
        <Text style={{color: "white", fontSize: 15,}} >© 2024 | Built by Frederick</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',

  },
  textStyle: {
    color: 'yellow',
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  secondView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 50,
    alignItems: 'center',
  },

  textStyle2: {
    color: 'yellow',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: 'contain',
    backgroundColor: 'yellow',
  },

  textInputStyle: {
    width: 300,
    fontSize: 20,
    padding: 8,
    backgroundColor: '#f5f5f5',
  }
});

