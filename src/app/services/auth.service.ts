import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private toastr: ToastrService
  ) { }

  registerUser (email: string , password: string) {
    this.auth.createUserWithEmailAndPassword(email , password).then(data => {
      console.log(data);
      this.toastr.success('Sign up successful');
      this.router.navigateByUrl('');
    }).catch(err => {
      console.log(err);
      this.toastr.error('Can not register user');
    })
  }

  loginUser (email: string , password: string) {
    this.auth.signInWithEmailAndPassword(email , password).then(data => {
      console.log(data);
      this.toastr.success('Login successful');
      this.router.navigateByUrl('');
    }).catch(err => {
      console.log(err);
      this.toastr.error('Can not login user');
    })
  }



}
