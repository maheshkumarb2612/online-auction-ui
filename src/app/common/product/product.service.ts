import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from '../model/response.model';
import { APP_URL } from '../app-urls';
import { map } from 'rxjs/operators';
import { Category } from '../model/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[];

  constructor(private httpClient: HttpClient) { }

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

  postProduct(images: any, productName: any, productDesc: any, category: any,
    startDate: any, startTime: any, endDate: any, endTime: any, price: any) {

  }

}
