import { Component, OnInit } from '@angular/core';
import { PaysServiceService } from 'src/app/pays-service.service';
import { COUNTRIES } from 'src/data/countries';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.css']
})
export class PaysComponent implements OnInit {


  constructor(private service : PaysServiceService) {}
  payslist: any ="";
  PaystWithoutFilter: Array<any> = COUNTRIES;
  Payslist: Array<any> = COUNTRIES;



  ngOnInit(): void {
  }
  addDetails(detail : any){
    this.service.addDetails(detail);
  }

  Filtrage(){
    var PayslistVar = this.payslist;

    this.Payslist= this.PaystWithoutFilter.filter(function (fl:any){
    return fl.name.common.toString().toLowerCase().includes(
    PayslistVar.toString().trim().toLowerCase())
    });
  }


}
