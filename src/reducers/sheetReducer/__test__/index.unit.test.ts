import React from 'react'
import {sheetReducer, initialSheets} from '..'
import sampleSheet from './sample'

it('returns new sheet for NEW_SHEET type', () => {
    const newSheet = {
        type: 'NEW_SHEET',
        sheet: sampleSheet
    }

    const updatedSheet = sheetReducer(initialSheets, newSheet)
    expect(updatedSheet).toEqual({sheet: sampleSheet})
})