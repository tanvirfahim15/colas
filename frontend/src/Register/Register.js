import React from "react";
import Navbar from "../Utils/Navbar"
import Footer from "../Utils/Footer";
import RegisterForm from "./.Components/RegisterForm";
import OTPForm from "./.Components/OTPForm";
import Redirect from "../Utils/.Functions/redirect";

class Register extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            registrationDone: false
        };

    }

    onOTP = ()=>{
        Redirect("/login");
    }

    onRegistration = ( phone, _id)=>{
        this.setState({
            registrationDone: true,
            phone: phone,
            _id: _id
        });
    }

    render() {
        if(this.state.registrationDone){
            return (
                <>
                    <Navbar loggedIn={false}/>
                    <OTPForm phone={this.state.phone} _id={this.state._id} onOTP={this.onOTP}/>
                    <Footer/>
                </>

            );
        }
        return (
            <>
                <Navbar loggedIn={false}/>
                <RegisterForm onRegistration={this.onRegistration}/>
                <Footer/>
            </>

        );
    }
}

export default Register;