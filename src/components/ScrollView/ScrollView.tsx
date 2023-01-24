import React from 'react';
import { ScrollView as DScrollView, ScrollViewProps } from 'react-native';
import { useColors } from '../../hooks/useColors';

const ScrollView = ({
    bg = 'accent',
    contentContainerStyle,
    children,
    ...props
}: {
    bg?: keyof ReturnType<typeof useColors>;
    contentContainerStyle?: ScrollViewProps['contentContainerStyle'];
    children?: React.ReactNode | React.ReactNode[];
}) => {
    const colors = useColors();
    return (
        <DScrollView
            contentContainerStyle={[
                { backgroundColor: colors[bg] },
                contentContainerStyle,
            ]}
            {...props}
        >
            {children}
        </DScrollView>
    );
};

export default ScrollView;
