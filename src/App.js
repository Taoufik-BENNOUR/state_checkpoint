import { users } from './data';
import ProfilesComponent from './Components/Profile/ProfilesComponent';
import Header from './Components/Header/Header';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      show:true,
    };
  }

  componentWillUnmount(){
    console.log('un')
  }
  show=()=> {
   this.setState({ show:!this.state.show });
  }
  render() {
      return(
        <>    
        <Header />
   <div style={{marginTop:'100px',textAlign:'center'}}>
            <button style={{backgroundColor:'rgb(204, 0, 255,0.8)',padding:"10px"}} onClick={this.show}>Show Profiles</button>
        </div>{this.state.show&&<ProfilesComponent users={users}/>
}
          </>
                    )
  }
}


export default App;
