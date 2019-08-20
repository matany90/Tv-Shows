import React from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';
import { View, Card, CardItem, Separator, Text, Body } from 'native-base';
import { deleteHTMLTags, HttpsStringFormat } from '../Utils';
import _ from 'lodash'
import SCREEN_IMPORT from 'Dimensions'

import RatingStarts from '../components/RatingStarts';

const SCREEN_WIDTH = SCREEN_IMPORT.get('window').width


const ShowScreen = (props) => {
    const { image, rating, summary, genres, schedule, network, language } = props.navigation.getParam('show')
    return (
        <ScrollView style={{ width: SCREEN_WIDTH }}>
            <Card style={styles.cardContainer}>
                <CardItem cardBody>
                    <Image source={image !== null ? { uri: HttpsStringFormat(image.original) } : require('../res/img/noImage.png')}
                        style={styles.img} />
                </CardItem>
                <CardItem>
                    <RatingStarts
                        rating={rating.average || "No rating avaliable"}
                        startSize={30}
                        textSize={20}
                        numberOfStarts={rating.average / 2}
                    />
                </CardItem>
                <Separator bordered>
                    <Text style={styles.subtitleStyle}>SUMMARY</Text>
                </Separator>
                <CardItem>
                    <Body style={styles.summaryText}>
                        <Text>
                            {deleteHTMLTags(summary)}
                        </Text>
                    </Body>
                </CardItem>
                <Separator bordered>
                    <Text style={styles.subtitleStyle}>GENRES</Text>
                </Separator>
                <CardItem>
                    <Body style={styles.genreText}>
                    <View>
                        {_.isEmpty(genres) ? <Text>No genre avaliable</Text> : null}
                    </View>    
                        {genres.map(genre => 
                        <View key={genre}><Text>{genre}</Text></View>)}
                    </Body>
                </CardItem>
                <Separator bordered>
                    <Text style={styles.subtitleStyle}>SCHEDULE</Text>
                </Separator>
                <CardItem>
                    <Body style={styles.shceduleText}>
                        <Text>Days: {schedule.days.join(", ")}</Text>
                        <Text>Time: {schedule.time}</Text>
                    </Body>
                </CardItem>
                <Separator bordered>
                    <Text style={styles.subtitleStyle}>NETWORK</Text>
                </Separator>
                <CardItem>
                    <Body style={styles.networkText}>
                        <Text>{network.name + ", " + network.country.name}</Text>
                    </Body>
                </CardItem>
                <Separator bordered>
                    <Text style={styles.subtitleStyle}>LANGUAGE</Text>
                </Separator>
                <CardItem>
                    <Body style={styles.networkText}>
                        <Text>{language}</Text>
                    </Body>
                </CardItem>
            </Card>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flex: 0
    },
    img: {
        resizeMode: 'contain',
        height: 300,
        flex: 1,
        borderRadius: 30 
    },
    subtitleStyle: {
        fontSize: 15,
        marginRight: 8 
    },
    summaryText: {
     paddingBottom: 10 
    },
    genreText: {
        paddingBottom: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end' 
    },
    shceduleText: {
        paddingBottom: 10, 
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    networkText: {
        paddingBottom: 10,
        justifyContent: 'flex-end',
       alignItems: 'flex-end'
    }

})

export default ShowScreen;    

