import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import s from "./Login.module.scss";
import { Button } from "../../../shared/ui/Button/Button";
import { loginStore } from "../../../store/login-store";
import { useEffect } from "react";
import { autorun } from "mobx";
import { registStore } from "../../../store/regist-store";

export const Login = observer(() => {
  const { inpData, inpDataErr, updateInpData, clickHandler, clearData } = loginStore;
  const navigate = useNavigate();

  useEffect(() => {
    const reactionCleanup = autorun(() => {
      if (!registStore.isVisible) {
        clearData();
      }
    });
    return () => reactionCleanup();
  }, [clearData]);

  const handleClick = () => {
    if (loginStore.validateData()) {
      clickHandler(navigate);
    }
  };

  const handleGoToSignUp = () => {
    navigate("/SignUp");
  };

  return (
    <div className={s.loginContent}>
      <div className={s.registrationButton}>
        <span>Create new Account</span>
        <Button onClick={handleGoToSignUp} className={s.button}>
          &rarr;
        </Button>
      </div>

      <div className={s.loginTitle}>
        <h1>Sign in to Website</h1>
      </div>
      <div className={s.loginInput}>
        <input
          type="text"
          onChange={(e) => updateInpData("phone", e.target.value)}
          placeholder="Phone number"
          value={inpData.phone}
          maxLength={20}
        />
        <input
          type="text"
          onChange={(e) => updateInpData("login", e.target.value)}
          placeholder="Username"
          value={inpData.login}
        />
        {inpDataErr.loginErr && <span className={s.err}>{inpDataErr.loginErr}</span>}
        <input
          type="password"
          onChange={(e) => updateInpData("password", e.target.value)}
          placeholder="Password"
          value={inpData.password}
        />
        {inpDataErr.passwordErr && <span className={s.err}>{inpDataErr.passwordErr}</span>}
        <Button onClick={handleClick}>Log in</Button>
      </div>
    </div>
  );
});
