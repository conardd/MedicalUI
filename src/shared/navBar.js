import React from 'react';
import './nav.css';
import {BrowserRouter as Router, Switch,Route,useParams, } from "react-router-dom";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import Detail from '../pages/detail/detail.js';
import './nav.css';

class BootstrapNavbar extends React.Component{
    constructor(props){
        super(props);           
        const superUser = ['admin'];
        const primaryUser = ['admin', 'supervisor'];
        const normalUser = ['admin', 'supervisor','employee'];    
        
        const showReview = primaryUser.includes(this.props.role) && 'Review' !== this.props.current;
        const showUser = superUser.includes(this.props.role) && 'User' !== this.props.current;
        const showReport = normalUser.includes(this.props.role) && 'Client Report' !== this.props.current;
        const showSearchBar = normalUser.includes(this.props.role);
        console.log(showReview);
        this.state = {showReview: showReview?'true':'false',
                      showReport: showReport?'true':'false',
                      showSearchBar: showSearchBar?'true':'false',
                      showUser: showUser?'true':'false' };
    }

    render(){

        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className='fullsize floatright'>
                                <Navbar.Brand href="#"className='highligh'>{this.props.current}</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">                                
                                    <Nav className="mr-auto">
                                    {this.state.showReview==='true' &&
                                        <Nav.Link href="/report">Review</Nav.Link>
                                    }
                                    { this.state.showUser==='true'  &&
                                        <Nav.Link href="/user">Users Management</Nav.Link>
                                    }
                                    
                                    {this.state.showReport==='true'  &&
                                        <Nav.Link href="/landing">Clients Report</Nav.Link>
                                    }
                                    </Nav>                                                                 
                                    {this.state.showSearchBar==='true' &&
                                    <Form inline>
                                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                        <Button variant="outline-success">Search</Button>
                                    </Form>
                                    }
                                     <Form.Label className='role'>Role: {this.props.role}</Form.Label>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />                            
                        </Router>
                    </div>
                </div>
            </div>
        )  
    }
}

export default BootstrapNavbar;