import React from 'react';
import { View } from 'react-native';
import Text from '../../../components/Text/Text';
import { S } from '../../../constants/consts';

const KeyValue = ({ title, value }: { title: string; value: string }) => {
    return (
        <View style={[S.row, S.between]}>
            <Text variant="p2" color="white">
                {title}
            </Text>
            <Text variant="h2" color="white">
                {value}
            </Text>
        </View>
    );
};

export default KeyValue;
