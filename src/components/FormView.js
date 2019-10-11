import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    grid: {
      padding: theme.spacing(1),
      textAlign: 'center',
    },
  }));
 


export default function FormView(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
          <Button onClick={e=>props.handleLoadjson()}color="inherit">Load</Button>
          {props.jsphd.map(m=> 
              (<Card className={classes.card} key={m.id}>
                  <Grid container>
                      <Grid item xs={12} sm={4} className={classes.grid}>
                          <TextField
                            id="outlined-textarea"
                            label="UserId"
                            placeholder="Placeholder"
                            multiline
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            value={m.userId}
                            fullWidth
                            
                          />
                      </Grid>
                      <Grid item xs={12} sm={4} className={classes.grid}>
                          <TextField
                            id="outlined-textarea"
                            label="Id"
                            placeholder="Placeholder"
                            multiline
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            value={m.id}
                            fullWidth
                            
                          />
                      </Grid>
                      <Grid item xs={12} sm={4} className={classes.grid}>
                          <TextField
                            id="outlined-textarea"
                            label="Title"
                            placeholder="Placeholder"
                            multiline
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            value={m.title}
                            fullWidth
                          />
                      </Grid>
                      <Grid item xs={12} className={classes.grid}>

                          <TextField
                            id="outlined-full-width2"
                            label="Body"
                            placeholder="Placeholder"
                            fullWidth
                            style={{ margin: 8 }}
                            margin="normal"
                            variant="outlined"
                            multiline
                            InputLabelProps={{
                            shrink: true,
                            }}
                            value={m.body}
                            onChange={e=>props.handleJSPHD(m.id,e.target.value)}
                          />
                      </Grid>
                  </Grid>
                </Card>)
          )}

         
        </React.Fragment>
    )
}

