import React ,{useState}from 'react';
import {StyleSheet,Text,TouchableOpacity,View} from 'react-native';
import { Octicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';

import Background from '../components/Background';
import TextInput from '../components/TextInput';
import {theme} from '../core/theme';


import firebase from 'firebase';
import Logo from '../components/Logo';





export default function LoginScreen(props){


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');




    const onLoginPressed =() =>{
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(email).toLowerCase()) && email != '' && email && password && password.length > 6) {
    
          firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
            console.log(user);
          })
          .catch((error) => {
            window.alert(error.message);
          });
    
        } else {
          window.alert('Please check the Email and Password')
      }
      }
    
      const forgotPassword = () => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (re.test(String(email).toLowerCase()) && email!='' && email){
            firebase.auth().sendPasswordResetEmail(email)
              .then((user) => {
                window.alert('Please check your inbox...')
              }).catch((error) => {
                window.alert(error.message)
              })
          } else {
            { email != '' ?
            window.alert('Your email badly formated')
              :
              window.alert('Please insert your email...');
            }
        }
      }
    




    return(
        <Background>
          <Logo/>

        

        {/* <Entypo name="email" size={24} color="black" style={{paddingTop:35}}/> */}

        <TextInput
        
        
        placeholder="email"
        returnKeyType="next"
        value={email}
        onChangeText={(value) => setEmail(value)}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"

        
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        
        >
          
          
        </TextInput>
         

        <TextInput

        
        placeholder="Password"
        returnKeyType="done"
        value={password}
        onChangeText={(value) => setPassword(value)}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry

        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"

      />


        <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => forgotPassword()}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
        </View>

      <View style={{borderRadius:10,borderColor:'black',borderWidth:1,width:'80%',marginVertical: 12,backgroundColor: theme.colors.surface,marginVertical: 10,
    paddingVertical: 5}}>
      <TouchableOpacity mode="contained" onPress={onLoginPressed}>

      
      <Text style={{fontWeight: 'bold',color:'black',textAlign:'center',
    fontSize: 20,
    lineHeight: 30}}>login</Text>
      

     </TouchableOpacity>
     </View>
      
      <View style={styles.row}>
        <Text style={{color:'white'}}>Don’t have an account? </Text>

        <TouchableOpacity onPress={() => props.navigation.replace('RegisterScreen')} >

          <Text style={styles.link}>Sign up</Text>

        </TouchableOpacity>
      </View>



        </Background>
          
    );
}



const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
   
  },
  row: {
    flexDirection: 'row',
    marginTop: 15,
  },
  forgot: {
    fontSize: 13,
     color: 'white',
  },
  link: {
    fontWeight: 'bold',
     color: 'white',
     fontSize:15,
     paddingLeft:10

  }
})
