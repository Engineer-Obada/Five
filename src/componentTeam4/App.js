import React, { Component } from 'react';
import TeamMember from './TeamMember'
import Header  from './Header';
import Teams from './Teams';
class  App extends Component{

  render(){
    return (
      <div className='container'>
        <Header />
       <Teams />
      </div>
    );
  }

}

export default App;
