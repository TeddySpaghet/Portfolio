/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Contact me!"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <a
              href="https://www.linkedin.com/in/theodore-pochart/"
              target="_blank"
              className={classes.dropdownLink}
            >
              <i className={classes.socialIcons + " fab fa-linkedin"} />
              LinkedIn
            </a>,
            <a
              href="https://github.com/TeddySpaghet"
              target="_blank"
              className={classes.dropdownLink}
            >
              <i className={classes.socialIcons + " fab fa-github"} />
              GitHub
            </a>,
              <a 
              href="mailto:theodore.pochart@gmail.com"
              target="_blank"
              className={classes.dropdownLink}
              >
                <i className={classes.socialIcons + " fab fa-google"} />
                Gmail
              </a>
            
          ]}
        />
      </ListItem>
      
    </List>
  );
}
