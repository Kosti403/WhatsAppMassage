import s from "../LoginSignup.module.scss";

import { observer } from "mobx-react-lite";
import { registStore } from "../../../store/regist-store";

import { AnimatedBox } from "../../../components/AnimatedBox/AnimatedBox";
import { Signup } from "../../../components/FormRegist/Signup/Signup";

export const SignUpPage = observer(() => {
  return (
    <div
      className={s.container}
      style={{ display: registStore.isVisible ? "block" : "block" }}
    >
      <AnimatedBox>
        <div className="container">
          <div className={s.content}>
            <div className={s.signupSection}>
              <Signup />
            </div>
          </div>
        </div>
      </AnimatedBox>
    </div>
  );
});
