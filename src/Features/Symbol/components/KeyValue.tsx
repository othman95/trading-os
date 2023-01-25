import React from 'react';
import { View } from 'react-native';
import { CountUp } from 'use-count-up';
import Text from '../../../components/Text/Text';
import { S } from '../../../constants/consts';

const KeyValue = ({ title, value }: { title: string; value: number }) => {
    return (
        <View style={[S.row, S.between, S.center]}>
            <Text variant="p2" color="white">
                {title}
            </Text>
            <CountUp
                isCounting
                end={value}
                duration={1000}
                easing={'easeInCubic'}
            />
        </View>
    );
};

export default KeyValue;
