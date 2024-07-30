import React from "react";
import { Select } from "antd";
import s from "./LanguageSelect.module.scss";

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
      options={[
        {
          label: <span>Language</span>,
          title: "manager",
          options: [
            {
              label: (
                <span className={s.labelImg}>
                  <img src={KZ} alt="KZ"></img>KZ
                </span>
              ),
              value: "KZ",
            },
            {
              label: (
                <span>
                  <img src={RU} alt="RU"></img>RU
                </span>
              ),
              value: "RU",
            },
            {
              label: (
                <span>
                  <img src={EN} alt="EN"></img>EN
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
