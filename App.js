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
import {createStackNavigator} from '@react-navigation/stack'

import HomeScreen from './pages/Home';
import FindScreen from './pages/Find';
import NearbyScreen from './pages/Nearby';
import MineScreen from './pages/Mine';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// 首页导航栏
function StackHomeScreen() {
  return(
    <Stack.Navigator
      initialRouteName = "Home"
      >
        <Stack.Screen
         name="首页"
         component = {HomeScreen}
         options = {{
           tabBarLabel:'首页'
         }}
        />
      </Stack.Navigator>
  )
}
// 发现导航栏
function StackFindScreen() {
  return(
    <Stack.Navigator
      initialRouteName = "Find"
      >
        <Stack.Screen
         name="发现"
         component = {FindScreen}
         options = {{
           tabBarLabel:'首页'
         }}
        />
      </Stack.Navigator>
  )
}
// 附近导航栏
function StackNearbyScreen() {
  return(
    <Stack.Navigator
      initialRouteName = "Nearby">
        <Stack.Screen
          name="附近"
          component = {NearbyScreen}
        />
      </Stack.Navigator>
  )
}
// 我的导航栏
function StackMineScreen() {
  return(
    <Stack.Navigator
      initialRouteName = "Mine">
        <Stack.Screen
          name="我的"
          component = {MineScreen}
        />
      </Stack.Navigator>
  )
}
// 标签栏
function TabScreen() {
  return(
    <Tab.Navigator
       initialRouteName="Home"
       tabBarOptions={{
         activeTintColor:'#e91e63'
       }}>
        <Tab.Screen 
        name="Home" 
        component = {StackHomeScreen} 
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
        component = {StackFindScreen} 
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
        component = {StackNearbyScreen} 
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
        component = {StackMineScreen} 
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
  );
}

export default function App(){
  return(
    <NavigationContainer>
      <TabScreen/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    bottomTabIconStyle:{
      width:30,
      height:30
    }
});