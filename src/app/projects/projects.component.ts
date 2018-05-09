import { Component, OnInit } from '@angular/core';
import { Fundraiser } from '../fundraiser.model';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  fundraisers: Fundraiser[] = [
    new Fundraiser('Portland Humane Society', 'Help us to help homeless pets in the Portland metro area by giving us the funds to expand our services', 10000, 3000, 'charity'),
    new Fundraiser('SoundCumulus','We\'re building a website to allow independent music artists to upload their original tracks and resell them.',50000,10000,'product'), 
  ]
  constructor() { }

  ngOnInit() {
  }

}
