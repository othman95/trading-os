import { Text } from "@rneui/themed";
import React from "react";
import { useSearchStore } from "../../store/search";

const SymbolList = () => {
	const symbol = useSearchStore((state) => state.symbol);
	return <Text>{symbol}</Text>;
};

export default SymbolList;
