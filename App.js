import React from 'react';
import {
  
  Text,
  View,
  StyleSheet,

 
 
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Home from './screens/home1';
import Profile from './screens/profile';
import Recents from './screens/recents';
const Tab=createMaterialBottomTabNavigator();
export default function App(){

 
    return (
    
   
     <NavigationContainer>

     <Tab.Navigator
     initialRoute="Home"
     activeColor="#02ad94"
     inactiveColor="#dedede"
     style={{backgroundColor:'#000'}}
     barStyle={{backgroundColor:'#0f0f0f',padding:4}}
     >
         <Tab.Screen name="Home" 
         component={Home}
         options={{
           tabBarLabel:'',
           tabBarIcon:({color})=>(
<MaterialCommunityIcons name="home" color={color} size={28} />
           )
         }}
         />
         <Tab.Screen 
         name="Profile" 
         component={Profile}
         options={{
          tabBarLabel:'',
          tabBarIcon:({color})=>(
<MaterialCommunityIcons name="camera-metering-spot" color={color} size={28} />
          )
        }}
         />
         <Tab.Screen 
         name="Recents"
          component={Recents}
          options={{
            tabBarLabel:'',
            tabBarIcon:({color})=>(
  <MaterialCommunityIcons name="account" color={color} size={28} />
            )
          }}
          />

     </Tab.Navigator>


     </NavigationContainer>


    
   
    
    );
  }
  const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})



