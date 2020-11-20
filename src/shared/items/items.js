import React from 'react';
import Item from '../Item/item';

class Items extends React.Component{

    constructor(props){
        super(props);
        const initdata = {testitem:'',value:0,norminal:'',comment:''};
        this.state = {title: 'regular', items:[initdata]};
        //this.onchange = this.onchange.bind(this);  
        this.handleItemChangeCallback = this.handleItemChangeCallback.bind(this);
    }
    // onchange = (e) =>{         
    //     //console.log(this.state);       
    //     // this.setState({[e.target.name]: e.target.value});     
    //     // //console.log(this.state);
    //     // this.props.parentCallback(this.state);       
    // }
    //handle change from child
     handleItemChangeCallback = (e) =>{
        //console.log(e);
        //console.log(this.state);
        //this.setState({items: [...this.state.items, e]});
        
        console.log(this.state);
        this.props.handleItemChangeCallback(this.setState);
        

     }
    render(){

        return(
            <div>
            
                
                {this.state.items.map((i)=>(
                    <Item data = {i} parentCallback ={this.handleItemChangeCallback}/>
                ))}
                
            </div>
        );
    }
}

export default  Items;