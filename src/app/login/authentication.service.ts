import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


class MyValidation {
  static ShouldNotSagar(control: AbstractControl): ValidationErrors | null {
    console.log("WE ARE IN Validation....");
    //control.parent // the whole form // 
    // that means you can access any other value from it
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

@Injectable()
export class AuthenticationService {
  $IsValid: Observable<boolean>;
  private IsValidJSubject: BehaviorSubject<boolean>;

  constructor(private route: Router, private httpClient: HttpClient) {
    this.IsValidJSubject = new BehaviorSubject<boolean>(true);
    this.$IsValid = this.IsValidJSubject.asObservable();
  }

  InitializedForm() {
    return new FormGroup({
      userName: new FormControl('',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(3),
          MyValidation.ShouldNotSagar
        ],
        [

        ]),
      Password: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
    });
  }

  DoLogin(data: {
    userName: string | null | undefined;
    Password: string | null | undefined;
  }) {
    this.httpClient
      .post<{ token: string }>('http://localhost:4000/signin', {
        UserName: data.userName,
        Password: data.Password,
      })
      .subscribe((res: { token: string }) => {
        if (res && res.token) {
          localStorage.setItem('token', res.token);
          this.route.navigate(['/customer']);
          this.IsValidJSubject.next(true);

        } else {
          this.IsValidJSubject.next(false);
        }
      });
  }
}
