import React from "react";
import "./header.css";
import styles from "./header.module.css";
import "../Foldder-Header/headerMedia.css";
function header() {
  return (
    <>
      <header className={styles.header} id={styles.header}>
        <div className={styles.container} id={styles.container}>
          <div className={styles.headerClass} id={styles.headerClass}>
            <div className={styles.header_P_A} id={styles.header_P_A}>
              <p className={styles.headerClass_P} id={styles.headerClass_P}>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
              </p>
              <a
                className={styles.headerSelect_A}
                id={styles.headerSelect_A}
                href="#"
              >
                ShopNow
              </a>
            </div>
            <select className={styles.selectHeader} id={styles.selectHeader}>
              <option value="0">English</option>
            </select>
          </div>
        </div>
      </header>
    </>
  );
}

export default header;
