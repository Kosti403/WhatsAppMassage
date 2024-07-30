import { observer } from "mobx-react-lite";
import s from "./mainPage.module.scss";

import Stages from "./Stages/Stages";



const MainPage = observer(() => {
  return (
    <>
 
        <div className="container">
          <div className={s.mainBlock}>
            <div className={s.textBlock}>
              <h2>Уникальная система контроля</h2>
              <p className={s.textH}>
                Проверка сотрудников и их отчетности в одном месте
              </p>
              <blockquote className={s.quote}>
                "Пунктуальность — вежливость королей." — Людовик XVIII
              </blockquote>
              <p className={s.textH}>
                <span className={s.quoteSpan}>Сделайте свою работу легче</span>
              </p>
            </div>
            <div className={s.mainImg}></div>
          </div>
        </div>
        <Stages />
    </>
  );
});

export default MainPage;
