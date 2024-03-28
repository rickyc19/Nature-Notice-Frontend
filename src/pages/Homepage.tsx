import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/NavBar/SearchBar";
import MenuItems from "../components/NavBar/MenuItems";
import FrameComponent from "../components/FilterBar/FrameComponent";
import EventCard from "../components/EventCard";
import ShowMoreGroup from "../components/ShowMoreGroup";
import Footer from "../components/Footer";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onEventCardContainerClick = useCallback(() => {
    navigate("/event-page");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.homepage}>
      <div className={styles.fRAMEAWrapper}>
        <div className={styles.fRAMEA}>
          <div className={styles.fRAMEAInner}>
            <div className={styles.groupParent} onClick={onFrameContainerClick}>
              <img
                className={styles.groupIcon}
                loading="lazy"
                alt=""
                src="/group.svg"
              />
              <div className={styles.natureNoticeWrapper}>
                <img
                  className={styles.natureNoticeIcon}
                  loading="lazy"
                  alt=""
                  src="/nature-notice.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.eventsDisplayArea}>
            <SearchBar />
          </div>
          <div className={styles.eventsListContainer}>
            <MenuItems />
          </div>
        </div>
      </div>
      <FrameComponent />
      <main className={styles.homepageInner}>
        <section className={styles.filtersButtonContainerParent}>
          <div className={styles.filtersButtonContainer}>
            {Array(6).fill(<EventCard onEventCardContainerClick={onEventCardContainerClick} />)}
          </div>
          <ShowMoreGroup />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
