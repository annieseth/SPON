import 'react-native-gesture-handler';
import * as React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//SCREENS

function WelcomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Login" onPress={() => navigation.navigate('HomePage', { name: 'Sarang'})} />
      <Button
        title="Don't have an account? Create one here!"
        onPress={() =>
          navigation.navigate('CreateProfile')
        }
      />
    </View>
  );
}

//Asks user for information about themselves
function CreateProfileConst({ navigation }){
  return(
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is the create account page</Text>
        <Button title="Create Account!" onPress={() => navigation.navigate('HomePage', { name: 'Sarang'})} />
     </View>
  );
}

//navigates here after either logging in OR creating profile

//once this is connected to the first two screens of the app, the route and name grabbing will work!
//function HomeConst({ navigation, route }){
function HomeConst({ navigation }){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is NAME's profile, as well as the HomePage after logging in!</Text>
      {/* <Text>This is {route.params.name}'s profile, as well as the HomePage after logging in!</Text> */}
      <Button title="Profile Button" onPress={() => navigation.navigate('ProfilePage')} />
      <Button title="Event Create Button!" onPress={() => navigation.navigate('EventCreatePage')} />
      <Button title="Friends Button!" onPress={() => navigation.navigate('FriendsPage')} />
      <Button title="Google Maps Button!" onPress={() => navigation.navigate('GoogleMapsPage')} />
    </View>
  );
}


//FIRST button on the nav bar
function ProfileConst({ navigation}){
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is the profile page</Text>
    </View>
  );
}

//SECOND button on the nav bar
function EventCreateConst({ navigation}){
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is the EventCreateConst page</Text>
    </View>
  );
}

//THIRD button on the nav bar
function FriendsConst({ navigation}){
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is the Friends page</Text>
    </View>
  );
}

//FOURTH button on the nav bar
function GoogleMapsConst({ navigation}){
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is the GoogleMaps page. To be released!</Text>
    </View>
  );
}



//ARRANGEMENT ON SCENE OF SCREENS

//Arranges bottom tab nav
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator> 
      <Tab.Screen name="ProfilePage" component={ProfileConst} />
      <Tab.Screen name="EventCreatePage" component={EventCreateConst} />
      <Tab.Screen name="HomePage" component={HomeConst} />
      <Tab.Screen name="FriendsPage" component={FriendsConst} />
      <Tab.Screen name="GoogleMapsPage" component={GoogleMapsConst} />
    </Tab.Navigator>
  );
}


const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Welcome' }}/>
    <Stack.Screen name="CreateProfile" component={CreateProfileConst} /> 
    {/* <Stack.Screen name="HomePage" component={HomeConst} /> 
    <Stack.Screen name="ProfilePage" component={ProfileConst} />
    <Stack.Screen name="EventCreatePage" component={EventCreateConst} />
    <Stack.Screen name="FriendsPage" component={FriendsConst} />
    <Stack.Screen name="GoogleMapsPage" component={GoogleMapsConst} /> */}
  </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
}

export default App; 
