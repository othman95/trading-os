import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import React, { Suspense } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Loading from './src/components/Loading/Loading';
import { ColorProvider } from './src/hooks/useColors';
import { DatabaseProvider } from './src/hooks/useDB';
import NavContainer from './src/navigation/NavContainer';

const queryClient = new QueryClient();
function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <StatusBar style="auto" />
            <DatabaseProvider>
                <SafeAreaProvider>
                    <ColorProvider>
                        <Suspense fallback={<Loading />}>
                            <GestureHandlerRootView style={{ flex: 1 }}>
                                <NavContainer />
                            </GestureHandlerRootView>
                        </Suspense>
                    </ColorProvider>
                </SafeAreaProvider>
            </DatabaseProvider>
        </QueryClientProvider>
    );
}

export default App;
