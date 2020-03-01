import { environment } from 'src/environments/environment'

const serverUrl = environment.baseUrl;

export const APP_URL = {

    HOME: '/home',
    LOGIN: serverUrl + '/login',
    LOGOUT: serverUrl + '/logout',
    REGISTER: serverUrl + '/register'
};
