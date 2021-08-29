import React from "react";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import SettingsIcon from "@material-ui/icons/Settings";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import ReceiptIcon from "@material-ui/icons/Receipt";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import { useSelector } from "react-redux";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import ImageAbstract from "../../Widgets/Image/Image";

import logo from "../../assets/Images/JB_Black.png";
import acc from "../../assets/Images/kidsBooks.jpg";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "100%",
    maxWidth: 400,
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  userListItem: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 40,
  },
  listItem: {
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
    paddingTop: 20,
    paddingBottom: 20,
  },
}));

const LeftDrawerMenu = ({ open, toggle }) => {
  const classes = useStyles();

  //User's Details from Redux
  const { details } = useSelector((state) => state.user);

  const listItemsToRender = () => {
    // GET DIFFERENT LIST ITEMS WITH SOME DEFAULTS
    let drawerItems = [];

    if (details)
      drawerItems.push({
        Icon: LocalLibraryIcon,
        text: "My Library",
      });
    else
      drawerItems.push({
        Icon: ExitToAppIcon,
        text: "Log In /Sign Up",
      });

    drawerItems = [
      ...drawerItems,
      {
        Icon: ReceiptIcon,
        text: "Blog",
      },
      {
        Icon: LiveHelpIcon,
        text: "FAQs",
      },
      {
        Icon: ContactMailIcon,
        text: "Contact Us",
      },
    ];

    return drawerItems;
  };

  const renderListItemButton = ({ Icon, text, action }) => (
    <ListItem
      button
      onClick={action}
      key={text}
      classes={{ root: classes.listItem }}
    >
      <ListItemIcon>
        <Icon color="secondary" />
      </ListItemIcon>
      <ListItemText>
        <p className="w-full text-secondary-main font-bold text-md">{text}</p>
      </ListItemText>
      <ListItemIcon>
        <ChevronRightIcon color="secondary" />
      </ListItemIcon>
    </ListItem>
  );

  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={toggle}
      onOpen={toggle}
      classes={{ paper: classes.drawer }}
    >
      <div className="w-full max-w-sm">
        <List style={{ padding: 0 }}>
          <ListItem>
            <div className="w-full flex justify-between items-center">
              <ImageAbstract
                containerClass="w-3/5 h-12"
                src={logo}
                alt="logo"
              />
              <IconButton color="secondary" size={"small"} onClick={toggle}>
                <KeyboardBackspaceIcon />
              </IconButton>
            </div>
          </ListItem>
          <Divider />
          {details && (
            <ListItem className={classes.userListItem}>
              <ImageAbstract
                containerClass="w-32 h-32 rounded-full overflow-hidden"
                src={acc}
                objectFit="cover"
                alt="profile-pic"
              />
              <div className="flex w-full justify-evenly items-center mt-5">
                <p className="text-secondary-main text-xl italic">
                  {details?.name}
                </p>
                <Button
                  color="secondary"
                  variant="contained"
                  size="small"
                  startIcon={<SettingsIcon />}
                >
                  My Account
                </Button>
              </div>
            </ListItem>
          )}
          <Divider />
          {listItemsToRender().map(renderListItemButton)}
        </List>
      </div>
    </SwipeableDrawer>
  );
};

export default LeftDrawerMenu;
