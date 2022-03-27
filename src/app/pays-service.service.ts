import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaysServiceService {

  public continentdetail : any=[];
  public detailscontinents = new BehaviorSubject<any>([]);

  constructor() {}

  getDetails(){
    return this.detailscontinents.asObservable();
  }

  addDetails(product: any){
    this.continentdetail.push(product);
    this.detailscontinents.next(this.continentdetail);

  }

  clearDetails(){
    this.continentdetail = [];
    this.detailscontinents.next(this.continentdetail);
    this.detailscontinents.next(this.continentdetail);

  }


}




