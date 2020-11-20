import React from 'react';
import { ThemeProvider } from 'react-bootstrap';
import {InputGroup , FormControl, Button,Table} from 'react-bootstrap';

class Item extends React.Component{

    constructor(props){
        super(props);       
        this.state = {testitem:this.props.data.testitem,
                      value:this.props.data.value,
                      norminal:this.props.data.norminal,
                      comment:this.props.data.comment};        
        this.onchange = this.onchange.bind(this);        
    }

    onchange = (e) =>{         
        console.log(this.state);       
        this.setState({[e.target.name]: e.target.value},
            () => console.log(this.state));     
        //console.log(this.state);
        this.props.parentCallback(this.state);   
        //this.props.handleItemChangeCallback(this.state);  
    }

    render(){

        return (
            <div>
                <div>

                <Table striped bordered hover variant="dark" className='gap'>
                <thead>
                    <tr>                        
                        <th>Customer Name</th>
                        <th>Test Result</th>
                        <th>Normal Value</th>
                        <th>Comment</th>
                    </tr>
                </thead>
                <tbody>                   
                        <tr>                        
                        <td>{this.props.data.testitem}</td>
                        <td>{this.props.data.value}</td>
                        <td>{this.props.data.norminal}</td>
                        <td>{this.props.data.comment}</td>                       
                    </tr>
                   
                </tbody>
            </Table>

                </div>               
                    <div name='edit-area'>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend className='mb-1'>
                            <InputGroup.Text id="basic-addon1">Test Item</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl   
                            name='testitem'
                            value={this.state.testitem}
                            onChangeCapture={this.onchange}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend className='mb-1'>
                            <InputGroup.Text id="basic-addon2">Test Item</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl   
                            name='value'
                            value={this.state.value}
                            onChangeCapture={this.onchange}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend className='mb-1'>
                            <InputGroup.Text id="basic-addon3">Test Item</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl   
                            name='norminal'
                            value={this.state.norminal}
                            onChangeCapture={this.onchange}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend className='mb-1'>
                            <InputGroup.Text id="basic-addon4">Test Item</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl   
                            name='comment'
                            value={this.state.comment}
                            onChangeCapture={this.onchange}/>
                    </InputGroup>                                
                </div>
              

                
            </div>
        );
    }

}

export default Item;