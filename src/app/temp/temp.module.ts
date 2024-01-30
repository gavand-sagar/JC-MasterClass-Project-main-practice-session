import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from '../user-info/user-info.component';
import { UserImageComponent } from '../user-image/user-image.component';
import { FirstLetterPipe } from './first-letter.pipe';
import { ColorYellowDirective } from './color-yellow.directive';
import { MyServiceService } from './my-service.service';
@NgModule({
  declarations: [
    UserInfoComponent,
    UserImageComponent,
    FirstLetterPipe,
    ColorYellowDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserInfoComponent,
  ],
  providers: [
    {
      provide: MyServiceService,
      useClass: MyServiceService
    }
  ]
})
export class TempModule { }
