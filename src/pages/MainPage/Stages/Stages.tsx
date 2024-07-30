import s from "./Stages.module.scss";

export const Stages = () => {
  return (
    <div className="container">
      <div className={s.stages}>
        <div className={s.stagesContent}>
          <div className={s.stagesCards}>
            <div className={s.stageCard}>
              <h1>
                <span>01</span>
              </h1>
              <h4>Ознакомтесь с нами</h4>
            </div>
            <div className={s.stageCard}>
              <h1>
                <span>02</span>
              </h1>
              <h4>Пройдите регистрацию</h4>
            </div>
            <div className={s.stageCard}>
              <h1>
                <span>03</span>
              </h1>
              <h4>Настройте личный кабинет</h4>
            </div>
            <div className={s.stageCard}>
              <h1>
                <span>04</span>
              </h1>
              <h4>Пользуйтесь с удовольствием</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stages;
