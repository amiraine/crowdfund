import { Pipe, PipeTransform } from '@angular/core';
import { Fundraiser } from './fundraiser.model';

@Pipe({
  name: "type",
  pure: false
})

export class TypePipe implements PipeTransform {
  transform(input: Fundraiser[]){
    var output: Fundraiser[] = [];
    for (var i = 0; i <input.length; i++){
      if (input[i].type === "charity"){
        output.push(input[i])
      }
    }
    return output;
  }
}
