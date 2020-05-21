/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  Image,
  StyleSheet
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './pages/Home';
import FindScreen from './pages/Find';
import NearbyScreen from './pages/Nearby';
import MineScreen from './pages/Mine';

const Tab = createBottomTabNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator
       initialRouteName="Home"
       tabBarOptions={{
         activeTintColor:'#e91e63'
       }}>
        <Tab.Screen 
        name="Home" 
        component = {HomeScreen} 
        options={{
          tabBarLabel:'首页',
          tabBarIcon:({focused}) => {
            if(focused){
              return <Image source={require('../YicaifuProject/assets/Tab_Home_P.png')} style={styles.bottomTabIconStyle}/>;
            }else{
              return <Image source={require('../YicaifuProject/assets/Tab_Home_N.png')} style={styles.bottomTabIconStyle}/>;
            }
          }
        }}
        />
        <Tab.Screen 
        name="Find" 
        component = {FindScreen} 
        options={{
          tabBarLabel:'发现',
          tabBarIcon:({focused}) => {
            if(focused){
              return <Image source={require('../YicaifuProject/assets/Find_P.png')} style={styles.bottomTabIconStyle}/>;
            }else{
              return <Image source={require('../YicaifuProject/assets/Find_N.png')} style={styles.bottomTabIconStyle}/>;
            }
          }
        }}
        />
        <Tab.Screen 
        name="Nearby" 
        component = {NearbyScreen} 
        options={{
          tabBarLabel:'附近',
          tabBarIcon:({focused}) => {
            if(focused){
              return <Image source={require('../YicaifuProject/assets/Tab_Product_P.png')} style={styles.bottomTabIconStyle}/>;
            }else{
              return <Image source={require('../YicaifuProject/assets/Tab_Product_N.png')} style={styles.bottomTabIconStyle}/>;
            }
          }
        }}
        />
        <Tab.Screen 
        name="Mine" 
        component = {MineScreen} 
        options={{
          tabBarLabel:'我的',
          tabBarIcon:({focused}) => {
            if(focused){
              return <Image source={require('../YicaifuProject/assets/Tab_User_P.png')} style={styles.bottomTabIconStyle}/>;
            }else{
              return <Image source={require('../YicaifuProject/assets/Tab_User_N.png')} style={styles.bottomTabIconStyle}/>;
            }
          }
        }}
        />
      </Tab.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    bottomTabIconStyle:{
      width:30,
      height:30
    }
});