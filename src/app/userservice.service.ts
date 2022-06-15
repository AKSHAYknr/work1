import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  public users =  new Subject<any>();

  adduser(name: any, age: any) {
    this.users.next({ name, age });
  }
  receiveuser(): Observable<any> {
    return this.users.asObservable();
  }

  constructor() {}
}
