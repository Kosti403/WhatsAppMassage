import { useState } from 'react';

interface AddPersonModalProps {
  onClose: () => void;
  onAddEmployee: (employee: Employee) => void;
}

interface Employee {
  id: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  schedule: string;
}

export const AddPersonModal = ({ onClose, onAddEmployee }: AddPersonModalProps) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [schedule, setSchedule] = useState('');

  const handleSubmit = () => {
    const newEmployee: Employee = {
      id: Math.random().toString(36).substr(2, 9),
      fullName,
      phoneNumber,
      email,
      schedule,
    };

    onAddEmployee(newEmployee);
  };

  return (
    <div>
      <h2>Add New Employee</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phoneNumber}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Schedule"
        value={schedule}
        onChange={(e) => setSchedule(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Employee</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};