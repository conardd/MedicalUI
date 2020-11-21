import { render } from '@testing-library/react';
import React from 'react';
import BootstrapNavbar from '../../shared/navBar';
import axios from 'axios';
import {Button, InputGroup, FormControl, Table} from 'react-bootstrap';
class UsersManagement extends React.Component{
    constructor(props){
        super(props);               
       this.state ={role:'admin',users:[]};
       this.addNewUser = this.addNewUser.bind(this);
       //this.onchange = this.onchange.bind(this);
       //this.addNew = this.addNew.bind(this);
       
    }
    addNewUser = (e) =>{
        alert("add new");
    };
    componentDidMount(){
        console.log("componentDidMount");
        axios.get('http://localhost:60380/user')
             .then(response=>{
            const data = response.data.value;
            console.log("api response:");
            console.log(data);
            this.setState({users: data}, ()=>{console.log(this.state)});
            
        });
    }
    render(){
        console.log("render");
        return(

            <div> 
                 <BootstrapNavbar role={this.state.role} 
                             user={this.state.role} 
                             show={this.state.role}
                             current='Users Management' />               
                
                <Table striped bordered hover variant="dark" className='gap'>
                <thead>
                    <tr>                        
                        <th>User Name</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.map((cus)=>(
                        <tr>                        
                        <td>{cus.userName}</td>
                        <td>{cus.firstName}</td>
                        <td>{cus.lastName}</td>
                        <td>{cus.email}</td>
                        <Button variant="link" onClick={this.gotodetail}><td>edit</td> </Button>
                    </tr>
                    ))}  
                </tbody>
            </Table>
            <Button variant="primary" 
                        onClick={this.addNewUser} 
                        className='floatRight'>Add</Button>
            </div>
            
        )

    }
}

export default UsersManagement;

