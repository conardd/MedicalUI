import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {InputGroup , FormControl, Button} from 'react-bootstrap';

class Register extends React.Component{
    constructor(props) {
        super(props);
        this.state = {email:'', firstName:'',lastName:'', registered: 'false'};
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value}, ()=>{console.log(this.state)});    
    }
    handleSubmit = (e) =>{
        //register custoer
        this.setState({registered:'true'}, ()=>{console.log(this.state)});       
    }
    render(){
        return(
            <div>
                <h1 className='floatLeft gap'>Register</h1>
                { this.state.registered === 'false' &&
                <div>                
                <InputGroup className="mb-3 doublegap">
                <InputGroup.Prepend className='mb-1'>
                    <InputGroup.Text id="basic-addon1">User Email</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        name='email'
                        placeholder="Email"
                        aria-describedby="basic-addon1"
                        onChange={this.onChange}
                    />
                     </InputGroup>
                    <InputGroup className="mb-3">
                    <InputGroup.Prepend className='mb-1'>
                    <InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        name='firstName'
                        placeholder="First Name"                        
                        aria-describedby="basic-addon1"
                        onChange={this.onChange}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend className='mb-1'>
                    <InputGroup.Text id="basic-addon1">Last Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        name='lastName'
                        placeholder="Last Name"                        
                        aria-describedby="basic-addon1"
                        onChange={this.onChange}
                    />
                </InputGroup>                
                <Button variant="secondary" 
                        onClick={this.handleSubmit} 
                        className='floatRight'>Register</Button>                                        
                </div>
                }
                {this.state.registered === 'true' &&
                    <div>
                    <br/><br/>
                    <p className='floatLeft'>
                        Registered! You will receive email shortly for your login infomation.
                    </p>
                    </div>
                }
            </div>
        )

    }
}

export default Register;

