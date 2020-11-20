import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {InputGroup , FormControl, Button} from 'react-bootstrap';
//import axios from 'axios';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {userName:'', password: '', role: ''};
        this.handleSubmit = this.handleSubmit.bind(this);  
        this.handlechange = this.handlechange.bind(this);
        this.newUser = this.newUser.bind(this);
    }

    newUser = () =>{
        this.props.history.push('/register');
    }
    handleSubmit = (e) => {              
        // axios.post('/login', {
        //     userName: this.state.userName,
        //     lastName: this.state.password
        //   });  

        //after login user role will return to redirect to differnet page
        //redux will be used to update user state in store
        //redirect page will be based on user's role
        //alert('sss');        
        //this.setState({role:this.state.userName}, ()=>{console.log(this.state.role);});
        console.log(this.state);
        switch(this.state.userName){
        case 'admin':
            this.props.history.push('/usersManagement');
            break;
        case 'employee':
            this.props.history.push('/landing');           
            break;
        case 'supervisor':
            this.props.history.push('/report');
            break;   
        case 'customer':
            this.props.history.push('/customerReports');
            break; 
        case 'new':
            this.props.history.push('/register');
            break;
        default:
            this.props.history.push('/register');
            break;

        }
        
    }    
    handlechange = (e) => {
        this.setState({[e.target.name]: e.target.value}, ()=>{console.log(this.state);});
    }
    render(){
        return(
            <div>
                <h1 className='floatLeft gap'>User Login:</h1>
                <InputGroup className="mb-3 doublegap">
                <InputGroup.Prepend className='mb-1'>
                    <InputGroup.Text id="basic-addon1">User Name:</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        name='userName'
                        placeholder="User name"
                        aria-describedby="basic-addon1"
                        onChange={this.handlechange}
                    />
                     </InputGroup>
                    <InputGroup className="mb-3">
                    <InputGroup.Prepend className='mb-1'>
                    <InputGroup.Text id="basic-addon1">Password:</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        name='password'
                        placeholder="Password"                        
                        aria-describedby="basic-addon1"
                        onChange={this.handlechange}
                    />
                </InputGroup>
                <Button variant="secondary" 
                        onClick={this.handleSubmit} 
                        className='floatRight'>Login</Button>
                        
                <Button variant="link"
                        onClick={this.newUser} 
                        className='floatRight'>New User?</Button>
            </div>
        )

    }
}

export default Login;

