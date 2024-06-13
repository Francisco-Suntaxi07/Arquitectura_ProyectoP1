import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreatorModel } from '../model/creatorModel';

@Injectable({
  providedIn: 'root'
})
export class CreatorService {
  
  private urlEndPoint: string = `${environment.apiUrl}/creators`;

  constructor(private http: HttpClient) { }

  public findAll(): Observable<CreatorModel[]> {
    return this.http.get<CreatorModel[]>(`${this.urlEndPoint}/all`);
  }

  findById(id: string): Observable<CreatorModel> {
    return this.http.get<CreatorModel>(`${this.urlEndPoint}/${id}`);
  }

  save(creator: CreatorModel): Observable<any> {
    return this.http.post<any>(`${this.urlEndPoint}/save`, creator);
  }

  delete(id: string): Observable<any> {
    return this.http.delete<any>(`${this.urlEndPoint}/delete/${id}`);
  }

}
