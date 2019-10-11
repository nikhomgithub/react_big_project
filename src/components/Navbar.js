import React from 'react';
import {fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 80,
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'white'
  },
  select:{
    color:'black',
  },
  option:{
    color:'red'
  }
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false,
  });

  const handleChangeSearch = name => event => {
    props.handleSearch(name,event.target.value) 
  };
  
  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({[side]: open });
  };

  const hc1=(e)=>{
    props.handleChange2(1)
  }
  
  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>  
          <ListItem button onClick={e=>props.handleChange2(0)}>
            <ListItemIcon><PhoneIcon/></ListItemIcon>
            <ListItemText primary='Phone' />
          </ListItem>
          <ListItem button onClick={hc1}>
            <ListItemIcon><FavoriteIcon/></ListItemIcon>
            <ListItemText primary='BaicJsonPH' />
          </ListItem>

          <ListItem button onClick={e=>props.handleChange2(2)}>
            <ListItemIcon><PersonPinIcon/></ListItemIcon>
            <ListItemText primary='Contact' />
          </ListItem>
          <ListItem button onClick={e=>props.handleChange2(3)}>
            <ListItemIcon><MailIcon/></ListItemIcon>
            <ListItemText primary='Mail' />
          </ListItem>
          <ListItem button onClick={e=>props.handleChange2(4)}>
            <ListItemIcon><InboxIcon/></ListItemIcon>
            <ListItemText primary='Old' />
          </ListItem>
          <ListItem button onClick={e=>props.handleChange2(5)}>
            <ListItemIcon><ShareIcon/></ListItemIcon>
            <ListItemText primary='AdvanceJsonPH' />
          </ListItem>

          <ListItem button onClick={e=>props.handleChange2(6)}>
           
            <ListItemText primary='MtCss' />
          </ListItem>
          <ListItem button onClick={e=>props.handleChange2(7)}>
        
            <ListItemText primary='Dom' />
          </ListItem>

      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
   
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={toggleDrawer('left', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>

          <FormControl className={classes.formControl}>
            <Select
              native
              value={props.searchnumber}
              onChange={handleChangeSearch('searchnumber')}
              className={classes.select}
            >
              <option className={classes.option} value="" />
              <option className={classes.option} value={5}>Five</option>
              <option className={classes.option} value={10}>Ten</option>
              <option className={classes.option} value={20}>Twenty</option>
            </Select>
          </FormControl>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              onChange={handleChangeSearch('searchtext')}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'Search' }}
            />
          </div>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {sideList('left')}
      </SwipeableDrawer>

    </div>
  );
}