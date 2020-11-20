import React from 'react';
import {Button, InputGroup, FormControl} from 'react-bootstrap';
import './detail.css';


class Detail extends React.Component{
    constructor(props){
        super(props);
        const list = ['Blood Pressure','Heart Beat', 'Height', 'Weight'];
        this.state ={tests:list};
        this.handleAdd = this.handleAdd.bind(this);    
        this.onchange =this.onchange.bind(this);
    }
    handleAdd =(e) =>{
        //new rec added 
        //console.log(e);
        this.props.history.push('/landing');
    }
    
    onchange = (e) => {
        console.log(e.target);
        this.setState({[e.target.name]: e.target.value}, ()=>{console.log(this.state)});        
    }
    render(){
        return(
            <div className='gap'>
                <h3 className='floatLeft'>User Info:</h3>
                <InputGroup className="mb-3">
                        <InputGroup.Prepend className='mb-1'>
                            <InputGroup.Text id="basic-addon1">User Name:</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl   
                            name='name'
                            value={this.state.testitem}
                            onChangeCapture={this.onchange}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend className='mb-1'>
                            <InputGroup.Text id="basic-addon1">User Email</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl   
                            name='email'
                            value={this.state.testitem}
                            onChangeCapture={this.onchange}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend className='mb-1'>
                            <InputGroup.Text id="basic-addon1">User Address</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl   
                            name='email'
                            value={this.state.testitem}
                            onChangeCapture={this.onchange}/>
                    </InputGroup>
                    
                    <h3 className='floatLeft'>Exam Result:</h3>
                    {this.state.tests.map((l=>(
                        <InputGroup className="mb-3">
                        <InputGroup.Prepend className='mb-1'>
                    <InputGroup.Text>{l}</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl   
                            name={l}
                            //value={l}
                            onChangeCapture={this.onchange}/>
                    </InputGroup>
                    )))}
               
                    <Button variant="secondary" 
                            onClick={this.handleAdd} 
                            className='floatRight space'>Add</Button>  
                    <Button variant="secondary" 
                            onClick={this.handleAdd} 
                            className='floatRight space'>Cancel</Button>  
            </div>
        )

    }
}

export default Detail;

