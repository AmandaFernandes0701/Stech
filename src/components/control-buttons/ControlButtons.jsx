import { ViewModule, Menu, SwapVert, FilterList } from "@mui/icons-material";
import { IconButton, Button } from "@mui/material";

import { Controls } from "./styles";

const getButtonClass = (buttonName, activeButtons) =>
  activeButtons.includes(buttonName) ? "active" : "";

const ControlButtons = ({
  activeButtons,
  handleFilterButtonClick,
  isSmallScreen,
}) => (
  <Controls>
    <IconButton
      className={`icon-button ${getButtonClass("viewModule", activeButtons)}`}
      onClick={() => handleFilterButtonClick("viewModule")}
      aria-label="View Module"
    >
      <ViewModule />
    </IconButton>
    <IconButton
      className={`icon-button ${getButtonClass("menu", activeButtons)}`}
      onClick={() => handleFilterButtonClick("menu")}
      aria-label="Menu"
    >
      <Menu />
    </IconButton>
    <Button
      className={`icon-button ${getButtonClass("sort", activeButtons)}`}
      startIcon={<SwapVert />}
      onClick={() => handleFilterButtonClick("sort")}
      aria-label="Sort"
    >
      {!isSmallScreen && "Sort"}
    </Button>
    <Button
      className={`icon-button ${getButtonClass("filter", activeButtons)}`}
      startIcon={<FilterList />}
      onClick={() => handleFilterButtonClick("filter")}
      aria-label="Filter"
    >
      {!isSmallScreen && "Filter"}
    </Button>
  </Controls>
);

export default ControlButtons;
