# HealthCare-Platform

A platform used to monitor paitents and their medical information. To be used both at home and at hospitals. 

Patients and practitioners will be able to access a (relational) database with user information and monitor the status of medical devices.

There will also be a Chat module that allows patients and practitionars to communicate through the platform. This will have its own (document-based) database.

## Branching Method

Each module will be developed in its own branch until it is ready for production.

___

### Tentative Relational Database Schema

![Image](https://github.com/keven-deoliveira/HealthCare-Platform/blob/main/images/HealthCare%20Platform%20Schema%20Design%201%20-%20ERD%20with%20colored%20entities%20(UML%20notation).png)

_____

## Django Rest API

To access, server must first be started on the Elastic Beanstalk AWS machine using: 

```python3 manage.py runserver {privateIP}:8000```

Site can then be accessed with "http://{publicIP}:8000"

> For security purposes, the IP addresses will not be displayed here.

_____

## HealthApp/

The final stage of this project is to use the APIs and endpoints that are now hosted on AWS to create an application using React Native. This application will allow users to log in with a valid Google account. If the user is already in the database, their information is fetched and displayed to them. They will be allowed to make changes accordingly. Ideally, they will also be able to chat with their PCP. PCPs will be able to see and manage their patients.

If a patient is not registered but has a valid Google email, they will be directed to the registration page.

If a patient does not have a valid Google email, they will not be able to access the application. This is for verification purposes.

### Login Page
![Login](https://github.com/keven-deoliveira/HealthCare-Platform/blob/main/images/IMG-0550.PNG)

### Registration Page
![Registration](https://github.com/keven-deoliveira/HealthCare-Platform/blob/main/images/IMG-0551.PNG)

### Google Sign In
![Google Sign in](https://github.com/keven-deoliveira/HealthCare-Platform/blob/main/images/IMG-0552.PNG)

### Patient View
![Paitent View](https://github.com/keven-deoliveira/HealthCare-Platform/blob/main/images/IMG-0553.PNG)

### Provider View
![Provider View](https://github.com/keven-deoliveira/HealthCare-Platform/blob/main/images/IMG-0554.PNG)
