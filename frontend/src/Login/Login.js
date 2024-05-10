import React from "react";
import Navbar from "../Utils/Navbar"
import Footer from "../Utils/Footer";
import LoginForm from "./.Components/LoginForm"
import login from "../Utils/.Functions/login";
import isLoggedIn from "../Utils/.Functions/isLoggedIn";
import Redirect from "../Utils/.Functions/redirect";

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            registrationDone: false
        };

    }

    onLogin = (phone, token)=>{
        login(phone,token);
        Redirect("dashboard");
    }

    render() {
        if(isLoggedIn()){
            return null;
            // return redirect
        }
        return (
            <>
                <Navbar loggedIn={false}/>
                <LoginForm onLogin={this.onLogin}/>

                <Footer/>
            </>

        );
    }
}

export default Login;