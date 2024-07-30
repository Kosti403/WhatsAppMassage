import { observer } from "mobx-react-lite";
import { Button } from "../../../shared/ui/Button/Button";
import { signUpStore } from "../../../store/signup-store";
import s from "./Signup.module.scss";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import { autorun } from "mobx";
// import { registStore } from "../../../store/regist-store";

export const Signup = observer(() => {
  const { inpData, inpDataErr, updateInpData, clickHandler } = signUpStore;
  const navigate = useNavigate();

  // useEffect(() => {
  //   const reactionCleanup = autorun(() => {
  //     if (!registStore.isVisible) {
  //       clearData();
  //     }
  //   });
  //   return () => reactionCleanup();
  // }, [clearData]);
  const handleClick = () => {
    if (signUpStore.validateData()) {
      clickHandler(navigate);
    }
  };

  const handleGoToLogin = () => {
    navigate("/Login");
  };

  return (
    <div className={s.signupContent}>
      <div className={s.registrationButton}>
        <span>Back</span>
        <Button onClick={handleGoToLogin} className={s.button}>
          &larr;
        </Button>
      </div>
      <div className={s.signupTitle}>
        <h1>Create Account</h1>
      </div>
      <div className={s.signupInput}>
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
        <input
          type="password"
          onChange={(e) => updateInpData("confirmpassword", e.target.value)}
          placeholder="Confirm Password"
          value={inpData.confirmpassword}
        />
        {inpDataErr.confirmpasswordErr && <span className={s.err}>{inpDataErr.confirmpasswordErr}</span>}
        <Button onClick={handleClick}>Sign Up</Button>
      </div>
    </div>
  );
});
