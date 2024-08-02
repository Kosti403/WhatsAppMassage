import { makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from "uuid";

interface Employee {
  id: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  schedule: string;
}

class UserStore {
  userId: string;

  constructor() {
    makeAutoObservable(this);
    this.userId = this.getOrCreateUserId();
  }

  private getOrCreateUserId(): string {
    let userId = localStorage.getItem("userId");
    if (!userId) {
      userId = uuidv4();
      localStorage.setItem("userId", userId);
    }
    return userId;
  }

  getUserEmployees(): Employee[] {
    if (!this.userId) {
      throw new Error("User ID is not defined.");
    }
    const data = sessionStorage.getItem(`employees_${this.userId}`);
    return data ? JSON.parse(data) : [];
  }

  saveUserEmployees(employees: Employee[]): void {
    if (!this.userId) {
      throw new Error("User ID is not defined.");
    }
    sessionStorage.setItem(
      `employees_${this.userId}`,
      JSON.stringify(employees)
    );
  }
}

export const userStore = new UserStore();
