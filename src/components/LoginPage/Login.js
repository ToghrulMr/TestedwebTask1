import React, {Component} from 'react'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import './LoginPage.css'

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin:true 
         }
    }
    changeLogin=()=>{
        if(this.state.isLogin)
           this.setState({isLogin :false});
        else
        this.setState({isLogin :true});
    }
    render() {
        return( 
            <div className='login_main'>
                <div className='login_header'>
                    <p className="login_logo">Log In</p>
                    <p className='login_head'>Don't have an account?  <span>Sign Up</span> </p>
              </div>
                   <div className='login_body'> 
                    <input className="loginPage_text" type="text" placeholder="E-mail or Username"/>
                    <input className="loginPage_text" type="text" placeholder="Password" /> 
                    <div className='login_U'>
                        <form className='remember'>
                             <input type="checkbox" />
                              <label>Remember Me</label><br></br>
                        </form>
                        
                         <div className="forgot"> Forgot your password </div>   
                    </div>
                </div>
                <button>Log In</button>
                <div className='loginSN'>
                    <hr/> <p>or Log In With</p> <hr/>
                </div>
                <div className='loginSN1'>
                    <button className='google'>
                        <img src={img2} />
                        <span>Continue with Google </span>
                    </button>
                    <button className='facebook'>
                        <img src={img3} />
                        <span>Continue with Facebook</span></button>
                </div>
                    </div>
  
        );
    }
}

export default LoginPage; 