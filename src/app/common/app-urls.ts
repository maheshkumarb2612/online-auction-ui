import {environment} from 'src/environments/environment';

const serverUrl = environment.baseUrl;

export const APP_URL = {

  HOST: '/',
  HOME: '/home',
  LOGIN: '/login',
  LOGOUT: '/logout',
  CART: '/cart',
  PRODUCT_LISTING: '/product-listing',
  BACKEND_LOGIN: serverUrl + '/login',
  BACKEND_LOGOUT: serverUrl + '/logout',
  BACKEND_REGISTER: serverUrl + '/register',
  BACKEND_PROFILE: serverUrl + '/profile',
  BACKEND_CATEGORY: serverUrl + '/category',
  BACKEND_PRODUCT: serverUrl + '/product',
  BACKEND_DOWNLOAD_IMAGE: serverUrl + '/download',
  BACKEND_ADD_TO_CART: serverUrl + '/addToCart',
  BACKEND_CART_PRODUCTS: serverUrl + '/cartProducts',
  BACKEND_REMOVE_FROM_CART: serverUrl + '/removeFromCart',

  getProductDetail(productId: any): any {
    return this.BACKEND_PRODUCT + '/' + productId;
  },

  getDownlodImageUrl(imageId: any): any {
    return this.BACKEND_DOWNLOAD_IMAGE + '?imageId=' + imageId;
  },

  getUiProductSearchUrl(searchValue: any) {
    return this.PRODUCT_LISTING + '?searchValue=' + searchValue;
  },

  getBidOnProductUrl(productId: any) {
    return this.BACKEND_PRODUCT + '/' + productId + '/' + 'bid';
  }
};
