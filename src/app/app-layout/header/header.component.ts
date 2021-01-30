import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private auth: AngularFireAuth,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.auth.signOut();
    this.toast.success('Logout successful');
  }

}
