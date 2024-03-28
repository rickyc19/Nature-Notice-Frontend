import { FunctionComponent, useState, useCallback } from "react";
import { Button } from "@mui/material";
import IconOutdoorFun from '../../images/vibe-icons/outdoors-2.svg'
import IconWildlife from '../../images/vibe-icons/claw.svg'
import IconGardening from '../../images/vibe-icons/gardening.svg'
import IconWater from '../../images/vibe-icons/water-droplet-2.svg'
import IconWellness from '../../images/vibe-icons/woman-meditate-2.svg'
import IconScience from '../../images/vibe-icons/plant-science.svg'
import IconArtsCrafts from '../../images/vibe-icons/art-cloud.svg'
import IconJustice from '../../images/vibe-icons/civil-right.svg'
import IconDarkSkies from '../../images/vibe-icons/astronomy.svg'
import Filters from "../FiltersModal/Filters";
import PortalPopup from "../FiltersModal/PortalPopup";
import styles from "./FilterBar.module.css";



function VibeItem (props: any) {
  return (
    <div className={styles.vibeitem}>
      <img src={props.vibeimage} alt='vibeicon' className={styles.vibeicon} />
      <div className='styles.vibename'>{props.vibename}</div>
    </div>
  )
}

function VibeFilters () {
  return (
    <form className={styles.vibefilters}>
      <VibeItem vibeimage={IconDarkSkies} vibename={"Outdoor Fun"}/>
      <VibeItem vibeimage={IconWildlife} vibename={"Wildlife"}/>
      <VibeItem vibeimage={IconGardening} vibename={"Gardening"}/>
      <VibeItem vibeimage={IconWater} vibename={"Water"}/>
      <VibeItem vibeimage={IconWellness} vibename={"Wellness"}/>
      <VibeItem vibeimage={IconScience} vibename={"Science"}/>
      <VibeItem vibeimage={IconArtsCrafts} vibename={"Arts & Crafts"}/>
      <VibeItem vibeimage={IconJustice} vibename={"Justice"}/>
      <VibeItem vibeimage={IconDarkSkies} vibename={"Dark Skies"}/>
    </form>
  )
}

const FilterBar: FunctionComponent = () => {
  const [isFiltersOpen, setFiltersOpen] = useState(false);

  const openFilters = useCallback(() => {
    setFiltersOpen(true);
  }, []);

  const closeFilters = useCallback(() => {
    setFiltersOpen(false);
  }, []);

  return (
    <>
      <header className={styles.filterbar}>
        <VibeFilters />
        <Button
          className={styles.filtersbutton}
          startIcon={<img width="18px" height="18px" src="/barsfilter-2.svg" />}
          disableElevation={true}
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#213502",
            fontSize: "15",
            borderColor: "#d7d7d7",
            borderRadius: "5px",
            "&:hover": { borderColor: "#d7d7d7" },
            width: 112,
            height: 56,
          }}
          onClick={openFilters}
        >
          Filters
        </Button>
      </header>
      {isFiltersOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFilters}
        >
          <Filters onClose={closeFilters} />
        </PortalPopup>
      )}
    </>
  );
};

export default FilterBar;
