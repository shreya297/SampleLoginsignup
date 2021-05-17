import React, { useState } from 'react';
import {StyleSheet,Text,View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Logo from '../components/Logo';
import {theme} from '../core/theme';
import Background from '../components/Background';
import TextInput from '../components/TextInput';


import firebase from 'firebase';




export default function RegisterScreen(props){

const [name,setName]=useState('');
const [email,setEmail]=useState('');
const[password,setPassword]=useState('');
const[CPassword,setCPassword]=useState('');
const[phone,setPhone]=useState('');
// const[Category,setCategory]=useState('');



    
    
      const Register = () => {
        

        
        if(email=='' || email==null){
          window.alert('email can not be blank')
        }
        else if(name=='' || name==null){
          window.alert('name can not be blank ')
        }
        else if(password=='' || password==null)
        {
          window.alert('enter password')
        }
         else if(CPassword=='' || CPassword==null)
         {
           window.alert('confirm password')
         }
        else if(!(password==CPassword)){
           window.alert('enter correct password')
         }

        else if(phone=='' || phone==null)
        {
          window.alert('enter password')
        }
        else{

          firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((res) => {
              firebase.database().ref('users').child(res.user.uid).set(
                {
              name:name,
              email:email,
              phone:phone
              }
            )
            // console.log(user);
            
          })
          .catch((error) => {
            // var errorCode = error.code;
            // var errorMessage = error.message;
            window.alert(error.code + ": " + error.message);
            // ..
          });

        }
      }
    



    return(
        
            <Background>
              <TouchableOpacity onPress={()=>props.navigation.goBack} />
              <Logo />
              {/* <Header>Create Account</Header> */}
              <TextInput
                placeholder="Name"
                returnKeyType="next"
                value={name}
                onChangeText={(value) => setName(value)}
                error={!!name.error}
                errorText={name.error}
              />
              <TextInput
                placeholder="Email"
                returnKeyType="next"
                value={email}
                onChangeText={(value) => setEmail(value)}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
              />
              <TextInput
                placeholder="Password"
                returnKeyType="done"
                value={password}
                onChangeText={(value) => setPassword(value)}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
              />

              <TextInput
                placeholder="Confirm Password"
                returnKeyType="done"
                value={CPassword}
                onChangeText={(value) => setCPassword(value)}
                error={!!CPassword.error}
                errorText={CPassword.error}
                secureTextEntry
              />

              <TextInput
                placeholder="enter your phone no"
                returnKeyType="done"
                value={phone}
                onChangeText={(value) => setPhone(value)}
                error={!!phone.error}
                errorText={phone.error}
                secureTextEntry
              />


<View style={{borderRadius:10,borderColor:'black',borderWidth:1,width:'80%',marginVertical: 12,backgroundColor: theme.colors.surface,marginVertical: 10,
    paddingVertical: 5}}>

              <TouchableOpacity 
              mode="contained"
              onPress={Register}>
                
                <Text style={{fontWeight: 'bold',color:'black',textAlign:'center',
    fontSize: 20,
    lineHeight: 30}}>Sign Up</Text>
                
              </TouchableOpacity>
</View>

              <View style={styles.row}>
                <Text style={{color:'white'}}>Already have an account? </Text>

                <TouchableOpacity onPress={() => props.navigation.replace('LoginScreen')}>
                  <Text style={styles.link}>Login</Text>
                </TouchableOpacity>

              </View>


            </Background>
            
          )
        }
        
        const styles = StyleSheet.create({
          row: {
            flexDirection: 'row',
            marginTop: 4,
          },
          link: {
            fontWeight: 'bold',
            color: 'white',
            fontSize:15,
            paddingLeft:10
       
          },
        })
        
