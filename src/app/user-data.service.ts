import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  public url = 'https://jsonplaceholder.typicode.com/';

  constructor(private httpClient: HttpClient) { }

  getUserData() {
    return this.httpClient.get(this.url);
  }

  commonService(data: any): Observable<{}> {
    if (data.urlEndpoint == 'users') {
      return this.httpClient.get(this.url + data.urlEndpoint);
    }
  }
}
