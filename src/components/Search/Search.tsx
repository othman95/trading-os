import { SearchBarIOS } from "@rneui/base/dist/SearchBar/SearchBar-ios";
import { SearchBarAndroid } from "@rneui/base/dist/SearchBar/SearchBar-android";
import React from "react";
import { Platform } from "react-native";
import { SearchBarProps } from "@rneui/themed";
import { useColors } from "../../hooks/useColors";
import { useSearchStore } from "../../store/search";

const Search = () => {
	const colors = useColors();
	const { symbol, changeSymbol, removeSymbol } = useSearchStore((state) => ({ symbol: state.symbol, changeSymbol: state.changeSymbol, removeSymbol: state.removeSymbol }));

	return <>{Platform.OS === "android" ? <SearchBarAndroid value={symbol} onChangeText={(text) => changeSymbol(text)} onClear={() => removeSymbol()} inputStyle={{ borderBottomColor: colors.gray, borderBottomWidth: 1, fontSize: 16 }} /> : <SearchBarIOS />}</>;
};

export default Search;
