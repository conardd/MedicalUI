import { render } from '@testing-library/react';
import React from 'react';
import BootstrapNavbar from '../../shared/navBar';

class UsersManagement extends React.Component{
    constructor(props){
        super(props);               
       this.state ={role:'admin'};
       //this.onchange = this.onchange.bind(this);
       //this.addNew = this.addNew.bind(this);
       
    }
    // onchange = (e) =>{
    //     this.props.history.push('/detail');
    // };
    render(){
        return(
            <div> 
                 <BootstrapNavbar role={this.state.role} 
                             user={this.state.role} 
                             show={this.state.role}
                             current='Users Management' />               
                <h1>Users Management page</h1>
            </div>
        )

    }
}

export default UsersManagement;

