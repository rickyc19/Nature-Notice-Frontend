import { FunctionComponent } from "react";
import styles from "./EventHeaderGroup.module.css";

const EventHeaderGroup: FunctionComponent = () => {
  return (
    <div className={styles.eventheadergroup}>
      <div className={styles.eventheader}>
        <h1
          className={styles.wingsWildflowers}
        >{`Wings & Wildflowers: A Butterfly Garden Gala`}</h1>
        <div className={styles.eventdatelocdetails}>
          <div className={styles.eventdatelocdetailsInner}>
            <div className={styles.buttonParent}>
              <div className={styles.button}>
                <img
                  className={styles.mapPin21}
                  loading="lazy"
                  alt=""
                  src="/mappin-1-1.svg"
                />
                <div className={styles.onionCreekDrive}>
                  6814 Onion Creek Drive
                </div>
                <img className={styles.arrowIcon} alt="" src="/arrow@2x.png" />
                <img className={styles.arrowIcon1} alt="" src="/arrow1.svg" />
              </div>
              <div className={styles.button1}>
                <img
                  className={styles.calendarDay1Icon}
                  loading="lazy"
                  alt=""
                  src="/calendarday-1.svg"
                />
                <div className={styles.apr17232023}>Apr 17-23, 2023</div>
                <img className={styles.arrowIcon2} alt="" src="/arrow@2x.png" />
                <img className={styles.arrowIcon3} alt="" src="/arrow1.svg" />
              </div>
              <div className={styles.button2}>
                <img
                  className={styles.clockFive1Icon}
                  alt=""
                  src="/clockfive-1.svg"
                />
                <div className={styles.am}>12 AM</div>
                <img className={styles.arrowIcon4} alt="" src="/arrow@2x.png" />
                <img className={styles.arrowIcon5} alt="" src="/arrow1.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.addtocalendarbutton}>
        <img
          className={styles.calendarMinus1Icon}
          alt=""
          src="/calendarminus-1.svg"
        />
        <div className={styles.addToCalendar}>Add to calendar</div>
      </div>
    </div>
  );
};

export default EventHeaderGroup;
