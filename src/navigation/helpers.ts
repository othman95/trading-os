import { createNavigationContainerRef } from '@react-navigation/native';
import { StackParamList } from '../types';

export const navigationRef = createNavigationContainerRef<StackParamList>();

export function navigate<
    V extends keyof StackParamList,
    T extends StackParamList
>(name: V, params?: T[V]) {
    console.log(navigationRef.isReady(), name, params);
    if (navigationRef.isReady()) {
        // @ts-ignore
        navigationRef.navigate(name, params);
    }
}
