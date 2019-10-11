import React, { Component } from 'react'
import Test1 from './oldcomponents/Test1'
import Navbar from './components/Navbar'

import { makeStyles } from '@material-ui/core/styles';
import FormView from './components/FormView'
import {BrowserRouter,Route,Redirect} from 'react-router-dom'
import './App.css';
import Tabbar from './components/Tabbar';
import Contact from './components/Contact';
import Basichook from './components/Basichook';
import Pixagridlist from './components/Pixagridlist';
import AdvanceFormView from './components/AdvanceFormView';
import Dom from './components/Dom';
import Materialcss from './components/Materialcss';

import axios from 'axios'

export default class App extends Component {
  constructor(props){
    super(props)
    console.log('App construcotor')
  }

  state={
    pagevalue:0,
    searchtext:'',
    searchnumber:0,
    tileData:[],
    jsphd:[]       
  }
  
  classes = makeStyles(theme=>({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      
    },
  }));

  handleChange=(newValue)=>{
    this.setState({pagevalue:newValue});
  }

  handleSearch=(name,value)=>{
    this.setState({[name]:value},()=>{
      if(this.state.searchnumber>0&&this.state.searchtext)
      axios.get(`https://pixabay.com/api/?key=13006450-6a3717fd5a1bd68f3f63c9fd8&q=${this.state.searchtext}&image_type=photo&per_page=${this.state.searchnumber}`)
        .then(res=>this.setState({tileData:res.data.hits}))
        .catch(err=>console.log(err))
    })
  }

  handleLoadjson=()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/')
    .then(res=>{
      this.setState({jsphd:res.data})
    })
    .catch(err=>console.log(err))
  }

  handleJSPHD=(id,str)=>{
    const jsphd=this.state.jsphd
    let newTitle=[]
    //console.log(id)
    jsphd.map(a=>{
      if(id===a.id){
        newTitle=[...newTitle,{userId:a.userId,id:a.id,title:a.title,body:str}]
      }
      else{
        newTitle=[...newTitle,a]
      }
    })
    this.setState({jsphd:newTitle})
  }
  
  handleRoute=()=>{
    switch(this.state.pagevalue){
      case 0:
        return <Redirect to="/" exact/>
      case 1:
        return <Redirect to="/form" exact/>
      case 2:
        return <Redirect to="/contact" exact/>
      case 3:
        return <Redirect to="/basichook" exact/>
      case 4:
        return <Redirect to="/old" exact/>
      case 5:
        return <Redirect to="/advanceform" exact/>
      case 6:
        return <Redirect to="/materialcss" exact/>  
      case 7:
        return <Redirect to="/dom" exact/> 
      default:
        return
    }
  }

  componentWillUnmount(){
    this.setState({
      pagevalue:0,
      searchtext:'',
      searchnumber:0,
      tileData:[],
      jsphd:[]       
    })
  }

  render() {
    console.log('render')
    return (
      <BrowserRouter>
        <React.Fragment>
            <section id="section-1"></section>

            <Navbar pagevalue={ this.state.pagevalue} 
                    handleChange2={this.handleChange}
                    searchtext={this.state.searchtext}
                    searchnumber={this.state.searchnumber}
                    handleSearch={this.handleSearch}

            />
            <Tabbar pagevalue={this.state.pagevalue} handleChange2={this.handleChange}/>

            
            {this.handleRoute()}
            <Route exact path="/" render={()=><Pixagridlist tileData={this.state.tileData} />}/>
            <Route exact path="/form" render={()=><FormView jsphd={this.state.jsphd} handleJSPHD={this.handleJSPHD} handleLoadjson={this.handleLoadjson}/>}/>
            <Route exact path="/advanceform" render={()=><AdvanceFormView/>}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/old" component={Test1}/>
            <Route exact path="/basichook" component={Basichook}/>
            <Route exact path="/materialcss" component={Materialcss}/>
            <Route exact path="/dom" component={Dom}/>
            <button className="fixme"><a href="#section-1">Hello</a></button>

        </React.Fragment>
      </BrowserRouter>
    )
  }
}
