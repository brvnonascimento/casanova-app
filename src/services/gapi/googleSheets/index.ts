import { Gapi } from './types/gapi'

declare global {
    interface Window {
        gapi: Gapi;
    }
}

export const gapi: Gapi = window.gapi;