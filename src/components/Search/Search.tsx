import { SearchBar } from '@rneui/themed';
import { observer } from 'mobx-react';
import React from 'react';
import { useColors } from '../../hooks/useColors';
import { searchStore } from '../../store/SearchStore';

const Search = () => {
    const colors = useColors();
    const { changeSymbol, removeSymbol } = searchStore;

    return (
        <>
            <SearchBar
                value={searchStore.symbol}
                onChangeText={(text) => changeSymbol(text)}
                onClear={() => removeSymbol()}
                inputStyle={{
                    borderBottomColor: colors.white,
                    borderBottomWidth: 1,
                    fontSize: 16,
                    color: colors.white,
                }}
                searchIcon={false}
                cancelIcon={false}
                cursorColor={colors.white}
                containerStyle={{
                    backgroundColor: 'transparent',
                    borderBottomWidth: 0,
                    borderTopWidth: 0,
                }}
                inputContainerStyle={{
                    backgroundColor: 'transparent',
                }}
                placeholder="Search ..."
                placeholderTextColor={colors.white}
            />
            {/* {Platform.OS === 'android' ? (
                <SearchBarAndroid
                    onChangeText={(text) => changeSymbol(text)}
                    onClear={() => removeSymbol()}
                    inputStyle={{
                        borderBottomColor: colors.white,
                        borderBottomWidth: 1,
                        fontSize: 16,
                        color: colors.white,
                    }}
                    searchIcon={false}
                    cancelIcon={false}
                    cursorColor={colors.white}
                    containerStyle={{
                        backgroundColor: 'transparent',
                    }}
                />
            ) : (
                <SearchBarIOS />
            )} */}
        </>
    );
};

export default observer(Search);
