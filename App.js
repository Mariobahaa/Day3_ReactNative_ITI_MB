import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Details from './src/components/Details';
import Users from './src/components/Users';
import { UsersProvider } from './src/context/cont';


export default function App() {
  return (
    <UsersProvider>
      <View >
        <View style={styles.AppBar}>
          <Text style={{ color: 'white', fontSize: 18 }} >Users</Text>
        </View>
        <View>
          <Users></Users>
        </View>
        <StatusBar style="auto" />
      </View>
    </UsersProvider >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  AppBar: { alignItems: 'center', width: '100%', height: '15%', backgroundColor: 'black', color: 'white', justifyContent: 'flex-end', paddingBottom: '3%' }
});
