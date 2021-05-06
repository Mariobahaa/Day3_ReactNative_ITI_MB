import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Details from './src/components/Details';
import Users from './src/components/Users';
import { UsersProvider } from './src/context/cont';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

export default class App extends Component {
  async componentDidMount() {

    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
  }



  render() {
    return (
      <UsersProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Users"
          >
            <Stack.Screen
              name="Users"
              component={Users}
              options={{
                title: 'Users',
                headerTitleStyle: { textAlign: 'center' }
              }}
            />
            <Stack.Screen
              name="Details"
              component={Details}
              options={{
                title: 'Details',
                headerTitleStyle: { textAlign: 'center' }
              }}
            />

          </Stack.Navigator>
        </NavigationContainer>
      </UsersProvider >

    );
  }


}

/*

   <View >
              <View style={{ alignItems: 'center', width: '100%', height: '15%', backgroundColor: 'black', color: 'white', justifyContent: 'flex-end', paddingBottom: '3%' }}>
                <Text style={{ color: 'white', fontSize: 18 }} >Users</Text>
              </View>
              <View>
                <Users></Users>
              </View>
              <StatusBar style="auto" />
            </View>
*/