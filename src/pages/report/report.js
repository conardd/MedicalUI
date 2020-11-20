import { render } from '@testing-library/react';
import React from 'react';
import BootstrapNavbar from '../../shared/navBar';

class Report extends React.Component{
    constructor(props){
        super(props);
        this.state ={role:'supervisor'};
    }
    render(){
        return(
            <div>
                <BootstrapNavbar role={this.state.role} 
                             user={this.state.role}
                             current='Review' />
                <h1>Supervisor Review</h1>
            </div>
        )

    }
}

export default Report;

