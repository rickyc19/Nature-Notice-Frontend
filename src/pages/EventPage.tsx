import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import NavBar from "../components/NavBar/NavBar";
import EventHeaderGroup from "../components/EventPage/EventHeaderGroup";
import EventPicGroup from "../components/EventPage/EventPicGroup";
import EventDetailHeaderGroup from "../components/EventPage/EventDetailHeaderGroup";
import AudienceDescGroup from "../components/EventPage/AudienceDescGroup";
import ReservationName from "../components/EventPage/ReservationName";
import ReservationEmail from "../components/EventPage/ReservationEmail";
import ReservationSpots from "../components/EventPage/ReservationSpots";
import styles from "./EventPage.module.css";

const EventPage: FunctionComponent = () => {
  return (
    <div className={styles.eventPage}>
      <header className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <NavBar />
        </div>
        <div className={styles.border}>
          <div className={styles.fill} />
        </div>
      </header>
      <main className={styles.eventPageInner}>
        <section className={styles.eventheadergroupParent}>
          <EventHeaderGroup />
          <EventPicGroup />
          <div className={styles.frameGroup}>
            <div className={styles.eventdetailheadergroupParent}>
              <EventDetailHeaderGroup />
              <div className={styles.hostdescription}>
                Accumsan diam sed nulla sagittis quis vulputate morbi in.
                Venenatis eu viverra consectetur gravida. Sed sit mauris proin
                cursus auctor. Neque nibh consequat blandit adipiscing.
                Consequat cursus mus vestibulum adipiscing nec. Nam elit at amet
                mauris. Quisque sed dictum augue mauris in.
              </div>
              <div className={styles.border1}>
                <div className={styles.fill1} />
              </div>
              <AudienceDescGroup />
            </div>
            <form className={styles.reservationgroup}>
              <div className={styles.reservationheadergroup}>
                <div className={styles.eventprice}>
                  <span className={styles.span}>{`$15 `}</span>
                  <span className={styles.entry}>entry</span>
                </div>
                <div className={styles.eventremainingspots}>
                  <span className={styles.spots}>23 spots</span>
                  <span className={styles.remaining}> remaining</span>
                </div>
              </div>
              <div className={styles.reservationdetailsgroup}>
                <ReservationName />
                <ReservationEmail />
                <ReservationSpots />
              </div>
              <Button
                className={styles.reservebutton}
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#56a950",
                  borderRadius: "5px",
                  "&:hover": { background: "#56a950" },
                  height: 46,
                }}
              >
                Reserve
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.border2}>
          <div className={styles.fill2} />
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
    </div>
  );
};

export default EventPage;
