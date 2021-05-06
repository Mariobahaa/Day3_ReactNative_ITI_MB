import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ListItem } from 'react-native';
import { context, UsersProvider } from '../context/cont';
import { getAllUsers, getUserDetails } from '../actions/actions';;
//import { Container, Header, Content, List, ListItem, Text, View } from 'native-base';
//{ navigation }
const Users = () => {
    console.log("Users reached");
    const { state, dispatch } = useContext(context);
    useEffect(() => {
        try {
            const resolvePromise = async (action) => {
                dispatch(await action)
            }
            resolvePromise(getAllUsers());
        }
        catch (err) { console.error(err) }

    }, []);

    return (
        <View>
            <Text>{state.usersList[0].first_name}</Text>

        </View>
    );
    // return (
    //     <View>
    //         <StatusBar hidden={true}></StatusBar>
    //         <FlatList
    //             data={state.Users}
    //             renderItem={({ item }) => {
    //                 return <ListItem>
    //                     <Left>
    //                         <Text>{item.first_name}</Text>
    //                     </Left>
    //                     <Right>
    //                         <Icon name="person" onPress={
    //                             () => {
    //                                 navigation.navigate('Details', { id: item.id })
    //                             }
    //                         } />
    //                     </Right>
    //                 </ListItem>
    //             }}
    //             ItemSeparatorComponent={ItemSeparator}
    //             keyExtractor={(item) => item.id.toString()}
    //             ListEmptyComponent={EmptyList}

    //         />
    //     </View>

    // )

}

export default Users;