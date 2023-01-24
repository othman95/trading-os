import { useQuery } from '@tanstack/react-query';
import { startCase } from 'lodash';
import { observer } from 'mobx-react';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import MainBottomSheet from '../../../components/MainBottomSheet/MainBottomSheet';
import Text from '../../../components/Text/Text';
import View from '../../../components/View/View';
import { S } from '../../../constants/consts';
import { useColors } from '../../../hooks/useColors';
import { getSymbol } from '../../../lib/client';
import { symbolStore } from '../../../store/SymbolStore';
import KeyValue from './KeyValue';

const fields = ['highPrice', 'lowPrice', 'openPrice', 'openTime', 'closeTime'];
const SymbolSheet = observer(() => {
    const colors = useColors();

    const symbol = symbolStore.selectedSymbol;

    const symbolInfoQuery = useQuery({
        queryFn: () => getSymbol(symbol),
        queryKey: ['symbol', symbol],
        staleTime: 1000,
        // refetchInterval: 2000,
        enabled: !!symbol,
    });

    if (!symbol || symbolInfoQuery.isError) return null;

    if (symbolInfoQuery.isLoading)
        return <ActivityIndicator color={colors.primary} />;

    const symbolInfo = symbolInfoQuery.data;
    return (
        <MainBottomSheet>
            <FlatList
                data={fields}
                ListHeaderComponent={() => (
                    <Text variant="h1" color="white" style={S.mb3}>
                        {symbolInfo.info.symbol}
                    </Text>
                )}
                contentContainerStyle={[
                    S.flexGrow1,
                    S.pad2,
                    { backgroundColor: colors.accent },
                ]}
                renderItem={({ item: field }) => (
                    <View style={S.mb2}>
                        <KeyValue
                            key={field}
                            title={startCase(field)}
                            value={symbolInfo.info[field]}
                        />
                    </View>
                )}
            ></FlatList>
        </MainBottomSheet>
    );
});

export default SymbolSheet;
