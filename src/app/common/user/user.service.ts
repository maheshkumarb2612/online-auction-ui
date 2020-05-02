import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ResponseModel} from '../model/response.model';
import {APP_URL} from '../app-urls';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  getProfile() {

    return this.httpClient.get<ResponseModel>(APP_URL.BACKEND_PROFILE)
      .pipe(
        map(
          apiResponse => {
            console.log(apiResponse);
            return apiResponse;
          }
        )
      );
  }

  updateProfile(firstName: any, lastName: any, contact: any, gender: any, address: any, bio: any): any {
    return this.httpClient.put<ResponseModel>(APP_URL.BACKEND_PROFILE, {
      firstName,
      lastName,
      contact,
      gender,
      address,
      bio
    });
  }

  changePassword(username: any, currentPassword: any, newPassword: any, confirmPassword: any): any {
    return this.httpClient.put(APP_URL.BACKEND_CHANGE_PASSWORD, {
      username,
      currentPassword,
      newPassword,
      confirmPassword
    });
  }

  resetPassword(username: any): any {
    return this.httpClient.put(APP_URL.BACKEND_RESET_PASSWORD, {
      username
    });
  }


  getOrders(searchValue: any): any {

    let url = APP_URL.BACKEND_ORDERS;
    if (searchValue) {
      url = url + '?searchValue=' + searchValue + '&pageNum=1&pageSize=100&sortBy=startDateTime&sortOrder=desc';
    } else {
      url = url + '?pageNum=1&pageSize=100&sortBy=startDateTime&sortOrder=desc';
    }
    return this.httpClient.get<ResponseModel>(url)
      .pipe(
        map(
          apiResponse => {
            console.log(apiResponse.success);
            if (apiResponse.data) {
              return apiResponse.data;
            } else {
              return apiResponse;
            }
          }
        )
      );
  }
}
