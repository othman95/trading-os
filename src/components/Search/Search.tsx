import { SearchBarIOS } from "@rneui/base/dist/SearchBar/SearchBar-ios";
import { SearchBarAndroid } from "@rneui/base/dist/SearchBar/SearchBar-android";
import React from "react";
import { Platform } from "react-native";
import { useColors } from "../../hooks/useColors";
import { searchStore } from "../../store/search";
import { observer } from "mobx-react";

const Search = () => {
	const colors = useColors();
	const { symbol, changeSymbol, removeSymbol } = searchStore;

	return <>{Platform.OS === "android" ? <SearchBarAndroid onChangeText={(text) => changeSymbol(text)} onClear={() => removeSymbol()} inputStyle={{ borderBottomColor: colors.gray, borderBottomWidth: 1, fontSize: 16 }} /> : <SearchBarIOS />}</>;
};

export default observer(Search);
