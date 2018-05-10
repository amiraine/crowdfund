import { Injectable } from '@angular/core';
import { Fundraiser } from './fundraiser.model';
// import {FUNDRAISERS} from './mock-projects';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('fundraisers');
  }

  getProjects(){
    return this.projects;
  }
  addProject(newProject: Fundraiser){
    this.projects.push(newProject);
  }
  getProjectById(projectId: number){
    return this.database.object('projects/'+projectId)
  }
}
