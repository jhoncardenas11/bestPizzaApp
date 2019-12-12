import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
  });

  data: any;
  users: any;

  user1: any;
  user2: any;

  constructor(private service: ServiceService, private router: Router) { }

  async ngOnInit() {
    this.data = await this.service.getData();
    this.users = this.data.response.users;
    this.user1 = this.users[0];
    this.user2 = this.users[1];
  }

  singin() {
    // tslint:disable-next-line: max-line-length
    if (this.loginForm.value.email === this.user1.email && this.loginForm.value.password === this.user1.password || this.loginForm.value.email === this.user2.email && this.loginForm.value.password === this.user2.password) {
      localStorage.setItem('email', this.loginForm.value.email);
      this.router.navigate(['/restaurants']);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario o contraseña no coinciden',
      });
    }
  }

}
