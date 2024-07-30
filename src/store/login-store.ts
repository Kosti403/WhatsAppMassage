import { makeAutoObservable } from "mobx";

class LoginStore {
  inpData = {
    phone: "",
    login: "",
    password: "",
  };

  inpDataErr = {
    phoneErr: "",
    loginErr: "",
    passwordErr: "",
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
    const storedData = JSON.parse(localStorage.getItem("userData") || "{}");
    const { phone, login, password } = this.inpData;

    if (
      storedData.phone === phone &&
      storedData.login === login &&
      storedData.password === password
    ) {
      navigate("/personPage");
    } else {
      this.inpDataErr.loginErr = "User not found";
    }
  };

  clearData = () => {
    this.inpData = { phone: "", login: "", password: "" };
    this.inpDataErr = { phoneErr: "", loginErr: "", passwordErr: "" };
  };
  
  validateData = () => {
    const { phone, login, password } = this.inpData;
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
    } else {
      this.inpDataErr.passwordErr = "";
    }

    return isValid;
  };
}

export const loginStore = new LoginStore();
