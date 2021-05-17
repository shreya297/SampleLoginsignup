import React from 'react';
import { View, Text, Image , TouchableOpacity} from 'react-native';
import Background from '../components/Background';

export default function ChatScreen(props) {

    const user = props.route.params.userdata;
    return (
        <Background>
             <TouchableOpacity onPress={()=>props.navigation.goBack()} >
                 <View>
                     <Text> Back</Text>
                 </View>
                 </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                <Image source={{ uri: user.profileimage }} style={{ width: 55, height: 55, borderRadius: 27, overflow: 'hidden' }}></Image>
                <Text style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 10 }}>{user.name}</Text>
            </View>
        </Background>
    )
}