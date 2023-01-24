import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { observer } from 'mobx-react';
import React, { useCallback } from 'react';
import { S } from '../../constants/consts';
import { uiStore } from '../../store/UiStore';
import View from '../View/View';

const MainBottomSheet = ({
    children,
}: {
    children: React.ReactNode | React.ReactNode[];
}) => {
    const open = uiStore.isSearchOpen ? 0 : -1;
    const renderBackdrop = useCallback(
        (props) => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                appearsOnIndex={0}
            />
        ),
        []
    );
    return (
        <BottomSheet
            snapPoints={['80']}
            index={open}
            enablePanDownToClose
            backdropComponent={renderBackdrop}
            style={S.flex}
            onClose={() => uiStore.toggleSearch(false)}
        >
            <View style={[S.flex]} bg={'white'}>
                {children}
            </View>
        </BottomSheet>
    );
};

export default observer(MainBottomSheet);
