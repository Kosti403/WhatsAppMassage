import s from "../LoginSignup.module.scss";

import { observer } from "mobx-react-lite";
import { registStore } from "../../../store/regist-store";
import { Login } from "../../../components/FormRegist/Login/Login";

import { AnimatedBox } from "../../../components/AnimatedBox/AnimatedBox";

export const LogInPage = observer(() => {
  return (
    <div
      className={s.container}
      style={{ display: registStore.isVisible ? "block" : "block" }}
    >
      <AnimatedBox>
        <div className="container">
          <div className={s.content}>
            <div className={s.loginSection}>
              <Login />
            </div>
          </div>
        </div>
      </AnimatedBox>
    </div>
  );
});
