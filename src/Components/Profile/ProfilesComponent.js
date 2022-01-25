import UserProfile from "./UserProfile";

import React, { Component } from 'react';

export default class ProfilesComponent extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      count:0,
    };
  }
  componentDidMount(){
    setInterval(() => {
this.setState({count:this.state.count+1})
     }, 1000);
     console.log('componentDidMount()')
  }
  render() {
    return <div>
      
     <h2 style={{textAlign:'center'}}>Is mounted since: {this.state.count} s</h2>         
      <div style={{margin:'50px 15%',display:'flex',justifyContent:'space-between'}}>
      <div>
    </div>;

    {this.props.users.map((user,i)=><UserProfile user={user} key={i}  />)}  
  </div>
    </div>;
  }
}
