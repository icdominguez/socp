import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons"
import { Colors } from './util/Constants';
import { useContext, useEffect, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from 'expo-app-loading';

import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import StandingsScreen from './screens/StandingsScreen';
import ScoreBoardScreen from './screens/ScoreBoardScreen';
import IconButton from './components/ui/IconButton';
import AuthContextProvider, { AuthContext } from './store/auth-context';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='SignUp' component={SignUpScreen} />
    </Stack.Navigator>
  )
}

function AutenthicatedStack() {

  const authCtx = useContext(AuthContext);

  return (
    <Tab.Navigator
    screenOptions={({ navigation }) => ({
      headerStyle: { backgroundColor: Colors.primaryLightColor },
      tabBarStyle: { backgroundColor: Colors.primaryLightColor },
      tabBarActiveTintColor: Colors.primaryTextColor,
      headerRight: () => (
        <IconButton icon="logout" size={24} color="white" onPress={() => {
          console.log("logout clicked");
          authCtx.logout()
        }} />
      )
    })}>
    <Tab.Screen name='Home' component={HomeScreen} options={{
      title: '',
      tabBarLabel: '',
      tabBarIcon: () => (
        <FontAwesome name="home" size={24} color="white" />
      )
    }} />
    <Tab.Screen name="Score" component={ScoreBoardScreen} options={{
      title: 'Score',
      tabBarLabel: 'Score',
      tabBarIcon: () => (
        <MaterialCommunityIcons name="scoreboard" size={24} color="white" />
      )
    }} />
    {/* <Tab.Screen name='Standings' component={StandingsScreen} options={{
      title: 'Standings',
      tabBarLabel: 'Standings',
      tabBarIcon: () => (
        <FontAwesome name="reorder" size={24} color="white" />
      )
    }} /> */}
  </Tab.Navigator>);
}

function Navigation() {

  const authContext = useContext(AuthContext);
  console.log(`user autenthicated: ${authContext.isAuthenticated}`)

  return (
    <NavigationContainer>
      {!authContext.isAuthenticated && <AuthStack />}
      {authContext.isAuthenticated && <AutenthicatedStack/>}
    </NavigationContainer>
  )
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem('token');

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }

      setIsTryingLogin(false);
    }

    fetchToken();
  }, []);

  if(isTryingLogin) {
    return <AppLoading/>; 
  }

  return <Navigation />
}

export default function App() {

  return (
    <>
      <StatusBar style="auto" />
      <AuthContextProvider>
        <Root/>
      </AuthContextProvider>
    </>
  );
}
