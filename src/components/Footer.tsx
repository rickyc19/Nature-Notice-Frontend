import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.border}>
        <div className={styles.fill} />
      </div>
      <div className={styles.wrap}>
        <div className={styles.col}>
          <div className={styles.natureNoticeAllContainer}>
            <span>{`© 2024 `}</span>
            <span className={styles.natureNotice}>Nature Notice</span>
            <span>. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
