import * as SQLite from 'expo-sqlite';
export default class Database {
    private db: SQLite.Database;

    constructor() {
        this.open();
    }

    open() {
        return SQLite.openDatabase(
            'trading.db',
            '1.0',
            'trading database',
            1000000,
            (db) => {
                console.log(db);
                this.db = db;
                this.createTable();
            }
        );
    }

    createTable() {
        this.db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS symbols (id INTEGER PRIMARY KEY NOT NULL, symbol TEXT);'
            );
        });
    }

    // insertData = async ({
    //     query,
    //     data,
    //     cbSuccess,
    //     cbError,
    // }: {
    //     query: string;
    //     data: any[];
    //     cbSuccess: () => void;
    //     cbError: () => void;
    // }) => {
    //     try {
    //         this.db.transaction((tx) => {
    //             const promises = data.map((name) =>
    //                 tx.executeSql('INSERT INTO myTable (name) VALUES (?)', [
    //                     name,
    //                 ])
    //             );
    //             return Promise.all(promises);
    //         });
    //         console.log('Data inserted!');
    //     } catch (error) {
    //         console.log(`Error inserting data: ${error}`);
    //     }
    // };

    insertOne = (tableName: string, columnName: string, param: string) =>
        new Promise((resolve, reject) => {
            this.db.transaction((tx) => {
                tx.executeSql(
                    `INSERT INTO ${tableName} (${columnName}) VALUES (?)`,
                    [param],
                    (_, { rows: { _array } }) => resolve(_array),
                    (_, error) => {
                        reject(error.message);
                        return false;
                    }
                );
            });
        });

    getColumn = (tableName: string, columnName: string, param: string) =>
        new Promise((resolve, reject) => {
            this.db.transaction((tx) => {
                tx.executeSql(
                    `SELECT * FROM ${tableName} WHERE ${columnName} = ?`,
                    [param],
                    (_, { rows: { _array } }) => resolve(_array),
                    (_, error) => {
                        reject(error.message);
                        return false;
                    }
                );
            });
        });

    // insertMany = (tableName: string, columnNames: string[], params: string) =>
    // new Promise((resolve, reject) => {
    //     this.db.transaction((tx) => {
    //         tx.executeSql(
    //             `INSERT INTO ${tableName} (${columnNames}) VALUES (?)`,
    //             [param],
    //             (_, { rows: { _array } }) => resolve(_array),
    //             (_, error) => {
    //                 reject(error.message);
    //                 return false;
    //             }
    //         );
    //     });
    // });

    getSymbols() {
        const symbols = [];
        this.db.transaction((tx) => {
            return tx.executeSql(
                'SELECT * FROM symbols',
                [],
                (_, result) => {
                    for (let i = 0; i < result?.[0].rows.length || 0; i++) {
                        symbols.push(result?.[0].rows.item(i).symbol);
                    }
                },
                (_, error) => {
                    console.log(error);
                    return false;
                }
            );
        });
    }
}
