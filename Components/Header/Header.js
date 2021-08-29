import React, { useEffect, useState } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import Tooltip from "@material-ui/core/Tooltip";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";

import { useSelector } from "react-redux";

import HamburgerIcon from "../../Widgets/HamburgerIcon/hamburgerIcon";
import InputField from "../../Widgets/InputField/InputField";
import { textFieldKeys } from "../../helpers/utils";
import logo from "../../assets/Images/JB_Black.png";
import defaultAccImg from "../../assets/Images/acc.png";
import LeftDrawerMenu from "../LeftDrawerMenu/LeftDrawerMenu";
import ImageAbstract from "../../Widgets/Image/Image";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(7),
    right: theme.spacing(2),
    zIndex: 50,
  },
  tooltip: {
    fontSize: 13,
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.dark,
  },
  avatar: {
    width: 25,
    height: 25,
    cursor: "pointer",
    objectFit: "contain",
  },
  arrow: {
    color: theme.palette.secondary.main,
    width: 8,
    height: 8,
    marginLeft: 2,
    marginTop: 3,
  },
  button: {
    fontSize: "0.7em",
    [theme.breakpoints.up("sm")]: {
      fontSize: "0.8em",
    },
  },
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({ threshold: 50 });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

const Header = (props) => {
  const classes = useStyles();
  const { details } = useSelector((state) => state.user);

  const [values, setValues] = useState({});
  const [openDrawer, setOpenDrawer] = useState(false);

  let mobileView = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [expandSearch, setExpandSearch] = useState(!mobileView);

  useEffect(() => {
    setExpandSearch(!mobileView);
  }, [mobileView]);

  const renderSearchBar = () => (
    <div
      className={`my-3 ${
        (expandSearch && mobileView) || !mobileView ? "flex-1" : "w-0 opacity-0"
      } transition-all duration-500 ${!mobileView && "max-w-md"} mr-2`}
    >
      <InputField
        fieldName={textFieldKeys.SEARCH}
        skipValidation
        values={values}
        setValues={setValues}
        hideLabel
        variant="outlined"
        inputStyles={{
          fontSize: 14,
          paddingLeft: mobileView ? 0 : 7,
        }}
        cusPlaceholder="Search books, authors..."
        hideStartIcon={mobileView}
      />
    </div>
  );

  const toggleDrawer = () => setOpenDrawer(!openDrawer);

  return (
    <>
      <HideOnScroll>
        <AppBar>
          <div className="w-full flex items-center bg-primary-main padding-alignment h-16 justify-between">
            <IconButton
              size={mobileView ? "small" : "medium"}
              onClick={toggleDrawer}
            >
              <HamburgerIcon />
            </IconButton>
            <Slide
              in={!expandSearch || !mobileView}
              timeout={200}
              direction="right"
              mountOnEnter
              unmountOnExit
            >
              <div className="ml-4 md:w-3/12 w-4/12 h-full max-h-10">
                <ImageAbstract containerClass="w-full h-full" src={logo} />
              </div>
            </Slide>
            {mobileView ? (
              <div className="flex flex-1 justify-end items-center">
                <IconButton
                  onClick={() => setExpandSearch(!expandSearch)}
                  style={{ padding: "0 10px" }}
                >
                  <SearchIcon />
                </IconButton>
                {renderSearchBar()}
                {details && (
                  <Slide
                    in={!expandSearch}
                    direction="left"
                    mountOnEnter
                    unmountOnExit
                    timeout={200}
                  >
                    <div className="flex items-center">
                      <ImageAbstract
                        containerClass={"w-6 h-6 cursor-pointer rounded-full"}
                        src={defaultAccImg}
                      />
                      <IconButton
                        className={classes.arrow}
                        // onClick={handleOpenMenu}
                        // ref={menuTrigger}
                      >
                        <ExpandMoreIcon />
                      </IconButton>
                    </div>
                  </Slide>
                )}
              </div>
            ) : (
              <>
                {renderSearchBar()}
                {details && (
                  <>
                    <a
                      href="/"
                      className="text-secondary-main font-bold text-xl"
                    >
                      My Account
                    </a>
                    <IconButton>
                      <Tooltip
                        title="My Books"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <LocalLibraryIcon color="secondary" />
                      </Tooltip>
                    </IconButton>
                  </>
                )}
              </>
            )}

            {!details && (
              <Slide
                in={!expandSearch || !mobileView}
                timeout={200}
                direction="left"
                mountOnEnter
                unmountOnExit
              >
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                >
                  Log In<span style={{ margin: "0 10px" }}>|</span>Sign Up
                </Button>
              </Slide>
            )}
          </div>
        </AppBar>
      </HideOnScroll>

      {/* THIS IS THE POSITION IN THE PAGE AFTER WHICH SCROLL TO TOP BUTTON IS VISIBLE */}
      {mobileView && <div style={{ marginTop: 10 }} />}
      <Toolbar id="back-to-top-anchor" />

      <ScrollTop {...props}>
        <Fab color="secondary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <LeftDrawerMenu open={openDrawer} toggle={toggleDrawer} />
    </>
  );
};

export default Header;
