import React, { Component } from 'react';
import TeamMember from './TeamMember';
import membeeinfoe from './membeeinfoe';



class Teams extends Component{
    constructor(){
        super();
        this.state = {
            membeeinfoe:membeeinfoe ,
             newArry : [],
             memberShow:'',
             counter:0,
        };
        this.clickEvent = this.clickEvent.bind(this);
     
    }


    clickEvent(){

        if(this.state.counter < membeeinfoe.length){
            this.state.newArry.push(membeeinfoe[this.state.counter]);
  
           this.memmbers =    this.state.newArry.map(
                member => 
                <TeamMember
                key={member.key} 
                name={member.name}
                img={member.img}
                postion={member.postion}
                phon={member.phon}
                email={member.email}
                />
                )
         
                
                    // this.setState({
                    //     memberShow: this.memmbers
                    //   });
               this.setState(pre=>{
                return{   counter:pre.counter + 1}
               })
        }
        }

    
    render(){
        return(
            <div className='row'>
                <button className='btn btn-primary btn-lg btn-block' onClick={this.clickEvent}>Click Me</button>
             { this.memmbers}
            </div>
        )
    }
    
   
}

export default Teams;