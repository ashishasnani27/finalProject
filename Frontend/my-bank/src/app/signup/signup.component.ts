import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  name: any
  address: any
  phone: any
  email: any
  password: any

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const signupRequest = {
      name: this.name,
      address: this.address,
      phone: this.phone,
      email: this.email,
      password: this.password
    };
    console.log(signupRequest);
    

    this.http.post<any>('http://localhost:8081/api/bank/customers', signupRequest).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        // Pass the user data to the UserComponent
        this.router.navigate(['/user'], { state: { user: response } });
      },
      error: (error) => {
        console.error('Login failed:', error);
        alert('Invalid credentials');
      }
    });
  }
}
