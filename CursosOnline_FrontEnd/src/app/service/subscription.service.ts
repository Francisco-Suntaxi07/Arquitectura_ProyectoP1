import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SubscriptionModel } from '../model/subscriptionModel'; // Importación correcta del modelo SubscriptionModel

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private urlEndPoint: string = `${environment.apiUrl}/subscriptions`;

  constructor(private http: HttpClient) { }

  public findAll(): Observable<SubscriptionModel[]> {
    return this.http.get<SubscriptionModel[]>(`${this.urlEndPoint}/all`);
  }

  findById(id: number): Observable<SubscriptionModel> {
    return this.http.get<SubscriptionModel>(`${this.urlEndPoint}/${id}`);
  }

  save(subscription: SubscriptionModel): Observable<any> {
    return this.http.post<any>(`${this.urlEndPoint}/save`, subscription);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.urlEndPoint}/delete/${id}`);
  }
}
