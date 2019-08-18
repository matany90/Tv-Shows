import React, { Component } from 'react';
import { Image, ScrollView } from 'react-native';
import HTMLView from 'react-native-htmlview';
import { View, Header, Content, Card, CardItem, Separator, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import RatingStarts from '../components/RatingStarts';
import { deleteHTMLTags } from '../Utils';
import SCREEN_IMPORT from 'Dimensions'
  
const SCREEN_WIDTH = SCREEN_IMPORT.get('window').width


const ShowScreen = (props) => {
    const { image, rating, summary, genres, schedule, network, language } = props.navigation.getParam('show')

    return (
        <ScrollView style={{ width: SCREEN_WIDTH }}>
            <Card style={{ flex: 0 }}>
                <CardItem cardBody>
                    <Image source={{ uri: image.original }}
                        style={{ resizeMode: 'contain', height: 300, flex: 1, borderRadius: 30 }} />
                </CardItem>
                <CardItem>
                    <RatingStarts
                        rating={rating.average}
                        startSize={30}
                        textSize={20}
                        numberOfStarts={rating.average / 2}
                    />
                </CardItem>
                <Separator bordered>
                    <Text style={{ fontSize: 15, marginRight: 8 }}>SUMMARY</Text>
                </Separator>
                <CardItem>
                    <Body style={{ paddingBottom: 10 }}>
                        <Text>
                            {deleteHTMLTags(summary)}
                        </Text>
                    </Body>
                </CardItem>
                <Separator bordered>
                    <Text style={{ fontSize: 15, marginRight: 8 }}>GENRES</Text>
                </Separator>
                <CardItem>
                    <Body style={{ paddingBottom: 10, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                        {genres.map(genre => <View key={genre}><Text>{genre}</Text></View>)}
                    </Body>
                </CardItem>
                <Separator bordered>
                    <Text style={{ fontSize: 15, marginRight: 8 }}>SCHEDULE</Text>
                </Separator>
                <CardItem>
                    <Body style={{ paddingBottom: 10, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                        <Text>Days: {schedule.days.join(", ")}</Text>
                        <Text>Time: {schedule.time}</Text>
                    </Body>
                </CardItem>
                <Separator bordered>
                    <Text style={{ fontSize: 15, marginRight: 8 }}>NETWORK</Text>
                </Separator>
                <CardItem>
                    <Body style={{ paddingBottom: 10, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                        <Text>{network.name + ", " + network.country.name}</Text>
                    </Body>
                </CardItem>
                <Separator bordered>
                    <Text style={{ fontSize: 15, marginRight: 8 }}>LANGUAGE</Text>
                </Separator>
                <CardItem>
                    <Body style={{ paddingBottom: 10, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                        <Text>{language}</Text>
                    </Body>
                </CardItem>
            </Card>
        </ScrollView>
    );
};

export default ShowScreen;    

