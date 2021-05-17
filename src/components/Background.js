import React from 'react';
import {ImageBackground,StyleSheet,KeyboardAvoidingView,Platform} from 'react-native';

import {theme} from '../core/theme';

export default function Background(props){
    return(
        <ImageBackground source={require('/MyProjects/Sampleloginown/assets/pic2.jpg')}

        resizeMode="cover"
        style={styles.background}
        blurRadius={ Platform.OS == 'ios' ? 10 : 3} 
        // blurRadius={3}

        >

        <KeyboardAvoidingView style={styles.container} behavior="padding">
        {props.children}
        </KeyboardAvoidingView>

        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    background: {
      position:'relative',
      flex: 1,
      width: '100%',
      

    },
    container: {
      flex: 1,
      padding: 15,
      width: '95%',
      maxWidth: 340,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
  