import React from 'react';
import PropTypes from 'prop-types';



const UserProfile = ({user:{name,bio,profession,picture},handleName}) => {
  return <>
  <div className='card' style={{width:'250px',border:'3px solid magenta',margin:'20px',borderRadius:'10px',overflow:'hidden'}}>
  <img src={picture} style={{width:'250px',height:'300px'}}/>
  <div style={{padding:'10px'}}>
      <h3 >{name}</h3>
      <div><span style={{fontWeight:'bold'}}>Profession</span> : {profession}</div>
      <p style={{textAlign:'justify'}}>{bio}</p>
      <button style={{backgroundColor:'magenta',cursor:'pointer', color:'black',border:'none',padding:'10px'}} onClick={()=>{handleName(name)}}
      >Alert my name</button>
  </div>
  </div>
      
  </>;
};

UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
  }),

  handelName: PropTypes.func,
};

export default UserProfile;
