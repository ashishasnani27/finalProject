import { Component,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements AfterViewInit{
  showToast = false;
  toastMessage = '';
  userAccDetails: any; 
  showaddaccountform = false;
  accountNumber : any;
  accountType: any;
  isDepositFormVisible = false;
  isWithdrawFormVisible = false;
  isTransferFormVisible = false;
  depositAmount: any
  withdrawAmount: any
  transferAmount: any
  recipientAccountNumber: any;
  recipientAccountName: any;

  onClickVerify(){
    // event.preventDefault()
    this.http.get<any>(`http://localhost:8081/api/bank/accounts/byaccountnumber/${this.recipientAccountNumber}`).subscribe({
      next: (response) => {
        console.log("response of first api",response);
        this.http.get<any>(`http://localhost:8081/api/bank/customers/${response.customerId}`).subscribe({
          next: (response) => {
            this.recipientAccountName = response.name + "✅";
            console.log("response of second response" ,response);
            
          },
          error: (error) => {
            console.error('Login failed:', error);
            alert('Invalid values');
          }
        });
      },
      error: (error) => {
        console.error('Login failed:', error);
        alert('Invalid values');
      }
    });

  }

  toggleDepositForm() {
    this.isDepositFormVisible = !this.isDepositFormVisible;
  }

  toggleWithdrawForm() {
    this.isWithdrawFormVisible = !this.isWithdrawFormVisible;
  }

  toggleTransferForm() {
    this.isTransferFormVisible = !this.isTransferFormVisible;
  }


  onSubmitDeposit(event: Event) {
    event.preventDefault();
    const createDepositRequest = {
      account : this.userAccDetails.accountNumber,
      amount: this.depositAmount
      
    };
    console.log(createDepositRequest);
    

    this.http.post<any>('http://localhost:8081/api/bank/deposits', createDepositRequest).subscribe({
      next: (response) => {
        console.log('Deposit successful:', response);
       
        this.toastMessage = `${response.amount}₹ is added to account number: ${response.account}`;
          this.showToast = true;
          setTimeout(() => (this.showToast = false), 3000);
         
          // console.log(this.userAccDetails);
          
          this.userAccDetails.balance += +this.depositAmount ;
        
      },
      error: (error) => {
        console.error('Login failed:', error);
        alert('Invalid values');
      }
    });
  }

  onSubmitWithdraw(event: Event) {
    event.preventDefault();
    const createWithdrawRequest = {
      account : this.userAccDetails.accountNumber,
      amount: this.withdrawAmount
      
    };
    console.log(createWithdrawRequest);
    

    this.http.post<any>('http://localhost:8081/api/bank/withdrawals', createWithdrawRequest).subscribe({
      next: (response) => {
        console.log('withdraw successful:', response);
       
        this.toastMessage = `${response.amount}₹ have been withdrawn from account: ${response.account}`;
          this.showToast = true;
          setTimeout(() => (this.showToast = false), 3000);
         
          
          
          this.userAccDetails.balance -= +this.withdrawAmount;
        
      },
      error: (error) => {
        console.error('Login failed:', error);
        alert('Invalid values');
      }
    });
  }

  onSubmitTransfer(event: Event) {
    event.preventDefault();
    const createTransferRequest = {
      sourceAccountNumber : this.userAccDetails.accountNumber,
      targetAccountNumber: this.recipientAccountNumber,
      amount: this.transferAmount
      
    };
    console.log(createTransferRequest);
    

    this.http.post<any>('http://localhost:8081/api/bank/transactions', createTransferRequest).subscribe({
      next: (response) => {
        console.log('Transfer successful:', response);
       
        this.toastMessage = `Transaction successful! ${this.transferAmount} ₹ transferred from account ${this.userAccDetails.accountNumber} to ${this.recipientAccountNumber}`;
          this.showToast = true;
          setTimeout(() => (this.showToast = false), 3000);
          this.showaddaccountform = false
          // console.log(this.userAccDetails);
          
          this.userAccDetails.balance -= +this.transferAmount;
        
      },
      error: (error) => {
        console.error('Login failed:', error);
        alert('Invalid values');
      }
    });
  }
  

  onSubmit() {
    const createAccRequest = {
      accountNumber : this.accountNumber,
      customerId: this.user.id,
      accountType: this.accountType,
      balance: 0,
      
    };
    console.log(createAccRequest);
    

    this.http.post<any>('http://localhost:8081/api/bank/accounts', createAccRequest).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        // Pass the user data to the UserComponent
        this.userAccDetails = response;
        this.toastMessage = `${response.accountNumber} is created successfully`;
          this.showToast = true;
          setTimeout(() => (this.showToast = false), 3000);
          this.showaddaccountform = false
        
      },
      error: (error) => {
        console.error('Login failed:', error);
        alert('Invalid values');
      }
    });
  }
  
  

  isModalVisible = false;

  showModal() {
    this.isModalVisible = true;
  }

  hideModal() {
    this.isModalVisible = false;
  }

  deleteAccount() {
    // Add your delete logic here
    console.log('Account deleted');
    this.router.navigate(['/']);
    this.http.delete<any>('http://localhost:8081/api/bank/customers/'+this.user.id ).subscribe({
      next: (response) => {
        // console.log('Account details', response);
        
        
      },
      error: (error) => {
        console.error('delete failed:', error);
        alert('Invalid credentials');
        
      }
    });
    this.hideModal();
  }

  ngAfterViewInit() {

    this.http.get<any>('http://localhost:8081/api/bank/accounts/'+this.user.id ).subscribe({
      next: (response) => {
        console.log('Account details', response);
        
        this.userAccDetails = response;
        if(response == null){
          this.showaddaccountform = true
          if (this.showaddaccountform) {
            
            setTimeout(() => {
              const inputElement = document.getElementById('customerId') as HTMLInputElement;
              if (inputElement) {
                inputElement.value = this.user.id;  
              }
            });
          }
        }
       
        
      },
      error: (error) => {
        console.error('Login failed:', error);
        alert('Invalid credentials');
        this.showaddaccountform = true
      }
    });

      // Use setTimeout to ensure it runs after the change detection cycle
      setTimeout(() => {
        if (this.user) {
          this.toastMessage = `Welcome, ${this.user.name}!`;
          this.showToast = true;
          setTimeout(() => (this.showToast = false), 3000); // Show toast for 3 seconds
        }
      });
    }
  

  user: any;

  constructor(private http: HttpClient, private router: Router ) {
    // Retrieve user data from the router's navigation state
    this.user = this.router.getCurrentNavigation()?.extras.state?.['user'];
  }


  
}
