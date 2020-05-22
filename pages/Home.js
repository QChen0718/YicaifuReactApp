import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native'
// this.props.navigation 获取当前导航栏
export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style={styles.viewStryle}>
                <Text>
                 首页
                </Text>
                <Button title="跳转详情" onPress={()=> this.props.navigation.push('HomeDetail')}></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStryle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})