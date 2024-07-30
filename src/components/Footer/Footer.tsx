import s from "./Footer.module.scss";

import Instagram from "../../assets/icons/instagram.svg";
import Telegram from "../../assets/icons/telegram.svg";
import Linkedin from "../../assets/icons/linkedin.svg";

export default function Footer() {
  return (
    <div className={s.footer}>
      <div className="container">
        <div className={s.footerContent}>
          <div className={s.footerCards}>
            <h2>Product</h2>
            <ul>
              <li>
                <p>Features</p>
              </li>
              <li>
                <p>Case studies</p>
              </li>
              <li>
                <p>Book Demo</p>
              </li>
            </ul>
          </div>
          <span></span>
          <div className={s.footerCards}>
            <h2>About</h2>
            <ul>
              <li>
                <p>Company</p>
              </li>
              <li>
                <p>Team</p>
              </li>
              <li>
                <p>Presentation</p>
              </li>
            </ul>
          </div>
          <span></span>
          <div className={s.footerCards}>
            <h2>Community</h2>
            <ul>
              <li>
                <p>Join community</p>
              </li>
              <li>
                <p>Job opportunities</p>
              </li>
              <li>
                <p>Useful links</p>
              </li>
            </ul>
          </div>
          <span></span>
          <div className={s.footerCards}>
            <h2>LOGO</h2>
            <ul>
              <li>
                <p>Copyright &copy;&nbsp;2024</p>
              </li>
              <li>
                <p>+7 (777) 777-77-77</p>
              </li>
            </ul>
            <div className={s.footerLinks}>
              <img src={Linkedin} alt="Linkedin" />
              <img src={Telegram} alt="Telegram" />
              <img src={Instagram} alt="Instagram" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
