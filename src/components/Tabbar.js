import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles(theme=>({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
      },
}));

export default function IconTabs(props) {
  
  const classes = useStyles();
  const [value, setValue] = React.useState(props.pagevalue);

  const handleChange=(e,newValue)=> {
    //console.log(newValue)
    //console.log(e)
    setValue(newValue);
    props.handleChange2(newValue)
  }

  return (
        <Paper className={classes.root}>
          <Tabs
            value={props.pagevalue}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab icon={<PhoneIcon/>} label="Phone"/>
            <Tab icon={<FavoriteIcon/>} label="BasicJsonPH"/>
            <Tab icon={<PersonPinIcon />} label="Contact"/>
            <Tab icon={<MailIcon/>} label="Basichook"/>
            <Tab icon={<InboxIcon/>} label="Old"/>
            <Tab icon={<ShareIcon/>} label="AdvanceJsonPH"/>
            <Tab label="MtCss"/>
            <Tab label="Dom"/>

          </Tabs>
        </Paper>

  );
}