import { useQuery } from '@tanstack/react-query';
import { startCase } from 'lodash';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import ScrollView from '../../components/ScrollView/ScrollView';
import Text from '../../components/Text/Text';
import { S } from '../../constants/consts';
import { useColors } from '../../hooks/useColors';
import { getSymbol } from '../../lib/client';
import { StackScreenProps } from '../../types';
import KeyValue from './components/KeyValue';

const fields = ['highPrice', 'lowPrice', 'openPrice', 'openTime', 'closeTime'];
const SymbolScreen = ({ route }: StackScreenProps<'SymbolScreen'>) => {
    const colors = useColors();
    const { symbol } = route.params;

    const symbolInfo = useQuery({
        queryFn: () => getSymbol(symbol),
        queryKey: ['symbol', symbol],
        staleTime: 1000,
        // refetchInterval: 3000,
        enabled: !!symbol,
    });

    if (!symbol || symbolInfo.isError) return null;

    if (symbolInfo.isLoading)
        return <ActivityIndicator color={colors.primary} />;

    return (
        <ScrollView contentContainerStyle={[S.flexGrow1]} bg="accent">
            <Text variant="h1">{symbolInfo.data.info.pair}</Text>
            {fields.map((field) => (
                <KeyValue
                    title={field
                        .split(/[A-Z]/)
                        .map((a) => startCase(a))
                        .join(' ')}
                    value={symbol[field]}
                />
            ))}
        </ScrollView>
    );
};

export default SymbolScreen;
