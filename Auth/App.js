import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import React,{useState,useEffect} from 'react';
import {firebase} from"./config";
import Login from "./src/Login";
import Registration from "./src/Registration";
import Dashboard from "./src/Dashboard";
import Header from "./components/header";

const stack=createStackNavigator();
function App(){
  const [intializing,setIntializing]=useState(true);
  const[user,setUser]=useState();

  function onAuthStateChanged(user){
    setUser(user);
    if(intializing) setIntializing(false);
  }
  useEffect(()=>{
    const subscriber=firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  
  },[]);
  if(intializing) return null;
  if(!user){
    return(
    <Stack.Navigator>
      <Stack.Screen 
      name="Login"
      component={login}
      options={{
        headerTitle:()=><Header name="Bug Ninza"/>,
        headerStyle:{
          height:150,
          borderBottomLeftRadius:50,
          borderBottomRightRadius:50,
          backgroundColor:'#00e4d0',
          shadowColor:'#000',
          elevation:25
        }

      }}
      />
      <Stack.Screen 
      name="Registration"
      component={Registration}
      options={{
        headerTitle:()=><Header name="Bug Ninza"/>,
        headerStyle:{
          height:150,
          borderBottomLeftRadius:50,
          borderBottomRightRadius:50,
          backgroundColor:'#00e4d0',
          shadowColor:'#000',
          elevation:25
        }

      }}
      />
       </Stack.Navigator>
    );
  }
  return(
    <Stack.Navigator>
<Stack.Screen 
      name="Dashboard"
      component={Dashboard}
      options={{
        headerTitle:()=><Header name="Bug Ninza"/>,
        headerStyle:{
          height:150,
          borderBottomLeftRadius:50,
          borderBottomRightRadius:50,
          backgroundColor:'#00e4d0',
          shadowColor:'#000',
          elevation:25
        }

      }}
      />
      

    </Stack.Navigator>
    );
  }
export default()=>{
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}