import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MainScreen from '../Features/Main/MainScreen';
import SymbolScreen from '../Features/Symbol/SymbolScreen';
import { useColors } from '../hooks/useColors';
import { StackParamList } from '../types';
import { navigationRef } from './helpers';

const Stack = createNativeStackNavigator<StackParamList>();
const NavContainer = () => {
    const colors = useColors();
    return (
        <NavigationContainer
            ref={navigationRef}
            onReady={() => console.log('ready')}
        >
            <Stack.Navigator
                initialRouteName="MainScreen"
                screenOptions={{
                    headerTintColor: colors.accent,
                    headerTitleAlign: 'center',
                    headerTitle: 'OneDev',
                }}
            >
                <Stack.Screen name="MainScreen" component={MainScreen} />
                <Stack.Screen name="SymbolScreen" component={SymbolScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavContainer;
