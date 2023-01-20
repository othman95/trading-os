import { Text } from "@rneui/themed";
import { observer } from "mobx-react";
import React from "react";
import { searchStore } from "../../store/search";

const SymbolList = () => {
	const symbol = searchStore.symbol;
	return <Text>{symbol}</Text>;
};

export default observer(SymbolList);
