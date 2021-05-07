import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect } from 'react';
import { View, Text, Right, Left, Icon, ListItem } from 'native-base';

import { StyleSheet, FlatList, Button } from 'react-native';
import { context, UsersProvider } from '../context/cont';
import { getAllUsers, getUserDetails, Next, Previous } from '../actions/actions';;
//import { Container, Header, Content, List, ListItem, Text, View } from 'native-base';
//{ navigation }
const Users = ({ navigation }) => {
    console.log("Users reached");
    const { state, dispatch } = useContext(context);
    useEffect(() => {
        try {
            const resolvePromise = async (action) => {
                dispatch(await action)
            }
            resolvePromise(getAllUsers(state.page));
        }
        catch (err) { console.error(err) }

    }, [state.page]);

    AddUser = () => {
        navigation.navigate('Create');
    }

    NextPage = () => {
        try {
            const resolvePromise = async (action) => {
                dispatch(await action)
            }
            resolvePromise(Next(state.page))
        }
        catch (err) { console.error(err) }

    };

    PreviousPage = () => {
        try {
            const resolvePromise = async (action) => {
                dispatch(await action)
            }
            resolvePromise(Previous())
        }
        catch (err) { console.error(err) }

    };

    return (
        <FlatList
            data={state.usersList}
            renderItem={({ item }) => {
                return <ListItem>
                    <Left>
                        <Text>{item.first_name}</Text>
                    </Left>
                    <Right>
                        <Icon name="person" info onPress={
                            () => {
                                navigation.navigate('Details', { id: item.id })
                            }
                        } />
                    </Right>
                </ListItem>
            }}
            ItemSeparatorComponent={ItemSeparator}
            keyExtractor={(item) => item.id.toString()}
            ListEmptyComponent={EmptyList}
            ListFooterComponent={Paginator(state)}

        />
    )

}

export default Users;

const EmptyList = () => {
    return <Text style={{ textAlign: 'center' }}>
        No users available
    </Text>
}

const ItemSeparator = () => {
    return (<ListItem itemDivider>
    </ListItem>)
}
//////////////////////////////////////
const Paginator = (state) => {

    return (<View><ListItem style={{ textAlign: 'center', justifyContent: 'center' }}>
        <Button title="Prev" style={{ margin: '5%' }} onPress={PreviousPage

        }></Button>

        <Button style={{ margin: '5%', }} disabled={true} title={state.page.toString()}></Button>

        <Button style={{ margin: '5%' }} title="Next" onPress={NextPage
        }></Button>

    </ListItem >
        <ListItem style={{ justifyContent: 'flex-end' }}>
            <Button title="Add+" onPress={AddUser}> </Button>
        </ListItem>
    </View>
    )
    //////////////////////////////////////

}