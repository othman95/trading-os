import React, { createContext, useContext } from 'react';
import { colors } from '../constants/colors';

const ColorsContext = createContext(colors);

export const ColorProvider = ({ children }: any) => {
    return (
        <ColorsContext.Provider value={colors}>
            {children}
        </ColorsContext.Provider>
    );
};

export const useColors = () => {
    const context = useContext(ColorsContext);
    if (context === undefined) {
        throw new Error('useColors must be used within a ColorProvider');
    }
    return context;
};
