import { Text as DText } from '@rneui/themed';
import React from 'react';
import { TextStyle } from 'react-native';
import { Colors } from '../../constants/colors';
import { useColors } from '../../hooks/useColors';

const Text = ({
    children,
    style,
    color = 'white',
    variant,
}: {
    children: string;
    style?: TextStyle | TextStyle[];
    color?: Colors;
    variant?: keyof typeof variants;
}) => {
    const colors = useColors();
    const v = variant
        ? (variants[variant] as TextStyle)
        : (variants['p1'] as TextStyle);
    return (
        <DText style={[{ color: colors[color] }, v, style]}>{children}</DText>
    );
};

const variants = {
    h1: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    h2: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    p1: {
        fontSize: 16,
        fontWeight: 'normal',
    },
    p2: {
        fontSize: 14,
        fontWeight: 'normal',
    },
};

export default Text;
