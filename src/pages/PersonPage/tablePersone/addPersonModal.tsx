import { useState } from "react";
import { motion } from "framer-motion";
 import PhoneInput, { isValidPhoneNumber, Value } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import styles from "./addPersone.module.scss";
import { Button } from "../../../shared/ui/Button/Button";

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

const AddPersonModal = ({ onClose, onAddEmployee }: AddPersonModalProps) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState<Value>();
  const [email, setEmail] = useState('');
  const [schedule, setSchedule] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handleSubmit = () => {
    if (phoneNumber && !phoneError) {
      const newEmployee: Employee = {
        id: Math.random().toString(36).substr(2, 9),
        fullName,
        phoneNumber,
        email,
        schedule,
      };

      onAddEmployee(newEmployee);
      onClose();
    } else {
      setPhoneError('Введите корректный номер телефона');
    }
  };

  const handlePhoneChange = (value: Value) => {
    setPhoneNumber(value);
    setPhoneError(value && isValidPhoneNumber(value) ? '' : 'Введите корректный номер телефона');
  };

  return (
    <div className={styles.modalBackdrop}>
      <motion.div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        <div className={styles.modalHeader}>
          <h2>Добавить нового сотрудника</h2>
          <Button onClick={onClose}>✖</Button>
        </div>
        <div className={styles.modalBody}>
          <input
            type="text"
            placeholder="ФИО"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <PhoneInput
            placeholder="Номер телефона(WhatsApp)"
            value={phoneNumber}
            onChange={handlePhoneChange}
            defaultCountry="KZ"
            international
            withCountryCallingCode
          />
          {phoneError && <p className={styles.error}>{phoneError}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Распорядок работы"
            value={schedule}
            onChange={(e) => setSchedule(e.target.value)}
          />
        </div>
        <div className={styles.modalFooter}>
          <Button onClick={handleSubmit}>Добавить сотрудника</Button>
          <Button onClick={onClose}>Закрыть</Button>
        </div>
      </motion.div>
    </div>
  );
};

export default AddPersonModal;
