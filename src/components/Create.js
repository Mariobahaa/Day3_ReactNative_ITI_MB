import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Icon, Text } from 'native-base';
import { Image, View } from 'react-native'
import { context, UsersProvider } from '../context/cont';
import { getAllUsers, getUserDetails } from '../actions/actions';
//{ nav, route }
const Create = ({ navigation }) => {


    const { state, dispatch } = useContext(context);


    return (
        <Container>
            <Content >
                <View style={{ height: '50%' }}></View>
                <Form style={{ marginBottom: '50%' }}>
                    <Item >
                        <Input placeholder="Name" style={{ marginBottom: '5%' }} />
                    </Item>
                    <Item >
                        <Input placeholder="Job" style={{ marginBottom: '10%' }} />
                    </Item >
                    <Button iconLeft info block >
                        <Icon name='people' />
                        <Text>Add User</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    )
}


export default Create;