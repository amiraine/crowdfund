import { Injectable } from '@angular/core';
import { Fundraiser } from './fundraiser.model';
import {FUNDRAISERS} from './mock-projects';

@Injectable()
export class ProjectService {

  constructor() { }

  getProjects(){
    return FUNDRAISERS;
  }
  getProjectById(projectId: number){
    for (var i=0; i< FUNDRAISERS.length-1; i++){
      if(FUNDRAISERS[i].id === projectId){
        return FUNDRAISERS[i];
      }
    }
  }
}
