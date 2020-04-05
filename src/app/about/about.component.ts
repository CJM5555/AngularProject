import { AboutDetails } from './../about-details';
import { AboutService } from './../about.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  author :String;
  title :String;
  description :String;
  details:AboutDetails[];

  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
  }

  add(): void{
    this.aboutService.setDetail(this.title,this.author,this.description);
    this.details = this.aboutService.getDetails();
  }

}
