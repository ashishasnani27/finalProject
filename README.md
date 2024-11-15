*Banking Application - Spring Boot and Angular*

This project is a full-stack banking application named *PiggyBank*, designed using Spring Boot for the backend and Angular for the frontend. It enables users to manage customers, accounts, deposits, withdrawals, and transactions via a sleek and efficient RESTful API.

✨ *Features*

Customer Management: Create, retrieve, and delete customer records (name, address, phone, and email).
Account Management: Manage accounts linked to customers with properties like account number, balance, and account type.
Deposits: Securely deposit funds into accounts with real-time balance updates.
Withdrawals: Process withdrawals with insufficient balance handling.
Transactions: Transfer funds smoothly between accounts, handling deposits and withdrawals.

🚀 *Technologies Used*

Java 17: Core application logic.
Spring Boot: RESTful API foundation.
Spring Data JPA: Database operations.
Hibernate: Object-Relational Mapping (ORM).
H2 Database: In-memory database (easily swappable).
REST Controller: API endpoint definitions.
Jackson: JSON serialization/deserialization.
Maven: Dependency management.
Angular: Frontend framework for dynamic user interfaces.
HTML, CSS, TypeScript: For structured and styled Angular components.

📂 *Project Structure*

Backend

Root Package (com.RAM.finalProject): Contains all backend components.
Account: Manages account data (entity, repository, service, controller).
Customer: Manages customer data (entity, repository, service, controller).
Deposit: Handles deposit operations (entity, repository, service, controller).
Withdrawal: Manages withdrawals (entity, repository, service, controller).
Transactions: Manages transactions (entity, repository, service, controller).

Frontend

App Component (AppComponent): Main application entry point, including routing.
Login Component (LoginComponent): Handles user login.
Signup Component (SignupComponent): Allows new users to register.
User Component (UserComponent): Displays account details and operations (deposit, withdrawal, transfer).

Angular Services:

HTTP Client: Facilitates API communication between Angular components and the backend.

🔗 *API Endpoints*

Customer Management

Method Endpoint	Description

GET	        |     /api/bank/customers	          |       Retrieves all customers.
GET	        |     /api/bank/customers/{id}	      |       Retrieves a customer by ID.
POST	    |     /api/bank/customers	          |       Creates a new customer.
DELETE	    |     /api/bank/customers/{id}	      |       Deletes a customer by ID.

Account Management

Method Endpoint Description

GET	      |  /api/bank/accounts	                  |   Retrieves all accounts.
GET	      |  /api/bank/accounts/{accountNumber}	  |   Retrieves an account by account number.
POST	  |  /api/bank/accounts	                  |   Creates a new account.
DELETE	  |  /api/bank/accounts/{accountNumber}	  |   Deletes an account by account number.

Deposits

Method Endpoint	Description

POST  |	/api/bank/deposits |  Makes a deposit to an account.

Withdrawals

Method Endpoint	Description

POST | /api/bank/withdrawals  |	Makes a withdrawal from an account.

Transactions

Method Endpoint	Description

GET	  |  /api/bank/transactions	                       | Retrieves all transactions.
POST  |  /api/bank/transactions	                       | Creates a new transaction between two accounts.
GET	  |  /api/bank/transactions/account/{accountNumber}| Retrieves transactions for a specific account.

▶ *Running the Application*

Clone the repository:

    git clone https://github.com/ashishasnani27/finalProject.git

Navigate into the project directory:

    cd banking-application

Build the project with Maven:

    mvn clean install

Run the application:

    mvn spring-boot:run

Access the application frontend at *http://localhost:4200*.


🌱 *Future Improvements*

Enhanced Security: Add authentication and authorization.
Data Validation: Strict input validation for data integrity.
Detailed Error Handling: Improved, user-friendly error messages.
Loan Management Module: Add a loan system.
Advanced Transaction History: Filter and paginate transaction history.
UI/UX Enhancements: Improve the frontend user experience.
Testing: Increase unit and integration test coverage.

📒 *Detailed Code Description*

⬆ Backend Components

Application Entry Point

FinalProjectApplication.java: The main entry class with @SpringBootApplication. Launches the application with SpringApplication.run.

Account Module

    Entity (Account.java): Represents account data with fields like accountNumber, customerId, balance, and accountType.
    Repository (AccountRepository.java): Interface extending JpaRepository<Account, String> for CRUD.
    Service (AccountService.java): Contains methods to create, retrieve, and delete accounts.
    Controller (AccountController.java): REST controller managing account endpoints (GET, POST, DELETE).

Customer Module

    Entity (Customer.java): Defines a customer with fields like id, name, address, phone, and email.
    Repository (CustomerRepository.java): Interface for CRUD operations.
    Service (CustomerService.java): Manages customer operations.
    Controller (CustomerController.java): Exposes customer-related endpoints.

Deposit Module

    Entity (Deposit.java): Represents a deposit with fields like depositId, account, amount, and depositDate.
    Repository (DepositRepository.java): Interface for CRUD.
    Service (DepositService.java): Handles deposit transactions.
    Controller (DepositController.java): Provides endpoint for creating deposits.

Withdrawal Module

    Entity (Withdrawal.java): Maps withdrawals with fields like withdrawalId, account, amount, and withdrawalDate.
    Repository (WithdrawalRepository.java): Interface for CRUD.
    Service (WithdrawalService.java): Processes withdrawals.
    Controller (WithdrawalController.java): Exposes withdrawal endpoint.

Transaction Module

    Entity (Transaction.java): Manages transactions with fields like transactionId, sourceAccountNumber, targetAccountNumber, amount, and transactionDate.
    Repository (TransactionRepository.java): Interface for CRUD.
    Service (TransactionService.java): Manages transactions.
    Controller (TransactionController.java): Exposes transaction-related endpoints.

⬇ Frontend Components

App Component (AppComponent)
The main component that defines the Angular app's structure and handles routing.

Login Component (LoginComponent)
Manages user authentication by sending login credentials to the backend.

Signup Component (SignupComponent)
Allows new users to register, sending their details to the backend for account creation.

User Component (UserComponent)
Displays account dashboard, allowing users to view balance, make deposits, withdrawals, and transfers.
Dynamically updates data from backend responses.

Angular Services
HTTP Client: Facilitates API requests and retrieves or updates data from the backend.

🈸 *Application Flow*

Frontend User Interaction:
Users access the Angular app and perform actions like Login, Signup, and Account Operations (viewing balances, deposits, withdrawals, transfers).

Backend API Calls:
Each action (Login, Account creation, Deposit) triggers an HTTP request from the Angular frontend to Spring Boot endpoints, defined in controllers (CustomerController, AccountController, etc.).
The backend controllers route these requests to services that handle business logic and interact with the database through repositories.

Database Operations:
The repository layer uses Spring Data JPA to execute queries on the database for accounts, customers, and transactions.
For instance, the AccountRepository retrieves account information, while TransactionRepository saves transaction details.

Response to Frontend:
The backend processes each request and returns JSON responses containing the requested data or confirmation of operations (e.g., successful deposit).
The Angular app updates the UI based on the backend responses, showing account balances, transaction history, and confirmation messages.

UI Updates and User Notification:
The frontend components, upon receiving data from the backend, dynamically update the UI. For example:
    Account Dashboard: Shows updated balance after deposits or withdrawals.
    Transaction History: Displays a log of transactions, reflecting deposits, withdrawals, and transfers.