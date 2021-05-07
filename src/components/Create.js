import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Icon, Text } from 'native-base';
import { Image, View } from 'react-native'
import { context, UsersProvider } from '../context/cont';
import { createUser, getAllUsers, getUserDetails } from '../actions/actions';
//{ nav, route }
const Create = ({ navigation }) => {


    const { state, dispatch } = useContext(context);

    _name = null;
    _job = null;

    useEffect(() => {
        if (state.resUser != {} && state.resUser != null && state.resUser.id != undefined) {
            alert(`id:${state.resUser.id}\nname:${state.resUser.name}\ncreatedAt:${state.resUser.createdAt}\njob:${state.resUser.job}`)

        }

    }, [state.resUser]);




    createNewUser = async () => {
        try {
            const resolvePromise = async (action) => {
                dispatch(await action)
            }
            //console.log(`${_name} works as a ${_job}`);

            if (_name != null && _name != undefined && _job != null && _job != undefined) {
                resolvePromise(createUser(_name, _job));
            }
        }
        catch (err) { console.error(err) }

    }


    return (
        <Container>
            <Content >
                <View style={{ height: '50%' }}></View>
                <Form style={{ marginBottom: '50%' }}>
                    <Item >
                        <Input placeholder="Name" onChangeText={(text) => { _name = text }} style={{ marginBottom: '5%' }} />
                    </Item>
                    <Item >
                        <Input placeholder="Job" onChangeText={(text) => { _job = text }} style={{ marginBottom: '10%' }} />
                    </Item >
                    <Button iconLeft info block onPress={createNewUser}>
                        <Icon name='people' />
                        <Text>Add User</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    )
}


export default Create;