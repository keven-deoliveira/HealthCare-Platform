# HealthCare-Platform

A platform used to monitor paitents and their medical information. To be used both at home and at hospitals. 

Patients and practitioners will be able to access a (relational) database with user information and monitor the status of medical devices.

There will also be a Chat module that allows patients and practitionars to communicate through the platform. This will have its own (document-based) database.

### Branching Method

Each module will be developed in its own branch until it is ready for production.

___

### Tentative Relational Database Schema

![Image](https://github.com/keven-deoliveira/HealthCare-Platform/blob/main/images/HealthCare%20Platform%20Schema%20Design%201%20-%20ERD%20with%20colored%20entities%20(UML%20notation).png)

_____

### Django Rest API

To access, server must first be started on the Elastic Beanstalk AWS machine using: 

```python3 manage.py runserver {privateIP}:8000```

Site can then be accessed with "http://{publicIP}:8000"

> For security purposes, the IP addresses will not be displayed here.
