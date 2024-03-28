import { FunctionComponent } from "react";
import styles from "./AudienceDescGroup.module.css";

const AudienceDescGroup: FunctionComponent = () => {
  return (
    <div className={styles.audiencedescgroup}>
      <div className={styles.audienceDescription}>Audience Description</div>
      <div className={styles.audiencedescription}>
        <span>{`This event is ideal for `}</span>
        <span className={styles.outdoorEnthusiastsNature}>
          outdoor enthusiasts, nature lovers, and anyone interested in
          sustainable living
        </span>
        <span>
          . Whether you're a seasoned hiker, a beginner gardener, or simply
          appreciate the beauty of the natural world, you'll find something to
          inspire and engage you at this event.
        </span>
      </div>
    </div>
  );
};

export default AudienceDescGroup;
