import { Injectable } from '@angular/core';
import { AboutDetails } from './about-details';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
 // detailA: AboutDetails = new AboutDetails("Test","John","Simple description");
 // detailB: AboutDetails = new AboutDetails("Test","John","Simple description");
  details: AboutDetails[] = [];
  temp : AboutDetails ;

  constructor() { 
   // this.details.push(this.detailA);
   // this.details.push(this.detailB);
  }

  public setDetail(title:String,author:String,desc:String): void{
    this.temp = new AboutDetails(title,author,desc);
    this.details.push(this.temp);
  }

  public getDetails(): AboutDetails[]{
    return this.details;
  }
}
