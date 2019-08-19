import React from 'react';
import { Button , Icon} from 'native-base';

export default CustomBackIcon = (props) => (
    <Button transparent onPress={props.onPress}>
    <Icon name='arrow-back' />
    </Button>
)