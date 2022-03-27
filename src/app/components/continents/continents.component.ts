import { Component, Input, OnInit } from '@angular/core';
import { PaysServiceService } from 'src/app/pays-service.service';
import { COUNTRIES } from 'src/data/countries';

@Component({
  selector: 'app-continents',
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.css']
})
export class ContinentsComponent implements OnInit {
  @Input() Africa = 'Africa';
  @Input() Americas = 'Americas';
  @Input() Asia = 'Asia';
  @Input() Europe = 'Europe';
  @Input() Oceania = 'Oceania';


  constructor(private service : PaysServiceService) {}
  countriesWithoutFilter: Array<any> = COUNTRIES;

  countries: Array<any>=COUNTRIES;
  continentsWithFilter: boolean = false;



  ngOnInit(): void {
  }
  addDetails(detail : any){
    this.service.addDetails(detail);
  }


  Filtrage(nomRegion: string){
    var countryFilterVar = nomRegion ;

    this.countries= this.countriesWithoutFilter.filter(function (fl:any){
  return fl.region.toString().toLowerCase().includes(
    countryFilterVar.toString().trim().toLowerCase())
    });

    this.continentsWithFilter = true;
  }

}


