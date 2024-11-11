package com.RAM.finalProject.Customer;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    public Customer signup(Customer customer) {
        return customerRepository.save(customer);
    }

    public Customer login(String email, String password) {
        Customer customer = customerRepository.findByEmail(email);
        if (customer != null && password.equals(customer.getPassword())) {
            return customer;  // Return the Customer object if login is successful
        }
        return null;  // Return null if authentication fails
    }


    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    public Customer getCustomerById(Long id) {
        return customerRepository.findById(id).orElse(null);
    }

    public Customer createCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    public void deleteCustomer(Long id) {
        customerRepository.deleteById(id);
    }

    public boolean existsCustomerById(Long id) {
        return customerRepository.existsById(id);
    }


    
}
