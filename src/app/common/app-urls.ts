import { environment } from 'src/environments/environment'

const serverUrl = environment.baseUrl;

export const APP_URL = {
    LOGIN: serverUrl + '/login',
    LOGOUT: serverUrl + '/logout',
    REGISTER: serverUrl + '/register'
};
