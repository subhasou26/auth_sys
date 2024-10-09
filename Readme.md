# Auth Friend

This is a JWT-based authentication system with refresh tokens, password hashing using bcrypt, and OTP validation for login and sensitive actions. It includes role-based access control for different user types and a minimalistic frontend for user authentication.

### Online Deployed Link:
[Auth System](https://auth-sys-q2o6.onrender.com/api/auth/login)

## Features
- **JWT Authentication:** Secure user sessions with JWTs (access and refresh tokens).
- **Password Hashing:** Passwords are hashed using bcrypt for additional security.
- **OTP Validation:** OTP is generated and validated for login and sensitive actions with expiry times and secure storage.
- **Roles & Permissions:** Different user types have specific roles and permissions.
---
## User Roles & Permissions

This project supports three types of users:
1. **Admin User:** Admin users have the highest level of access. They can create other users such as municipal users.
2. **Municipal User:** These users are created by admin users and are assigned specific permissions to handle municipal-related tasks.
3. **Public User:** Public users can register themselves and access public features of the system.

### Admin-Created Users
- Admin users have the ability to create **Municipal Users** via the `/api/admin/create-user` API.
- When a user is created by the admin, their credentials (email and a temporary password) are automatically sent to their registered email address.
  
### Public Registration
- **Public Users** can sign up on their own through the `/api/auth/register` endpoint.

---

## Seeding the Admin User

To load the initial admin user into the system, follow these steps:
1. Open the `seedAdmin.js` file located in the root directory.
2. Change the admin email and password as per your preference.
3. Run the file to seed the admin user into the database:
   ```bash
   node seedAdmin.js


---

## API Endpoints

### Auth APIs
1. **Login:** `/api/auth/login` [GET, POST]  
   Allows users to log in and receive JWT tokens.
   
2. **Signup:** `/api/auth/register` [GET, POST]  
   New users can register an account.

3. **Logout:** `/api/auth/logout` [GET]  
   Logs the user out and invalidates the current session.

4. **Forgot Password:** `/api/auth/forgot-password` [GET, POST]  
   Sends an email with a password reset link to the user.

5. **Reset Password:** `/api/auth/reset-password` [POST]  
   Resets the user's password using the token provided in the email.

### Admin APIs
1. **Create User:** `/api/admin/create-user` [GET, POST]  
   Admins can create new users like municipal,employee etc.

### Dashboard APIs
1. **Public Dashboard:** `/api/dashbord/public` [GET]  
   Public type of user can access.

2. **Admin Dashboard:** `/api/dashbord/admin` [GET]  
   Accessible only to admin users.

3. **Municipal Dashboard:** `/api/dashbord/municipal` [GET]  
   Accessible to municipal authorities.

---

## Authentication System Details

### Backend:
- **JWT Authentication:**  
   The system uses access tokens for short-term authentication and refresh tokens for renewing expired tokens.
   
- **Password Hashing:**  
   All passwords are securely hashed using bcrypt to ensure data protection.

- **Roles & Permissions:**  
   Different user roles (admin, municipal, public) have distinct permissions and access to specific endpoints.

### OTP Validation:
- **OTP Generation & Validation:**  
   During password reset an OTP is generated and sent to the user. OTPs have expiry times to ensure security and are securely stored until they are validated.

---


## Error Handling & Validation
- Displays simple error messages and validation alerts in case of incorrect input or API failures.

---
## Setting Up the Environment

To run this project, you'll need to create a `.env` file in the root directory of your project with the following environment variables:

```plaintext
PORT=5000
MONGO_URI=<Your MongoDB URI>
JWT_SECRET=<Your JWT Secret>
EMAIL=<Your Email Address>
CLIENT_ID=<Your Google OAuth Client ID>
CLIENT_SECRET=<Your Google OAuth Client Secret>
REDIRECT_URI=<Your OAuth Redirect URI>
REFRESH_TOKEN=<Your OAuth Refresh Token>
ACCESS_TOKEN=<Your OAuth Access Token>


---
*Note - I am using free service to deploy so it may be slow and the email sending feature is only valid for 7days because of google auth free trial 

