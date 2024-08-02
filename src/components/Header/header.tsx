import { observer } from "mobx-react-lite";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "../../shared/ui/Button/Button";
import s from "./header.module.scss";
import LanguageSelect from "./components/LanguageSelect/LanguageSelect";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

export const Header = observer(() => {
  const navigate = useNavigate();
  const location = useLocation();

  const hasAccessToken = !!localStorage.getItem("accessToken");

  const handleGoToSignUp = () => {
    navigate("/Login");
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  const isOnPersonAddPage = location.pathname === "/personPage";

  return (
    <div className={s.header}>
      <div className="container">
        <div className={s.navBar}>
          <div className={s.logo}>
            <Link to="/">
              <p>LOGO</p>
            </Link>
          </div>
          <div className={s.settings}>
            <div className={s.lang}>
              <LanguageSelect defaultValue="KZ" handleChange={handleChange} />
            </div>
            <div className={s.registration}>
              {isOnPersonAddPage ? (
                <Button className={s.button} onClick={handleLogout}>
                  Выйти с Аккаунта
                </Button>
              ) : (
                !hasAccessToken && (
                  <Button className={s.button} onClick={handleGoToSignUp}>
                    Вход / Регистрация
                  </Button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
