import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Observable, map, of } from 'rxjs';

class MyValidation {
  static IsExists(http: HttpClient): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      return http.post<{ isAlreadyExists: boolean }>('http://localhost:4000/exists', {
        username: control.value
      })
    }
  }

  static ShouldNotSagar(control: AbstractControl): ValidationErrors | null {
    if (control.value == "Sagar") {
      return {
        shouldNotSagar: true
      }
    } else {
      return {
        shouldNotSagar: false
      }
    }
  }

}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  form: FormGroup;

  constructor(private http: HttpClient) {
    this.form = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ], [
        MyValidation.IsExists(this.http)
      ])
    })
  }

}
