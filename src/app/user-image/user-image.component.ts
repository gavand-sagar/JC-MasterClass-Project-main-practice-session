import { Component } from '@angular/core';
import { MyServiceService } from '../temp/my-service.service';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrl: './user-image.component.css',
  
})
export class UserImageComponent {

  constructor(public service:MyServiceService){
  }

}
