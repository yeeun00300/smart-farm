import React, { useState } from "react";
import styles from "./CustomerServiceCenter.module.scss";
// import up from "/assets/up-arrow_icon-icons.com_73351.svg";
import Faq from "./faq/Faq";

// up, down 화살표에 해당하는 이미지는 public assets안에 있음
// up-arrow_icon-icons.com_73351.svg - up 화살표에 해당하는 이미지
// angle-arrow-down_icon-icons.com_73683.svg - down 화살표에 해당하는 이미지

function CustomerServiceCenter() {
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
          <h3>제목1</h3>
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
      <div className={styles.faq}>{/* <Faq /> */}</div>
    </>
  );
}

export default CustomerServiceCenter;
