import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {UserLogin} from "./userLogin";
import { RestDataService } from '../rest-data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginRequest: UserLogin = {
    email: "himanshu.kumar@newgen.co.in",
    password: "system123#"
  }
  users: Object;
  constructor(
    private router: Router,
    private restDataServiceCall: RestDataService
  ) { }

  ngOnInit() {
    this.restDataServiceCall.loginAuth(this.loginRequest).subscribe(data => {
      this.users = data
      console.log(this.users);
    }
  );
  }
  firstClick() {
    this.restDataServiceCall.myFunc();
  }
}
