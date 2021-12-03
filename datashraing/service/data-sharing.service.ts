import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private messageS = new BehaviorSubject('Default Message');
  currentData= this.messageS.asObservable();

  constructor() { }

  setMessage(message:any){
    // console.log(message);
    this.messageS.next(message);

  }
}
