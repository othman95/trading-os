import React from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import SymbolCard from "../../SymbolCard/SymbolCard";
import { Suspense } from "react";
import { useColors } from "../../../hooks/useColors";
import { suspend } from "suspend-react";
import { getSymbols } from "../../../lib/client";

const Body = () => {
	const colors = useColors();
	const symbols = suspend(() => getSymbols(), ["symbols"]);

	if (!symbols.data) return null;

	return (
		<View>
			<Suspense fallback={<ActivityIndicator color={colors.primary} />}>
				<FlatList data={symbols.data} renderItem={SymbolCard} />
			</Suspense>
		</View>
	);
};

export default Body;
