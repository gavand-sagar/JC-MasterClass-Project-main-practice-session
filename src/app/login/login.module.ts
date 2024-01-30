import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { TempModule } from '../temp/temp.module';

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [
    ReactiveFormsModule, 
    CommonModule, 
    HttpClientModule,
    TempModule
  ],
  providers: [AuthenticationService],
})
export class LoginModule {}
