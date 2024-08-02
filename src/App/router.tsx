import Footer from "../components/Footer/Footer";
import { Header } from "../components/Header/header";

import MainPage from "../pages/MainPage/mainPage";
import PersonAddPage from "../pages/PersonPage/PersonAddPage";
import { LogInPage } from "../pages/Register/login/LogInPage";
import { SignUpPage } from "../pages/Register/signUp/signUpPage";
import { Route, Routes } from "react-router-dom";
import s from "./router.module.scss";
function Router() {
  return (
    <>
      <div className={s.pageContainer}>
        <Header />
        <div className={s.contentWrap}>
          <Routes>
            <Route path={"/"} element={<MainPage />} />
            <Route path={"/personPage"} element={<PersonAddPage />} />
            <Route path={"/Login"} element={<LogInPage />} />
            <Route path={"/SignUp"} element={<SignUpPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Router;
