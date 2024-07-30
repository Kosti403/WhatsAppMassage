import { observer } from "mobx-react-lite";
import s from "./EmployeeList.module.scss";

interface Employee {
  id: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  schedule: string;
}

interface EmployeeListProps {
  employees: Employee[];
}

export const EmployeeList = observer(({ employees }: EmployeeListProps) => {
  return (
    <div className={s.employeeList}>
      {employees.length === 0 ? (
        <p>Нет сотрудников</p>
      ) : (
        employees.map((employee) => (
          <div key={employee.id} className={s.employeeCard}>
            <h3>{employee.fullName}</h3>
            <p>Телефон: {employee.phoneNumber}</p>
            <p>Электронная почта: {employee.email}</p>
            <p>Распорядок дня: {employee.schedule}</p>
          </div>
        ))
      )}
    </div>
  );
});
