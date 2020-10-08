import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { changePage } from './utils/change-page';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  toolbar: theme.mixins.toolbar
}));

export const SideMenu = (props) => {
  const classes = useStyles();

  const { toggleDrawer } = props;

  return (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['Home', 'Characters', 'Comics', 'Creators', 'Events', 'Series', 'Stories'].map((text, index) => (
          <ListItem onClick={() => changePage(text.toLowerCase(), props)} button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}
