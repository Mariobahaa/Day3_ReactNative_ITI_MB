import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { context, UsersProvider } from '../context/cont';
import { getAllUsers, getUserDetails } from '../actions/actions';
//import { Container, Header, Content, List, ListItem, Text, View } from 'native-base';
//{ nav, route }
const Details = () => {

    // const { state, dispatch } = useContext(context);
    // useEffect(() => {
    //     try {
    //         const resolvePromise = async () => {
    //             dispatch(await getUserDetails(route.params.id))
    //         }
    //         resolvePromise();
    //     }
    //     catch (err) { console.error(err) }

    // }, []);

    return (
        <View>
            <StatusBar hidden={true}></StatusBar>
            <Text>Details</Text>

        </View>

    )

}

export default Details;