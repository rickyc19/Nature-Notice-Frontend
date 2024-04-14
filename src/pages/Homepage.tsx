import {FunctionComponent, useCallback, useState} from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/NavBar/SearchBar";
import MenuItems from "../components/NavBar/MenuItems";
import FrameComponent from "../components/FilterBar/FrameComponent";
import EventCard from "../components/EventCard";
import ShowMoreGroup from "../components/ShowMoreGroup";
import Footer from "../components/Footer";
import styles from "./Homepage.module.css";
import { useQuery, gql } from "@apollo/client";

const GET_CALENDAR_EVENTS = gql`
  query Query {
    listCalendarEvents {
      calendarEvents {
        id
        host_event_id
        host_id
        event_name
        event_description
        event_price
        event_start_date
        event_end_date
        event_location
      }
    }
  }
`;

const Homepage: FunctionComponent = () => {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_CALENDAR_EVENTS);

  const onEventCardContainerClick = useCallback(() => {
    navigate("/event-page");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const [noEventCards, setNoEventCards] = useState(8);
  const onShowMoreClick = () => {
    setNoEventCards(noEventCards + 4);
  };

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
            {data?.listCalendarEvents.calendarEvents.map((calendarEvent: any) => (
              <EventCard
                onEventCardContainerClick={onEventCardContainerClick}
                eventTitle={calendarEvent.event_name}
                eventLocation={calendarEvent.event_location}
                eventStartDate={calendarEvent.event_start_date}
                eventEndDate={calendarEvent.event_end_date}
                eventTime={calendarEvent.event_start_date}
                eventPrice={calendarEvent.event_price}
                eventDescription={calendarEvent.event_description}
                eventHost={calendarEvent.host_id}
              />
            ))}
          </div>
          <ShowMoreGroup onClick={onShowMoreClick}/>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
