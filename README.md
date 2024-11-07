# Banking Application - Spring Boot Backend

This project implements a sleek and efficient RESTful API for a simple banking application using Spring Boot. It provides functionalities for managing customers, accounts, deposits, withdrawals, and transactions, all wrapped in a clean and organized structure.

## ✨ Features

- **Customer Management:** Seamlessly create, retrieve, and delete customer records, including name, address, phone number, and email.
- **Account Management:** Effortlessly manage accounts, linking them to customers with an account number, balance, and specific account type.
- **Deposits:** Securely deposit funds into existing accounts, updating balances in real-time.
- **Withdrawals:** Withdraw funds from accounts while gracefully handling insufficient balance scenarios.
- **Transactions:** Execute smooth fund transfers between accounts, managing withdrawals and deposits concurrently.

## 🚀 Technologies Used

- **Java 17:** Powering the application's core logic with modern language features.
- **Spring Boot:** Building the robust and scalable RESTful API foundation.
- **Spring Data JPA:** Simplifying database interactions with intuitive repositories.
- **Hibernate:** Providing seamless Object-Relational Mapping (ORM) for efficient data management.
- **H2 Database:** Utilizing an in-memory database for streamlined development (easily swappable with other databases).
- **REST Controller:** Defining clear and concise API endpoints for easy integration.
- **Jackson:** Handling JSON serialization and deserialization for smooth data exchange.
- **Maven:** Managing dependencies and automating the build process for a smooth developer experience.

## 📂 Project Structure

The project adheres to a standard Spring Boot structure, promoting clarity and maintainability:

- **`com.RAM.finalProject`**: The root package encompassing the entire application.
- **`Account`**: Dedicated to account management, housing the entity, repository, service, and controller.
- **`Customer`**: Focused on customer management, containing the entity, repository, service, and controller.
- **`Deposit`**: Handling deposit operations, with its entity, repository, service, and controller.
- **`Withdrawal`**: Managing withdrawal operations, with its entity, repository, service, and controller.
- **`Transactions`**: Orchestrating transactions, with its entity, repository, service, and controller.

## 🔗 API Endpoints

### Customer Management

| Method | Endpoint                   | Description                 |
| ------ | -------------------------- | --------------------------- |
| GET    | `/api/bank/customers`      | Retrieves all customers.    |
| GET    | `/api/bank/customers/{id}` | Retrieves a customer by ID. |
| POST   | `/api/bank/customers`      | Creates a new customer.     |
| DELETE | `/api/bank/customers/{id}` | Deletes a customer by ID.   |

### Account Management

| Method | Endpoint                             | Description                             |
| ------ | ------------------------------------ | --------------------------------------- |
| GET    | `/api/bank/accounts`                 | Retrieves all accounts.                 |
| GET    | `/api/bank/accounts/{accountNumber}` | Retrieves an account by account number. |
| POST   | `/api/bank/accounts`                 | Creates a new account.                  |
| DELETE | `/api/bank/accounts/{accountNumber}` | Deletes an account by account number.   |

### Deposits

| Method | Endpoint             | Description                    |
| ------ | -------------------- | ------------------------------ |
| POST   | `/api/bank/deposits` | Makes a deposit to an account. |

### Withdrawals

| Method | Endpoint                | Description                         |
| ------ | ----------------------- | ----------------------------------- |
| POST   | `/api/bank/withdrawals` | Makes a withdrawal from an account. |

### Transactions

| Method | Endpoint                                         | Description                                     |
| ------ | ------------------------------------------------ | ----------------------------------------------- |
| GET    | `/api/bank/transactions`                         | Retrieves all transactions.                     |
| POST   | `/api/bank/transactions`                         | Creates a new transaction between two accounts. |
| GET    | `/api/bank/transactions/account/{accountNumber}` | Retrieves transactions for a specific account.  |

## ▶️ Running the Application

1. **Clone:** `git clone https://github.com/your-username/banking-application.git` //Ritika, put your Git URL here
2. **Navigate:** `cd banking-application`
3. **Build:** `mvn clean install`
4. **Run:** `mvn spring-boot:run`

Access the frontend at `http://localhost:8081` .

## 🌱 Future Improvements

- **Enhanced Security:** Implement robust authentication and authorization mechanisms.
- **Data Validation:** Enforce strict input validation for data integrity.
- **Comprehensive Error Handling:** Provide detailed and user-friendly error messages.
- **Loan Management Module:** Integrate a full-fledged loan management system.
- **Advanced Transaction History:** Implement filtering, pagination, and search capabilities for transaction history.
- **Polished UI/UX:** Enhance the frontend for a more intuitive and engaging user experience.
- **Rigorous Testing:** Expand test coverage with comprehensive unit and integration tests.

## 🙌 Contributors

1. Ashish Asnani
2. Ritika Kar
3. Maanvitha Allampalli
