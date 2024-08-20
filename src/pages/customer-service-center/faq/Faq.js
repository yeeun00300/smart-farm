import React, { useState } from "react";
import styles from "./Faq.module.scss";

function Faq({ title, description }) {
  // 초기 상태는 false로 .answer(답변)을 숨깁니다.
  const [isVisible, setIsVisible] = useState(false);

  // .detail(버튼)을 누를 때의 함수입니다.
  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <>
      <div className={styles.faq}>
        <div className={styles.question}>
          <h3>title</h3>
          <button className={styles.detail} onClick={toggleVisibility}>
            눌러보셈
          </button>
        </div>
        {isVisible && (
          <div className={styles.answer}>
            <h4>description</h4>
          </div>
        )}
      </div>
    </>
  );
}

export default Faq;
