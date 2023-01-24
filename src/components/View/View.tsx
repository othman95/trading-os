import React from 'react';
import { View as DView, ViewStyle } from 'react-native';
import { useColors } from '../../hooks/useColors';
const View = ({
    bg = 'accent',
    style,
    children,
    ...props
}: {
    bg?: keyof ReturnType<typeof useColors>;
    style?: ViewStyle | ViewStyle[];
    children?: React.ReactNode | React.ReactNode[];
}) => {
    const colors = useColors();
    return (
        <DView style={[{ backgroundColor: colors[bg] }, style]} {...props}>
            {children}
        </DView>
    );
};

export default View;
