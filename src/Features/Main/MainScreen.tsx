import React, { Suspense } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Loading from '../../components/Loading/Loading';
import Search from '../../components/Search/Search';
import SymbolList from '../../components/SymbolList/SymbolList';
import { S } from '../../constants/consts';
import { useColors } from '../../hooks/useColors';
import SymbolSheet from '../Symbol/components/SymbolSheet';

const MainScreen = () => {
    const colors = useColors();
    return (
        <View style={[styles.container, { backgroundColor: colors.accent }]}>
            <SafeAreaView style={S.flex}>
                <Suspense fallback={<Loading />}>
                    <View
                        style={[
                            S.flex,
                            { paddingHorizontal: 10, paddingTop: 10 },
                        ]}
                    >
                        <Search />
                        <SymbolList />
                        <SymbolSheet />
                    </View>
                </Suspense>
            </SafeAreaView>
        </View>
    );
};

export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
