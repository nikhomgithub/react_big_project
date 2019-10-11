import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridlisttile: {
    //width: 500,
    //height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

    


/**
 * pixaimages:largeImageURL
 *           :tags
 *           :user
 * ================================         
 * 
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function Pixagridlist(props) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const [image,setImage]=React.useState('');

    function handleClickOpen(a) {
        setOpen(true);
        setImage(a)
    }

    function handleClose() {
        setOpen(false);
    }

    const imageDialog = (image)=>(
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth={true}
            maxWidth={'lg'}
        >
            
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
            <img src={image} alt="" />
        </Dialog>
    )
    

  return (
    <div className={classes.root}>
      <GridList cellHeight={250} cols={3}className={classes.gridList}>
        {props.tileData.map(tile => (

          <GridListTile
            className={classes.gridlisttile} 
            key={tile.id}>
            <img src={tile.largeImageURL} alt="" />
            {imageDialog(tile.largeImageURL)}
            <GridListTileBar
              title={tile.tags}
              subtitle={<span>by: {tile.user}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.tags}`} className={classes.icon} onClick={()=>handleClickOpen(tile.largeImageURL)}>
                  <SearchIcon />
                </IconButton>
              }
            />
          </GridListTile>

        ))}
      </GridList>
    </div>
  );
}