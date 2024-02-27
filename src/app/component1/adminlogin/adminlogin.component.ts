import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
  adminloginForm =this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })
constructor(
  private fb: FormBuilder,
  private authService: AuthService,
  private router: Router,
  private msgService: MessageService
) { } 
get email() {
  return this.adminloginForm.controls['email'];
}
get password() { return this.adminloginForm.controls['password']; }

aloginUser() {
  const { email, password } = this.adminloginForm.value;
  this.authService.getUserByEmail(email as string).subscribe(
    response => {
      if (response.length > 0 && response[0].password === password) {
        sessionStorage.setItem('email', email as string);
        this.router.navigate(['/home']);
      } else {
        this.msgService.add({ severity: 'error', summary: 'Error', detail: 'email or password is wrong' });
      }
    },
    error => {
      this.msgService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
    } 

  )
}
}