import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResponseModel} from '../model/response.model';
import {APP_URL} from '../app-urls';
import {map} from 'rxjs/operators';
import {Category} from '../model/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[];

  constructor(private httpClient: HttpClient) {
  }

  getCategories(): any {

    return this.httpClient.get<ResponseModel>(APP_URL.BACKEND_CATEGORY)
      .pipe(
        map(
          apiResponse => {
            console.log(apiResponse);
            if (apiResponse.data) {
              return apiResponse.data;
            } else {
              return apiResponse;
            }
          }
        )
      );
  }

  postProduct(images: any, name: any, description: any, categoryId: any,
              startDate: any, startTime: any, endDate: any, endTime: any, price: any): any {

    const productDetail = {name, description, categoryId, startDate, startTime, endDate, endTime, price};

    const formData = new FormData();
    formData.append('productDetail', JSON.stringify(productDetail));

    for (const img of images) {
      formData.append('images', img, img.name);
    }

    return this.httpClient.post<ResponseModel>(APP_URL.BACKEND_PRODUCT, formData).pipe(
      map(
        apiResponse => {
          console.log(apiResponse);
          return apiResponse;
        }
      )
    );
  }

  getProductDetail(productId: any): any {

    return this.httpClient.get<ResponseModel>(APP_URL.getProductDetail(productId))
      .pipe(
        map(
          apiResponse => {
            console.log(apiResponse);
            if (apiResponse.data) {
              return apiResponse.data;
            } else {
              return apiResponse;
            }
          }
        )
      );
  }

  getProducts(searchValue: any, expired: boolean, live: boolean, upcoming: boolean): any {

    let url = APP_URL.BACKEND_PRODUCT;
    if (searchValue) {
      url = url + '?searchValue=' + searchValue;
    }

    return this.httpClient.get<ResponseModel>(url)
      .pipe(
        map(
          apiResponse => {
            console.log(apiResponse);
            if (apiResponse.data) {
              return apiResponse.data;
            } else {
              return apiResponse;
            }
          }
        )
      );
  }

  bidOnProduct(productId: any, bidPrice: any) {

    const bidReq = {productId, bidPrice};
    const url = APP_URL.getBidOnProductUrl(productId);
    return this.httpClient.post<ResponseModel>(url, bidReq).pipe(
      map(
        apiResponse => {
          console.log(apiResponse);
          return apiResponse;
        }
      )
    );
  }

  addToCart(productId: any) {

    const productIds = [productId];
    const cartRequest = {productIds};
    const url = APP_URL.BACKEND_ADD_TO_CART;

    return this.httpClient.post<ResponseModel>(url, cartRequest).pipe(
      map(
        apiResponse => {
          console.log(apiResponse);
          return apiResponse;
        }
      )
    );
  }

}
