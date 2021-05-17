import React, { useState, useEffect} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, FlatList } from 'react-native';
import firebase from 'firebase';
import Background from '../components/Background';

export default function Dashboard(props){
    const gotoLogout = () => {
        firebase.auth().signOut();
    }

    const [users, setUsers] = useState([]);
    const [data, setData] = useState('');

    useEffect(() => {
        firebase.database().ref('users').on('value', snapshot => {
            let objects = snapshot.val()
            let arr = Object.entries(objects).map(([key, value]) => ({ key, ...value }));
            setUsers(arr);
        });
    }, []);

    useEffect(() => {
        let uid = firebase.auth().currentUser.uid;
        firebase.database().ref('users').child(uid).on('value', (snapshot) => {
            if (snapshot.val()) {
                setData(snapshot.val());
            }
        });
    }, []);

    const gotoChatPage = (users) => {
        props.navigation.navigate('ChatScreen', { userdata: users });
    }

    const renderItem = ({ item }) => (
        <View>
            {item.email != data.email ?
                <TouchableOpacity onPress={() => gotoChatPage(item)}>
                    <View style={{ backgroundColor: '#586FC9', height: 60, width: '100%', flexDirection: 'row', marginTop: 10, alignItems: 'center', padding: 5 }}>
                        <Image source={{ uri: item.profileimage }} style={{ width: 55, height: 55, borderRadius: 27, overflow: 'hidden' }}></Image>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 10 }}>{item.name}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                : null
            }
        </View>

    )



    return(
        <Background>

            <SafeAreaView style={{ width: '100%' }}>
               
            <View style={{ height: 40, width: '80%', backgroundColor: '#00ffff', borderRadius: 10, justifyContent: 'center', alignSelf: 'center'}}>
                <TouchableOpacity onPress={gotoLogout} style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 22, color:'black', fontWeight:'bold'}}>Logout</Text>
                </TouchableOpacity>
            </View>
               

                <View>
                    <View style={{ height: 100, marginTop: 10, alignItems: 'center', padding: 5 }}>
                        <Image source={{ uri: data.profileimage }} style={{ width: 55, height: 55, borderRadius: 27, overflow: 'hidden' }}></Image>
                       
                            <Text style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 10 }}>{data.name}</Text>
                      
                    </View>
                </View>

                <FlatList
                    data={users}
                    renderItem={renderItem}
                    keyExtractor={item => item.email}
                />
            </SafeAreaView>

        </Background>
    )

}

const styles = StyleSheet.create({
    text: {
      fontSize: 15,
      lineHeight: 21,
      textAlign: 'center',
      marginBottom: 12,
    },
  })