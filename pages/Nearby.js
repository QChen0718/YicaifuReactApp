import React from 'react';
import {
  View,
  Text,
} from 'react-native';

export default class NearbyScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>
                    附近
                </Text>
            </View>
        );
    }
}