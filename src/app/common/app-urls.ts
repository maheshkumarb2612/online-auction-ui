import { environment } from 'src/environments/environment'

const serverUrl = environment.baseUrl;

export const APP_URL = {

    HOST: '/',
    HOME: '/home',
    LOGIN: '/login',
    LOGOUT: '/logout',
    BACKEND_LOGIN: serverUrl + '/login',
    BACKEND_LOGOUT: serverUrl + '/logout',
    BACKEND_REGISTER: serverUrl + '/register'
};