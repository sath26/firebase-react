import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import {Input} from './components/Input';
export default class App extends React.Component {
  componentWillMount(){
    const firebaseConfig = {
      apiKey: 'AIzaSyCCDYxec6z8FpowZEcSx41NKOvnDgZP_dc',
      authDomain:'drrut-147812.firebaseapp.com ',
    }
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
