import { environment } from 'src/environments/environment'

const serverUrl = environment.baseUrl;

export const APP_URL = {

    HOST: '/',
    HOME: '/home',
    LOGIN: '/login',
    LOGOUT: '/logout',
    BACKEND_LOGIN: serverUrl + '/login',
    BACKEND_LOGOUT: serverUrl + '/logout',
    BACKEND_REGISTER: serverUrl + '/register',
    BACKEND_PROFILE: serverUrl + '/profile',
    BACKEND_CATEGORY: serverUrl + '/category'
};
