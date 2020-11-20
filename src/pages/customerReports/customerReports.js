import { render } from '@testing-library/react';
import React from 'react';
import {Tabs, Table, Button } from 'react-bootstrap';

class CustomerReports extends React.Component{
    constructor(props){
        super(props);
        const samples = [{testitem:'test1',value:1.5,norminal:'1-5',comment:'no comment'},
        {testitem:'test2',value:0.9,norminal:'1-5',comment:'no comment'},
        {testitem:'test3',value:1.6,norminal:'1-5',comment:'no comment'}];
        this.state = {data: samples, role:'suctomer'};

    }
    render(){
        return(
            <div>
                <h1>Customer Test Reports</h1>
                <Table striped bordered hover variant="dark" className='gap'>
                <thead>
                    <tr>                        
                        <th>Test Item</th>
                        <th>Result</th>
                        <th>Standard</th>
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
                        <Button variant="link" onClick={this.gotodetail}><td>Test Detail</td> </Button>                   
                    </tr>
                    ))}  
                </tbody>
            </Table>            
           </div>  
           
        )

    }
}

export default CustomerReports;  

