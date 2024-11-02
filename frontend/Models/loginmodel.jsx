// LoginModel.js

class LoginModel {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  // Method to validate credentials
  validateCredentials() {
    // Hardcoded credentials for simplicity
    const validUsername = "user1";
    const validPassword = "password1";

    if (this.username === validUsername && this.password === validPassword) {
      return true;
    }
    return false;
  }

  // Method to return a response message based on validation
  getMessage() {
    return this.validateCredentials()
      ? "Login successful"
      : "Invalid credentials";
  }
}

export default LoginModel;
