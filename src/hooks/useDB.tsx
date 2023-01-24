import { createContext, useContext } from 'react';
import Database from '../lib/db';

export const dbContext = createContext<Database | null>(null);

export const DatabaseProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const databaseInstance = new Database();

    return (
        <dbContext.Provider value={databaseInstance}>
            {children}
        </dbContext.Provider>
    );
};

export const useDB = () => {
    const db = useContext(dbContext);
    if (!db) throw new Error('useDB must be used within a DatabaseProvider');

    return { db, insertOne: db.insertOne, getColumn: db.getColumn };
};
