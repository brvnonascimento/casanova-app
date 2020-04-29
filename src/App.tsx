import React, { useEffect, useReducer } from 'react';
import './App.css';
import { Form } from './components/main/form';

import { SheetResponse } from './services/api/googleSheets/types/response'
import { gapi } from './services/api/googleSheets'
import sheetsConfig from './config/apiKeys'
import {initialSheets, sheetReducer} from './reducers/sheetReducer'

const { apiKey, clientId, discoveryDocs, spreadsheetId } = sheetsConfig

const App: React.FC = () => {
  const [sheets, dispatch] = useReducer(sheetReducer, initialSheets)

  useEffect(() => {
    try {
      gapi.load("client", initClient)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    console.log(sheets)
  }, [sheets])

  const initClient = async () =>
    gapi.client
      .init({
        apiKey: apiKey,
        discoveryDocs: discoveryDocs,
        clientId: clientId,
        scope: 'https://www.googleapis.com/auth/spreadsheets.readonly'
      }).then(() => {
        gapi.client.load('sheets', 'v4', () => {
          gapi.client.sheets.spreadsheets.values
            .get({
              spreadsheetId: spreadsheetId,
              range: "A:K"
            })
            .then((res: SheetResponse) => {
              const data = res.result.values
              dispatch({
                type: 'NEW_SHEET',
                sheet: data
              })

              console.log(data)
              console.log(res)
            })
        })
      })



  return (
    <div className="App">
      <header>
        <h1>Casa Nova App</h1>
      </header>

      <main>
        {/* <Form /> */}
      </main>
    </div>
  );
}

export default App;
