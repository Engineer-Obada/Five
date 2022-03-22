import React, { Component } from 'react';
import Teams  from './Teams';

class TeamMember extends Component{
    render(){
        return(
            <div className='col-md-4  col-sm-6' >
               <div className='card'>
                   <div className='card-header'>
                      <img src={this.props.img} style={{maxWidth:'100%'}}></img>
                       <div className='card-body' >
                       <h2>{this.props.name}</h2>
                       <h5>{this.props.postion}</h5>
                       <div>{this.props.phon}</div>
                       <div>{this.props.email}</div>
                       <div>{this.props.website}</div>
      
                       </div>
                   </div>
               </div>
      
            </div>
          )
    }

}

export default TeamMember;