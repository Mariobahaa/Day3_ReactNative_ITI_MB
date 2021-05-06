import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect } from 'react';
import { View, Text, Container, Content, Card, CardItem, Body, Icon } from 'native-base';
import { Image } from 'react-native'
import { context, UsersProvider } from '../context/cont';
import { getAllUsers, getUserDetails } from '../actions/actions';
//{ nav, route }
const Details = ({ navigation, route }) => {

    const { state, dispatch } = useContext(context);
    useEffect(() => {
        try {
            const resolvePromise = async (action) => {
                dispatch(await action)
            }
            resolvePromise(getUserDetails(route.params.id));
        }
        catch (err) { console.error(err) }

    }, []);

    if (state.userDetails != null && state.userDetails != {}) {

        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem header>
                            <Text>
                                {`${state.userDetails.first_name} ${state.userDetails.last_name}`}
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image
                                    style={{ width: 200, height: 200, alignSelf: 'center', borderRadius: 50 }}
                                    source={{ uri: state.userDetails.avatar }}
                                />
                                <Text>
                                    Email: {state.userDetails.email}
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer>
                            <Text>
                                <Icon name="bookmarks" />
                            </Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
    return <Text>
        Loading...
</Text>
}

export default Details;