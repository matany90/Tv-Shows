import React from 'react';
import { ListItem, Header, Left, Thumbnail, Button, Icon, Title, Item, Input, View, InputGroup, Text } from 'native-base';


export default CustomFooter = (props) => (
    <Header >
        <View style={{flexDirection: 'row', justifyContent:'flex-end', alignItems:'flex-end'}}>
          <Text style={{color:'white', marginRight: 10, marginBottom: 10}}>Created By Matan Yechiel</Text>
          <Thumbnail style={{height :40, width:40,borderRadius:20, marginBottom: 10}} source={require('../res/img/matan.jpeg')} />
          </View>
  </Header>
)