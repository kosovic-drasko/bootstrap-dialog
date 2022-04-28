import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  private _refreshrequired = new Subject<void>();

  get Refreshrequired() {
    return this._refreshrequired;
  }

  constructor(private http: HttpClient) { }

  apiurl = "https://localhost:44308/Employee";
  desturl = "https://localhost:44308/Designation"

  GetEmployee() {
    return this.http.get(this.apiurl);
  }
  SaveEmployee(inputdata: any) {
    return this.http.post(this.apiurl, inputdata).pipe(
      tap(() => {
        this._refreshrequired.next();
      })
    );
  }
  GetEmployeebycode(code: any) {
    return this.http.get(this.apiurl + '/' + code);
  }
  RemoveEmployee(code: any) {
    return this.http.delete(this.apiurl + '/' + code);
  }

  GetDesignation() {
    return this.http.get(this.desturl);
  }
}
