import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigator from './src/navigation/MainNavigator';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBLHY6rcNV9YUJGUQHB9Nk-bjsvr_Ow4cI",
  authDomain: "sample-login-8609d.firebaseapp.com",
  projectId: "sample-login-8609d",
  storageBucket: "sample-login-8609d.appspot.com",
  messagingSenderId: "1054418140877",
  appId: "1:1054418140877:web:bd13b4087cdeaaad6ef384",
  measurementId: "G-PW4CNLT73Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
  <MainNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
