export interface Gapi {
    client: Client;
    load: Function;
    auth2: any;
}

export interface Client {
    init: Function;
    sheets: Sheets;
    load: Function;
}

export interface Sheets {
    spreadsheets: {
        values: {
            get: Function;
        }
    }
}
