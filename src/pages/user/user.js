import { render } from '@testing-library/react';
import React from 'react';
import BootstrapNavbar from '../../shared/navBar';

class User extends React.Component{
    constructor(props){
        super(props);
        const samples = [{testitem:'cus1',value:1.5,norminal:'1-5',comment:'no comment'},
                         {testitem:'cus2',value:0.9,norminal:'1-5',comment:'no comment'},
                         {testitem:'cus3',value:1.6,norminal:'1-5',comment:'no comment'}
       ];
       this.state ={data: samples, role:'admin'};
       this.onchange = this.onchange.bind(this);
       //this.addNew = this.addNew.bind(this);
       
    }
    onchange = (e) =>{
        this.props.history.push('/detail');
    };
    render(){
        return(
            <div> 
                 <BootstrapNavbar role={this.state.role} 
                             user={this.state.role} 
                             show={this.state.role}
                             current='User' />               
                <h1>user page</h1>
            </div>
        )

    }
}

export default User;

