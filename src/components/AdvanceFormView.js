import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import axios from 'axios'

export default class AdvanceFormView extends Component {

    constructor(props){
        super(props)
    }

    state={
        
    }

    classes = makeStyles(theme=>({
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
    
    componentWillMount(){
        let newJsphd=[]
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(res=>{
          res.data.map(m=>{
            newJsphd=[...newJsphd,m]
          })
        })
        .then(()=>this.setState({jsphd:newJsphd},()=>{
            //console.log(this.state.jsphd)
        }))
        .catch(err=>console.log(err))
    }

    componentWillUnmount(){
        this.setState({jsphd:''})
    }

    buildTable=()=>{

    }

    render() {
        return (
            <React.Fragment>
                 <Card className={this.classes.card}>
                    <Grid container>
                        <Grid item xs={12} sm={4} className={this.classes.grid}>
                            <TextField
                                id="outlined-textarea"
                                label="UserId"
                                placeholder="Placeholder"
                                multiline
                                className={this.classes.textField}
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                style={{ margin: 8 }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4} className={this.classes.grid}>
                            <TextField
                                id="outlined-textarea"
                                label="Id"
                                placeholder="Placeholder"
                                multiline
                                className={this.classes.textField}
                                margin="normal"
                                variant="outlined"
                                fullWidth 
                                style={{ margin: 8 }}                      
                            />
                        </Grid>
                        <Grid item xs={12} sm={4} className={this.classes.grid}>
                            <TextField
                                id="outlined-textarea"
                                label="Title"
                                placeholder="Placeholder"
                                multiline
                                className={this.classes.textField}
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                style={{ margin: 8 }}
                            />
                        </Grid>
                        <Grid item xs={12} className={this.classes.grid}>

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
                            />
                        </Grid>
                    </Grid>
                </Card>

            </React.Fragment>
        )
    }
}

/*

    handleChangeTitle=(index,event)=>{
        const newJsphd=[...this.state.jsphd]
        newJsphd[index].title=event.target.value
        this.setState({jsphd:newJsphd})
    }

    handleChangeUserId=(index,event)=>{
        const newJsphd=[...this.state.jsphd]
        newJsphd[index].userId=event.target.value
        this.setState(newJsphd)
    }

    handleChangeId=(index,event)=>{
        const newJsphd=[...this.state.jsphd]
        newJsphd[index].id=event.target.value
        this.setState(newJsphd)
    }

    handleChangeTitle=(index,event)=>{
        const newJsphd=[...this.state.jsphd]
        newJsphd[index].title=event.target.value
        this.setState(newJsphd)
    }

    handleChangeBody=(index,event)=>{
        const newJsphd=[...this.state.jsphd]
        newJsphd[index].body=event.target.value
        this.setState(newJsphd)
    }


*/