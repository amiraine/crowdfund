import { Component, OnInit } from '@angular/core';
import { Fundraiser } from '../fundraiser.model';
import { Router } from '@angular/router';
import {ProjectService} from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {

  fundraisers: FirebaseListObservable<any[]>;

  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.fundraisers = this.projectService.getProjects();
  }


  fundingProgress(project){
    if(project.current/project.goal >=1){
      return "bg-lightgreen"
    } else if (project.current/project.goal >= 0.5 && project.current/project.goal <1){
      return "bg-yellow"
    } else {
      return "bg-lightcoral"
    }
  }
  filterByType: string = "allProjects";
  onChange(optionFromMenu) {
    this.filterByType = optionFromMenu;
  }

  goToDetails(clickedProject) {
    this.router.navigate(['projects', clickedProject.$key])
  }
}
