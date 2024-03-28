import { FunctionComponent } from "react";
import LocationDropdown from "./LocationDropdown";
import styles from "./SearchBar.module.css";

const SearchBar: FunctionComponent = () => {
  return (
    <div className={styles.searchbar}>
      <LocationDropdown />
      <input
        className={styles.searchEventsCommunities}
        placeholder='search events, communities, etc.'
      />
      <img className={styles.searchicon} alt="" src="/searchicon.svg" />
    </div>
  );
};

export default SearchBar;
