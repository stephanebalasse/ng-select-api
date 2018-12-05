import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {delay} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SelectApiService {

  constructor(private http: HttpClient) {
  }

  get(url): Observable<any> {
    return this.http.get(url);
  }
}
