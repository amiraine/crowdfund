import { Component, OnInit } from '@angular/core';
import { Fundraiser } from '../fundraiser.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  fundraisers: Fundraiser[] = [
    new Fundraiser('Portland Humane Society', 'Help us to help homeless pets in the Portland metro area by giving us the funds to expand our services', 10000, 3000, 'charity','animals',1),
    new Fundraiser('SoundCumulus','We\'re building a website to allow independent music artists to upload their original tracks and resell them.',50000,25000,'product','technology',2),
    new Fundraiser('Ami\'s Coffee Fund', 'There is an unfulfilled need for caffeine. Help your favorite local developer stay properly fueled for the long, cold evenings of coding ahead.', 100000,120000, 'charity','community',3),
    new Fundraiser('Ice Cream Antisocial', 'Are you a shut-in? Do you hate dealing with other people? Do you love ice cream? Fear not, for we are Ice Cream Antisocial, an ice cream delivery startup that will leave you sweet, cold, ice cream right on your doorstep, no human interaction required!', 500000,35000,'product', 'technology',4)
  ]
  constructor(private router: Router) { }

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
  goToDetails(clickedProject: Fundraiser) {
    this.router.navigate(['fundraisers', clickedProject.id])
  }
}
