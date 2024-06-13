import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from '../model/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlEndPoint: string = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) { }

  public findAll(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${this.urlEndPoint}/all`);
  }

  findById(id: string): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.urlEndPoint}/${id}`);
  }

  save(user: UserModel): Observable<any> {
    return this.http.post<any>(`${this.urlEndPoint}/save`, user);
  }

  delete(id: string): Observable<any> {
    return this.http.delete<any>(`${this.urlEndPoint}/delete/${id}`);
  }

}
