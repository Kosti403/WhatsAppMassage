import { observer } from "mobx-react-lite";
import { useState, useEffect } from "react";
import s from "./personAddPage.module.scss";
import { PersonAnimated } from "../../components/AnimatedBox/PersonAnimated";
import { Button } from "../../shared/ui/Button/Button";
import { EmployeeList } from "./tablePersone/employeeList";
import { AnimatePresence } from "framer-motion";
import AddPersonModal from "./tablePersone/addPersonModal";
import { userStore } from "../../store/userStore";

interface Employee {
  id: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  schedule: string;
}

const sendMessage = async (
  phoneNumber: string,
  message: string
): Promise<void> => {
  try {
    const response = await fetch("http://localhost:3000/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber, message }),
    });

    const result = await response.json();
    if (response.ok) {
      if (result.success) {
        console.log("Message sent successfully:", result.sid);
      } else {
        console.error("Error sending message:", result.error);
        alert(result.error);
      }
    } else {
      console.error("Server error:", result.error);
      alert("Server error occurred.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Error occurred while sending message.");
  }
};

const PersonAddPage = observer(() => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    setEmployees(userStore.getUserEmployees());
  }, []);

  const handleAddEmployee = (employee: Employee): void => {
    const updatedEmployees = [...employees, employee];
    setEmployees(updatedEmployees);
    userStore.saveUserEmployees(updatedEmployees);
    setIsModalOpen(false);
    sendMessage(
      employee.phoneNumber,
      `Welcome to the team, ${employee.fullName}!`
    );
  };

  return (
    <div className={s.personPage}>
      <div className="container">
        <div className={s.personPageContent}>
          <PersonAnimated>
            <div className="">Сотрудники ({employees.length})</div>
          </PersonAnimated>
          <PersonAnimated>
            <div className="AddPerson">
              <Button onClick={() => setIsModalOpen(true)}>
                Добавить сотрудника
              </Button>
            </div>
          </PersonAnimated>
          <EmployeeList employees={employees} />
        </div>
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <AddPersonModal
            onClose={() => setIsModalOpen(false)}
            onAddEmployee={handleAddEmployee}
          />
        )}
      </AnimatePresence>
    </div>
  );
});

export default PersonAddPage;
