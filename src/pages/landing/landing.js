import { render } from '@testing-library/react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tabs, Table, Button } from 'react-bootstrap';
import BootstrapNavbar from '../../shared/navBar';
import './landing.css';


class Landing extends React.Component{

    constructor(props){
        super(props);
        const samples = [{testitem:'cus1',value:1.5,norminal:'1-5',comment:'no comment'},
                         {testitem:'cus2',value:0.9,norminal:'1-5',comment:'no comment'},
                         {testitem:'cus3',value:1.6,norminal:'1-5',comment:'no comment'}
       ];
       this.state ={data: samples, role:'employee'};
       this.gotodetail = this.gotodetail.bind(this);
       this.addNew = this.addNew.bind(this);
       
    }
    addNew = (e) =>{
        this.props.history.push('/detail');
    };
    gotodetail = () =>{
        console.log("edit trigged");
        this.props.history.push('/detail');
    };
    render(){     
        this.state.isAdmin = (this.state.role == 'admin') ? true: false;
        this.state.isInternalUser = (this.state.role == 'admin' || this.state.role == 'employee') ? true: false;   
        return(
           <div>
            <BootstrapNavbar role={this.state.role} 
                             user={this.state.role} 
                             show={this.state.role}
                             current='Client Report' />
            <Table striped bordered hover variant="dark" className='gap'>
                <thead>
                    <tr>                        
                        <th>Customer Name</th>
                        <th>Test Result</th>
                        <th>Normal Value</th>
                        <th>Comment</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map((cus)=>(
                        <tr>                        
                        <td>{cus.testitem}</td>
                        <td>{cus.value}</td>
                        <td>{cus.norminal}</td>
                        <td>{cus.comment}</td>
                        <Button variant="link" onClick={this.gotodetail}><td>edit</td> </Button>
                    </tr>
                    ))}  
                </tbody>
            </Table>
            <Button variant="secondary"
                        onClick={this.addNew} 
                        className='floatRight'>Add New</Button>
           </div>           
        )
    }
}

export default Landing;

