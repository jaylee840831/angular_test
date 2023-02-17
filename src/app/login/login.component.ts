import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPost } from '../@modules/login/login.module';
import { LoginService } from '../@services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginValue: LoginPost = {
    AccountName: '',
    Password: ''
  }

  constructor(private router:Router, private loginService : LoginService) { }

  ngOnInit(): void {
  }

  login(){

    this.loginService.jwtLogin(this.loginValue).subscribe((data: any) => {
      if (data.Status === 1) {
        localStorage.setItem('jwt', data.Data); //儲存jwt(json web token)在瀏覽器
        this.router.navigateByUrl('/manage');
      }else{
        alert(data.Message)
      }
    });

  }
}
