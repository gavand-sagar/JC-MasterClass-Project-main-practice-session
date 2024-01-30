import { Pipe, PipeTransform } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Pipe({
  name: 'firstLetter',
  pure:false
})
export class FirstLetterPipe implements PipeTransform {

  constructor(private service:MyServiceService){

  }

  transform(value: string): string {
    if(value && value.length > 0){
      return value.charAt(0) + this.service.counter;
    }else{
      return ""
    }
  }

}
