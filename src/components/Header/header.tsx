import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { Button } from "../../shared/ui/Button/Button";
import s from "./header.module.scss";
import { useNavigate } from "react-router-dom";
import LanguageSelect from "./components/LanguageSelect/LanguageSelect";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

export const Header = observer(() => {
  const navigate = useNavigate();

  const hasAccessToken = !!localStorage.getItem("accessToken"); // Assuming accessToken is stored in localStorage

  const handleGoToSignUp = () => {
    navigate("/Login");
  };

  const handleGoToPerson = () => {
    navigate("/person");
  };

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
              {hasAccessToken && (
                <Button className={s.button} onClick={handleGoToPerson}>
                  Profile
                </Button>
              )}
              {!hasAccessToken && (
                <Button className={s.button} onClick={handleGoToSignUp}>
                  Sign Up / Log In
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
