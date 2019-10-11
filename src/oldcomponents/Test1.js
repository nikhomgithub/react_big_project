import React from 'react'
import './Test1.css'
import MediaCard from '../components/MediaCard'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    grid: {
      padding: theme.spacing(2),
      textAlign: 'center',
    },
  }));
  


export default function Test1() {
    const classes = useStyles();
    return (
        <React.Fragment>
 
            <div className="container">
                <div className="block">
                    <h3>Heading</h3>
                    <p>Enim veniam velit ex ex anim enim ut nulla laborum magna sunt nisi nisi. Fugiat nisi quis pariatur tempor pariatur enim..</p>
                </div>

                <div className="block">
                    <h3>Heading</h3>
                    <p>Enim veniam velit ex ex anim enim ut nulla laborum magna sunt nisi nisi. Fugiat nisi quis pariatur tempor pariatur enim..</p>
                </div>
                <div className="block">
                    <h3>Heading</h3>
                    <p>Enim veniam velit ex ex anim enim ut nulla laborum magna sunt nisi nisi. Fugiat nisi quis pariatur tempor pariatur enim..</p>
                </div>
                <div className="clr"></div>
            </div>
            
            
            <div className="container">
                <Grid container>
                    <Grid item xs={12} sm={4} className={classes.grid}>
                    
                            <MediaCard/>
                        
                    </Grid>
                    <Grid item xs={12} sm={4} className={classes.grid}>
                        
                            <MediaCard/>
                        
                    </Grid>
                    <Grid item xs={12} sm={4} className={classes.grid}>
                      
                            <MediaCard/>
                       
                    </Grid>
                </Grid>
            </div>
         
            <div className="container">
                <div className="block">
                    <h3>Heading</h3>
                    <p>Enim veniam velit ex ex anim enim ut nulla laborum magna sunt nisi nisi. Fugiat nisi quis pariatur tempor pariatur enim..</p>
                </div>

                <div className="block">
                    <h3>Heading</h3>
                    <p>Enim veniam velit ex ex anim enim ut nulla laborum magna sunt nisi nisi. Fugiat nisi quis pariatur tempor pariatur enim..</p>
                </div>
                <div className="block">
                    <h3>Heading</h3>
                    <p>Enim veniam velit ex ex anim enim ut nulla laborum magna sunt nisi nisi. Fugiat nisi quis pariatur tempor pariatur enim..</p>
                </div>
                <div className="clr"></div>
            </div>
            <div className="container">
                <div className="block">
                    <h3>Heading</h3>
                    <p>Enim veniam velit ex ex anim enim ut nulla laborum magna sunt nisi nisi. Fugiat nisi quis pariatur tempor pariatur enim..</p>
                </div>

                <div className="block">
                    <h3>Heading</h3>
                    <p>Enim veniam velit ex ex anim enim ut nulla laborum magna sunt nisi nisi. Fugiat nisi quis pariatur tempor pariatur enim..</p>
                </div>
                <div className="block">
                    <h3>Heading</h3>
                    <p>Enim veniam velit ex ex anim enim ut nulla laborum magna sunt nisi nisi. Fugiat nisi quis pariatur tempor pariatur enim..</p>
                </div>
                <div className="clr"></div>
            </div>
 
            <div className="container">
                <div className="block">
                    <h3>Heading</h3>
                    <p>Enim veniam velit ex ex anim enim ut nulla laborum magna sunt nisi nisi. Fugiat nisi quis pariatur tempor pariatur enim..</p>
                </div>

                <div className="block">
                    <h3>Heading</h3>
                    <p>Enim veniam velit ex ex anim enim ut nulla laborum magna sunt nisi nisi. Fugiat nisi quis pariatur tempor pariatur enim..</p>
                </div>
                <div className="block">
                    <h3>Heading</h3>
                    <p>Enim veniam velit ex ex anim enim ut nulla laborum magna sunt nisi nisi. Fugiat nisi quis pariatur tempor pariatur enim..</p>
                </div>
                <div className="clr"></div>
            </div>
        </React.Fragment>
    )
}
