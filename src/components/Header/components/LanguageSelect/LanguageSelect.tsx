import React from "react";
import { Select } from "antd";

import KZ from "../../../../assets/icons/kk.svg";
import RU from "../../../../assets/icons/ru.svg";
import EN from "../../../../assets/icons/en.svg";

interface LanguageSelectProps {
  defaultValue: string;
  handleChange: (value: string) => void;
}

const LanguageSelect: React.FC<LanguageSelectProps> = ({
  defaultValue,
  handleChange,
}) => {
  return (
    <Select
      defaultValue={defaultValue}
      style={{ width: 85 }}
      onChange={handleChange}
      suffixIcon={
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 10l5 5 5-5"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      }
      options={[
        {
          label: <span>Language</span>,
          title: "manager",
          options: [
            {
              label: (
                <span>
                  <img src={KZ} alt="KZ" />
                  KZ
                </span>
              ),
              value: "KZ",
            },
            {
              label: (
                <span>
                  <img src={RU} alt="RU" />
                  RU
                </span>
              ),
              value: "RU",
            },
            {
              label: (
                <span>
                  <img src={EN} alt="EN" />
                  EN
                </span>
              ),
              value: "EN",
            },
          ],
        },
      ]}
    />
  );
};

export default LanguageSelect;
