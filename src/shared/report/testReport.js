import React from 'react';
import Items from '../items/items';

class TestReport extends React.cloneElement{

    constructor(props){
        super(props);
        const initdata = {testitem:'',value:0,norminal:'',comment:''};
        this.state = {tests: {title: 'regular',items:[initdata]}, 
                      name:'Name',
                      email:'abc@user.com',
                      date: new Date()};
        this.onchange = this.onchange.bind(this);  
        //this.handleItemChangeCallback = this.handleItemChangeCallback.bind(this);
    }
    onchange = (e) =>{         
        
    }
    
    render(){

        return(
            <div>              
                            
                <items items={this.stste.tests}/>
            </div>
        );
    }


export default  TestReport;