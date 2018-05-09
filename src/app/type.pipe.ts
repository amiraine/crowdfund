import { Pipe, PipeTransform } from '@angular/core';
import { Fundraiser } from './fundraiser.model';

@Pipe({
  name: "type",
  pure: false
})

export class TypePipe implements PipeTransform {
  transform(input: Fundraiser[],fundType){
    var output: Fundraiser[] = [];
    if(fundType === "allProjects"){
      for(var i = 0; i <input.length; i++){
        if(input[i].type != ""){
          output.push(input[i]);
        }
      }
      return output;
    } else if (fundType === "charity"){
      for(var i = 0; i < input.length; i++){
        if(input[i].type ==="charity"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (fundType === "product"){
      for(var i = 0; i < input.length; i++){
        if(input[i].type ==="product"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (fundType === "animals"){
      for(var i = 0; i <input.length; i++){
        if(input[i].genre === "animals"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (fundType === "community"){
      for(var i = 0; i < input.length; i++){
        if(input[i].genre === "community"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (fundType === "technology"){
      for(var i = 0; i < input.length; i++){
        if(input[i].genre === "technology"){
          output.push(input[i]);
        }
      }
      return output;
    }
  }
}
