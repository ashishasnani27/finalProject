import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [NgIf, FormsModule]  // Import FormsModule for ngModel two-way binding
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const loginRequest = {
      email: this.email,
      password: this.password
    };

    this.http.post<any>('http://localhost:8081/api/bank/login', loginRequest).subscribe({
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
