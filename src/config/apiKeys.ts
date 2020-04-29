interface SheetsConfig {
    apiKey: string | undefined;
    clientId: string | undefined;
    discoveryDocs: string[] | undefined;
    spreadsheetId: string | undefined;
}

const sheetsConfig: SheetsConfig = {
    apiKey: process.env.REACT_APP_GSHEETS_API_KEY,
    clientId: process.env.REACT_APP_GSHEETS_CLIENT_ID,
    discoveryDocs:
        ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
    spreadsheetId: process.env.REACT_APP_SPREADSHEET_ID
};

export default sheetsConfig