import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { S } from '../../constants/consts';
import { useColors } from '../../hooks/useColors';

const Loading = () => {
    const colors = useColors();
    return (
        <View style={[S.center, S.justify, S.flex]}>
            <ActivityIndicator color={colors.accent} size="large" />
        </View>
    );
};

export default Loading;
