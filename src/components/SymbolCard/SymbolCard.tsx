import { Text } from "@rneui/themed";
import React from "react";
import { View } from "react-native";
import { S } from "../../constants/consts";

const SymbolCard = (symbol) => {
	return (
		<View style={[S.flex]}>
			<Text>{symbol.name}</Text>
		</View>
	);
};

export default SymbolCard;
