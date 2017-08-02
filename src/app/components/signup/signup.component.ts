import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../../router.animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [moveIn()]
})
export class SignupComponent implements OnInit {
  '[@moveIn]': string;
  '[@fallIn]': string;

  state = '';
  error: any;

  constructor(public af: AngularFireAuth, private router: Router) {

  }

  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);

      this.af.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password)
        .then(
        (success) => {
          console.log(success);
          this.router.navigate(['/login'])
        }).catch(
        (err) => {
          console.log(err);
          this.error = err;
        })
    }
  }

  ngOnInit() {
  }

}
