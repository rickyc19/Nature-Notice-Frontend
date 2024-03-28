import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MenuItems from "./MenuItems";
import styles from "./NavBar.module.css";

const NavBar: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameWrapper}>
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
      <div className={styles.searchbarWrapper}>
        <div className={styles.searchbar}>
          <button className={styles.locationdropdown}>
            <div className={styles.mapPin11Parent}>
              <img className={styles.mapPin11} alt="" src="/mappin-1-1.svg" />
              <div className={styles.austin}>Austin</div>
            </div>
            <img className={styles.down1Icon} alt="" src="/down-1.svg" />
          </button>
          <div className={styles.searchEventsCommunities}>
            search events, communities, etc.
          </div>
          <img
            className={styles.searchicon}
            loading="lazy"
            alt=""
            src="/searchicon.svg"
          />
        </div>
      </div>
      <div className={styles.menuitemsWrapper}>
        <MenuItems />
      </div>
    </div>
  );
};

export default NavBar;
