import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NodeDataService {

  constructor(private http: HttpClient) {

  }
  getNodes(): Observable<any> {
    return this.http.get('./assets/flare.json');
  }
}


