# HealthCare-Platform

A platform used to monitor paitents and their medical information. To be used both at home and at hospitals. 

Patients and practitioners will be able to access a (relational) database with user information and monitor the status of medical devices.

There will also be a Chat module that allows patients and practitionars to communicate through the platform. This will have its own (document-based) database.

## Table of Contents
  <ol>
    <li>
      <a href="#healthcare-platform">About This Project</a>
    </li>
    <li>
      <a href="#directory-breakdown">Directory Breakdown</a>
    </li>
    <li>
      <a href="#branching-method">Branching Method</a>
    </li>
    <li>
      <a href="#tentative-relational-database-schema">Tentative Schema</a>
    </li>
    <li>
      <a href="#django-rest-api">Django Rest Api</a>
    </li>
    <li>
      <a href="#healthapp">HealthApp</a>
      <ul>
        <li><a href="#login-page">Login Page</a></li>
        <li><a href="#registration-page">Registration Page</a></li>
        <li><a href="#google-sign-in">Google Sign In</a></li>
        <li><a href="#patient-view">Patient View</a></li>
        <li><a href="#provider-view">Provider View</a></li>
      </ul>
    </li>
    <li>
      <a href="#api-usage">Api Usage</a>
      <ul>
        <li><a href="#user-list">User List</a></li>
        <li><a href="#show-user">Show User</a></li>
        <li><a href="#add-user">Add User</a></li>
        <li><a href="#update-user">Update User</a></li>
        <li><a href="#delete-user">Delete User</a></li>
      </ul>
    </li>
  </ol>

## Directory Breakdown

`.github/workflows` : Github Actions directoy

`HealthApp` : Folders and files for the React Native mobile application

`Modules` : Python API modules for device and chat information (past assignment)

`images` : Relevant images

`mysite` : Django Rest Framework directory containing code that builds REST APIs

## Branching Method

Each module will be developed in its own branch until it is ready for production.

___

## Tentative Relational Database Schema

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
<img src="https://github.com/keven-deoliveira/HealthCare-Platform/blob/main/images/IMG-0550.PNG" data-canonical-src="https://github.com/keven-deoliveira/HealthCare-Platform/blob/main/images/IMG-0550.PNG" width="300" height="600" />

### Registration Page
<img src="https://github.com/keven-deoliveira/HealthCare-Platform/blob/main/images/IMG-0551.PNG" data-canonical-src="https://github.com/keven-deoliveira/HealthCare-Platform/blob/main/images/IMG-0551.PNG" width="300" height="600" />

### Google Sign In
<img src="https://github.com/keven-deoliveira/HealthCare-Platform/blob/main/images/IMG-0552.PNG" data-canonical-src="https://github.com/keven-deoliveira/HealthCare-Platform/blob/main/images/IMG-0552.PNG" width="300" height="600" />

### Patient View
<img src="https://github.com/keven-deoliveira/HealthCare-Platform/blob/main/images/IMG-0553.PNG" data-canonical-src="https://github.com/keven-deoliveira/HealthCare-Platform/blob/main/images/IMG-0553.PNG" width="300" height="600" />

### Provider View
<img src="https://github.com/keven-deoliveira/HealthCare-Platform/blob/main/images/IMG-0554.PNG" data-canonical-src="https://github.com/keven-deoliveira/HealthCare-Platform/blob/main/images/IMG-0554.PNG" width="300" height="600" />

____

## API Usage

### User List

Returns JSON containing all users and all their data.

* **URL**

  /users/

* **Method:**

  `GET`
  
* **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    `
[{"userID":"f24ade1450764e24a67487a36432251b","firstName":"Keven","lastName":"DeOliveira","DoB":"07/18/2000","address":"","email":" ","pcp":"n/a","sex":"M","role":["P","D"]},{"userID":"9753d7c86acb4947ac4304650e96d90c","firstName":"Loki","lastName":"TheFish","DoB":"12/1/21","address":"","email":" ","pcp":"n/a","sex":"M","role":["P"]},{"userID":"3f7d25b0bcd04af396d569109ad1181a","firstName":"Test","lastName":"User","DoB":"08/20/1995","address":"nowehre","email":" ","pcp":"something","sex":"O","role":["P"]}]
    `
    
* **Sample Call:**

  ```javascript
    const response = await fetch ('http://52.70.229.148:8000/users/', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application.json'
        },
      });
  ```
  
### Show User

Returns JSON data about a single user.

* **URL**

  /users/userID

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `userID=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    `
    {
    "userID": "f24ade1450764e24a67487a36432251b",
    "firstName": "Keven",
    "lastName": "DeOliveira",
    "DoB": "07/18/2000",
    "address": "1173 Commonwealth Ave",
    "email": " ",
    "pcp": "n/a",
    "sex": "M",
    "role": [
        "P",
        "D"
    ]
}
    `
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

* **Sample Call:**

  ```javascript
    const response = await fetch ('http://52.70.229.148:8000/users/12345', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application.json'
        },
      });
  ```
  
### Add User

Adds user information to database.

* **URL**

  /users/

* **Method:**

  `POST`
  
* **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    `Operation Status String`

* **Sample Call:**

  ```javascript
  (async () => {
  const rawResponse = await fetch('http://52.70.229.148:8000/users/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "userID": "12345",
      "firstName": "John",
      "lastName": "Doe",
      "DoB": "01/31/1999",
      "address": "12 Street Avenue",
      "email": "johndoe@gmail.com",
      "pcp": "Dr. Jane",
      "sex": "Male",
      "role": "P"
    })
  });
  const content = await rawResponse.json();

  console.log(content);
  })();
  
### Update User

Updates all or some of information of specific user

* **URL**

  /users/userID

* **Method:**

  `PUT` OR `PATCH`
  
*  **URL Params**

   **Required:**
 
   `userID=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    `
    Operation Status String
    `
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

* **Sample Call:**

  ```javascript
    const response = await fetch ('http://52.70.229.148:8000/users/12345', {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application.json'
        },
        body: JSON.stringify({
          "userID": "12345",
          "firstName": "John",
          "lastName": "Doe",
          "DoB": "01/31/1999",
          "address": "12 Street Avenue",
          "email": "johndoe@gmail.com",
          "pcp": "Dr. Jane",
          "sex": "Male",
          "role": "P"
       })
    });
  });
  ```

### Delete User

Deletes given user.

* **URL**

  /users/userID

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `userID=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    `Operation Status String`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

* **Sample Call:**

  ```javascript
    const response = await fetch ('http://52.70.229.148:8000/users/12345', {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application.json'
        },
      });
  ```
