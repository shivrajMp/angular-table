import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  event: EventEmitter<any> = new EventEmitter();
  constructor(private httpService: HttpClient) { }

  getUserData(): Observable<any>{
    return this.httpService.get('https://jsonplaceholder.typicode.com/users');
  }

  emitEvent(value:any){
    this.event.emit(value);
  }

  getEvent(){
    return this.event;
  }
}
