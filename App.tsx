import { Text } from "@rneui/base";
import { SearchBarAndroid } from "@rneui/base/dist/SearchBar/SearchBar-android";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Search from "./src/components/Search/Search";
import SymbolList from "./src/components/SymbolList/SymbolList";
import { ColorProvider } from "./src/hooks/useColors";

export default function App() {
	return (
		<SafeAreaProvider>
			<ColorProvider>
				<View style={[styles.container]}>
					<StatusBar style="auto" />
					<SafeAreaView>
						<Search />
						<SymbolList />
					</SafeAreaView>
				</View>
			</ColorProvider>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
	},
});
