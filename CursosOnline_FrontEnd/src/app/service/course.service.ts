import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CourseModel } from '../model/courseModel';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private urlEndPoint: string = `${environment.apiUrl}/courses`;

  constructor(private http: HttpClient) { }

  public findAll(): Observable<CourseModel[]> {
    return this.http.get<CourseModel[]>(`${this.urlEndPoint}/all`);
  }

  public findById(id: string): Observable<CourseModel> {
    return this.http.get<CourseModel>(`${this.urlEndPoint}/${id}`);
  }

  public save(course: CourseModel): Observable<any> {
    return this.http.post<any>(`${this.urlEndPoint}/save`, course);
  }

  public delete(id: string): Observable<any> {
    return this.http.delete<any>(`${this.urlEndPoint}/delete/${id}`);
  }
}
