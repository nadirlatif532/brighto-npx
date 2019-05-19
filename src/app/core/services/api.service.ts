import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment as env } from '../../../environments/environment';

const BASE_URL = env.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private http: HttpClient) {}

  public get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(BASE_URL + path, { params }).pipe(catchError(this.formatErrors));
  }

  public post(path: string, body: object = {}): Observable<any> {
    return this.http.post(BASE_URL + path, JSON.stringify(body), this.options).pipe(catchError(this.formatErrors));
  }
  
  public postStringified(path: string, body: object = {}): Observable<any> {
    return this.http.post(BASE_URL + path, body).pipe(catchError(this.formatErrors));
  }

  public put(path: string, body: object = {}): Observable<any> {
    return this.http.put(BASE_URL + path, JSON.stringify(body), this.options).pipe(catchError(this.formatErrors));
  }
  public putStringified(path: string, body: object = {}): Observable<any> {
    return this.http.put(BASE_URL + path, body).pipe(catchError(this.formatErrors));
  }

  public delete(path: string): Observable<any> {
    return this.http.delete(BASE_URL + path).pipe(catchError(this.formatErrors));
  }

  public formatErrors(error: any): Observable<any> {
    return throwError(error.error);
  }
}
