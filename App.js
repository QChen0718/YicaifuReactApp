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
import HomeDetailScreen from './pages/HomeDetail';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// 首页导航栏
function StackHomeScreen() {
  return(
    <Stack.Navigator
      initialRouteName = "Home"
      >
        <Stack.Screen
         name="Home"
         component = {HomeScreen}
         options = {{
           title:'首页'
         }}
        />
        <Stack.Screen
        name="HomeDetail"
        component = {HomeDetailScreen}
        options = {{
          title:'详情'
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
         name="Find"
         component = {FindScreen}
         options = {{
           title:'发现'
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
          name="Nearby"
          component = {NearbyScreen}
          options = {{
            title:'附近'
          }}
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
          name="Mine"
          component = {MineScreen}
          options = {{
            title:'我的'
          }}
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
         activeTintColor:'red',
         inactiveTintColor:'gray'
       }}>
        <Tab.Screen 
        name="Home" 
        component = {StackHomeScreen} 
        options={props => {
          return {
            title:'首页',
            tabBarIcon:({focused}) => {
            if(focused){
              return <Image source={require('../YicaifuProject/assets/Tab_Home_P.png')} style={styles.bottomTabIconStyle}/>;
            }else{
              return <Image source={require('../YicaifuProject/assets/Tab_Home_N.png')} style={styles.bottomTabIconStyle}/>;
            }
          },
          // 跳转到二级页面隐藏标签栏
          tabBarVisible: !props.route.state || props.route.state.index === 0,
          };
        }}
        />
        <Tab.Screen 
        name="Find" 
        component = {StackFindScreen} 
        options={ props => {
          return {
            tabBarLabel:'发现',
            tabBarIcon:({focused}) => {
              if(focused){
                return <Image source={require('../YicaifuProject/assets/Find_P.png')} style={styles.bottomTabIconStyle}/>;
              }else{
                return <Image source={require('../YicaifuProject/assets/Find_N.png')} style={styles.bottomTabIconStyle}/>;
              }
            },
            tabBarVisible: !props.route.state || props.route.state.index === 0,
          }
        }}
        />
        <Tab.Screen 
        name="Nearby" 
        component = {StackNearbyScreen} 
        options={ props => {
          return {
            tabBarLabel:'附近',
            tabBarIcon:({focused}) => {
              if(focused){
                return <Image source={require('../YicaifuProject/assets/Tab_Product_P.png')} style={styles.bottomTabIconStyle}/>;
              }else{
                return <Image source={require('../YicaifuProject/assets/Tab_Product_N.png')} style={styles.bottomTabIconStyle}/>;
              }
            },
            tabBarVisible: !props.route.state || props.route.state.index === 0,
          }
        }}
        />
        <Tab.Screen 
        name="Mine" 
        component = {StackMineScreen} 
        options={ props => {
          return {
            tabBarLabel:'我的',
            tabBarIcon:({focused}) => {
              if(focused){
                return <Image source={require('../YicaifuProject/assets/Tab_User_P.png')} style={styles.bottomTabIconStyle}/>;
              }else{
                return <Image source={require('../YicaifuProject/assets/Tab_User_N.png')} style={styles.bottomTabIconStyle}/>;
              }
            },
            tabBarVisible: !props.route.state || props.route.state.index === 0,
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