import Footer from "../components/Footer/Footer";
import { Header } from "../components/Header/header";

import MainPage from "../pages/MainPage/mainPage";
import PersonAddPage from "../pages/PersonPage/PersonAddPage";
import { LogInPage } from "../pages/Register/login/LogInPage";
import { SignUpPage } from "../pages/Register/signUp/signUpPage";
import { Route, Routes } from "react-router-dom";

function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/personAddPage"} element={<PersonAddPage />} />

        <Route path={"/Login"} element={<LogInPage />} />
        <Route path={"/SignUp"} element={<SignUpPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Router;
