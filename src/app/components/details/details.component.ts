import { Component, OnInit } from '@angular/core';
import {PaysServiceService } from 'src/app/pays-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  Details : any=[];

  constructor(private service : PaysServiceService) { }

  ngOnInit(): void {
    this.service.getDetails().subscribe((data)=>{
      this.Details = data;
    });
  }


}
