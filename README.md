# PIGGYBANK

*PiggyBank* is a web application designed to simulate basic banking operations.  It allows users to sign up, log in, view their account balance, deposit and withdraw funds, and transfer money between accounts.  This project was developed as part of a company initiative [mention company name or project context if applicable].

## Technologies Used

* *Frontend:* Angular (v16 or later - please confirm your version)
* *Backend:* Spring Boot (v3.x or later - please confirm your version)
* *Database:*  (Please specify - e.g., MySQL, PostgreSQL, H2, etc. and version)
* *Build Tools:* (Please specify any other relevant tools: Maven, Gradle, npm, etc.)
* *Other:*  (e.g., Spring Data JPA, Lombok, etc.)

## Features

* *User Authentication:* Secure user signup and login functionality.
* *Account Management:* Users can view their account details, including balance and account type.  Provision for adding new accounts (one account per user currently, consider expanding).
* *Deposit:*  Deposit funds into an account.
* *Withdrawal:* Withdraw funds from an account, with balance checks to prevent overdrafts.
* *Transfer:* Transfer funds between accounts, including recipient account verification.
* *Transaction History:* (Not implemented in current code, but consider adding a transaction log)
* *Account Deletion:* Allows users to delete their accounts (including cascading delete functionality for associated accounts - important to highlight this).
* *User-Friendly Interface:* Clean and intuitive dashboard for managing finances.
* *Real-time Updates:*  Balance updates are reflected immediately after transactions.  Uses toast notifications to provide feedback to the user.

## Architecture

The project follows a client-server architecture, where the Angular frontend communicates with the Spring Boot backend via a RESTful API.

* *Frontend (Angular):*  Handles user interface and interacts with the backend API.
* *Backend (Spring Boot):*  Provides REST endpoints for user authentication, account management, and transaction processing.  Interacts with the database to persist data.


## Installation and Setup

1. *Prerequisites:*
    * Java JDK (version X - please specify)
    * Node.js and npm (or yarn)
    * [Your Database] (with appropriate drivers/connectors)

2. *Backend Setup:*
    * Clone the project repository.
    * Navigate to the backend directory.
    * Configure the database connection in application.properties (or application.yml).
    * Build the project using Maven/Gradle: ./mvnw clean install (or ./gradlew build).
    * Run the Spring Boot application: java -jar target/your-application.jar (or equivalent).

3. *Frontend Setup:*
    * Navigate to the frontend directory.
    * Install dependencies: npm install (or yarn install).
    * Run the Angular development server: ng serve.

## Usage

1. *Signup:* Access the signup page and create a new account.
2. *Login:*  Login using your credentials.
3. *Dashboard:*  View your account balance and perform actions like deposit, withdrawal, and transfer.
4. *Add Account:*  If you don't have an existing account, you can add a new account from the dashboard.
5. *Transactions:*  Make deposits, withdrawals, and transfers by filling in the respective forms.


## API Endpoints

### Customer Management

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/bank/customers | Create a new customer. |
| GET | /api/bank/customers | Retrieve all customers (admin use only - consider removing/securing this in production). |
| GET | /api/bank/customers/{id} | Retrieve a customer by ID. |
| DELETE | /api/bank/customers/{id} | Delete a customer by ID (along with associated accounts). |
| POST | /api/bank/signup | Registers a new customer (alternative to direct POST to /customers). |
| POST | /api/bank/login |  Login a customer (returns customer details on success). |



### Account Management

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/bank/accounts | Retrieve all accounts (admin use only - consider removing/securing). |
| GET | /api/bank/accounts/{customerId} | Retrieve an account by customer ID. |
| GET | /api/bank/accounts/byaccountnumber/{accountNumber} | Retrieve an account by account number. |
| POST | /api/bank/accounts | Create a new account for a customer. |
| DELETE | /api/bank/accounts/{accountNumber} | Delete an account by account number. |


### Transactions

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/bank/deposits | Deposit funds into an account. |
| POST | /api/bank/withdrawals | Withdraw funds from an account. |
| POST | /api/bank/transactions | Transfer funds between accounts. |
| GET | /api/bank/transactions | Get all transactions (admin - consider security restrictions). |
| GET | /api/bank/transactions/account/{accountNumber} | Get transactions for a specific account. |