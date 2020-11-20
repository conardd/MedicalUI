import { render } from '@testing-library/react';
import React from 'react';
import {Tabs, Table, Button } from 'react-bootstrap';

class CustomerReports extends React.Component{
    constructor(props){
        super(props);
        const samples = [{testitem:'test1',date:'1-2-2019',dr:'Tim',comment:'normal'},
        {testitem:'test2',date:'10-9-2018',dr:'1-5',comment:'normal'},
        {testitem:'test3',date:'6-3-2020',dr:'1-5',comment:'normal'}];
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
                        <th>Date</th>
                        <th>Dr.</th>
                        <th>Comment</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map((cus)=>(
                        <tr>                        
                        <td>{cus.testitem}</td>
                        <td>{cus.date}</td>
                        <td>{cus.dr}</td>
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

