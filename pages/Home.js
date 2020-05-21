import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

export default class HomeScreen extends React.Component{
    
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>
                    首页
                </Text>
            </View>
        );
    }
}