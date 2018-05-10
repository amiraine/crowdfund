import { Component, OnInit } from '@angular/core';
import { Fundraiser } from '../fundraiser.model';
import {ProjectService} from '../project.service';

@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.css'],
  providers: [ProjectService]
})
export class NewformComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(
    title:string,
    description:string,
    goal:number,
    type:string,
    genre:string
  ){
    var newProject: Fundraiser = new Fundraiser(title,description,goal,0,type,genre);
    this.projectService.addProject(newProject);
  }
}
