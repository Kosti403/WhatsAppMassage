import { makeAutoObservable } from "mobx";

class SignupStore {
  inpData = {
    phone: "",
    login: "",
    password: "",
    confirmpassword: "",
  };

  inpDataErr = {
    phoneErr: "",
    loginErr: "",
    passwordErr: "",
    confirmpasswordErr: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  updateInpData = (key: string, value: string) => {
    this.inpData = {
      ...this.inpData,
      [key]: value,
    };
    this.inpDataErr = {
      ...this.inpDataErr,
      [`${key}Err`]: "",
    };
  };

  clickHandler = (navigate: (path: string) => void) => {
    if (this.validateData()) {
      const { phone, login, password } = this.inpData;
      localStorage.setItem(
        "userData",
        JSON.stringify({ phone, login, password })
      );
      navigate("/login");
    }
  };

  validateData = () => {
    const { phone, login, password, confirmpassword } = this.inpData;
    let isValid = true;

    // Validate phone number
    const phoneRegex = /^[\d+\-()\s]+$/;
    if (!phoneRegex.test(phone)) {
      this.inpDataErr.phoneErr = "Invalid phone number";
      isValid = false;
    } else {
      this.inpDataErr.phoneErr = "";
    }

    // Validate login
    if (login === "") {
      this.inpDataErr.loginErr = "Login is required";
      isValid = false;
    } else {
      this.inpDataErr.loginErr = "";
    }

    // Validate password
    if (password === "") {
      this.inpDataErr.passwordErr = "Password is required";
      isValid = false;
    } else if (password !== confirmpassword) {
      this.inpDataErr.confirmpasswordErr = "Passwords do not match";
      isValid = false;
    } else {
      this.inpDataErr.passwordErr = "";
      this.inpDataErr.confirmpasswordErr = "";
    }

    return isValid;
  };
}

export const signUpStore = new SignupStore();
