import { Component, OnInit } from '@angular/core';
import { Fundraiser } from '../fundraiser.model';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  fundraisers: Fundraiser[] = [
    new Fundraiser('Portland Humane Society', 'Help us to help homeless pets in the Portland metro area by giving us the funds to expand our services', 10000, 3000, 'charity','animals'),
    new Fundraiser('SoundCumulus','We\'re building a website to allow independent music artists to upload their original tracks and resell them.',50000,25000,'product','technology'),
    new Fundraiser('Ami\'s Coffee Fund', 'There is an unfulfilled need for caffeine. Help your favorite local developer stay properly fueled for the long, cold evenings of coding ahead.', 100000,120000, 'charity','community'),
    new Fundraiser('Ice Cream Antisocial', 'Are you a shut-in? Do you hate dealing with other people? Do you love ice cream? Fear not, for we are Ice Cream Antisocial, an ice cream delivery startup that will leave you sweet, cold, ice cream right on your doorstep, no human interaction required!', 500000,35000,'product', 'technology')
  ]
  constructor() { }

  ngOnInit() {
  }
  fundingProgress(project){
    if(project.current/project.goal >=1){
      return "bg-lightgreen"
    } else if (project.current/project.goal >= 0.4 && project.current/project.goal <1){
      return "bg-yellow"
    } else {
      return "bg-lightcoral"
    }
  }
  filterByType: string = "allProjects";
  onChange(optionFromMenu) {
    this.filterByType = optionFromMenu;
  }
}
