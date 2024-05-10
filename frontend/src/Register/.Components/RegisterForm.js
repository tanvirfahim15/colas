import React from "react";
import Constants from "../../Utils/Constants";

class RegisterForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            phone: "",
            phoneHelp: "",

            password: "",
            passwordHelp: "",

            cpassword: "",
            cpasswordHelp: "",

            email: "",
            emailHelp: "",

        };
    }



    handleChangePhone = (event) => {
        this.setState({phone: event.target.value});
    }

    handleChangePassword = (event) => {
        this.setState({password: event.target.value});
    }

    handleChangeCpassword = (event) => {
        this.setState({cpassword: event.target.value});
    }

    handleChangeEmail = (event) => {
        this.setState({email: event.target.value});
    }

    handleChangeShopName = (event) => {
        this.setState({shop_name: event.target.value});
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({
            phoneHelp: '',
            cpasswordHelp: '',
            passwordHelp: '',
            emailHelp: '',
            shop_nameHelp: ''

        })
        if (this.internalVerification() === false){
            return;
        }
        let res = await this.externalVerification();
        if ( res === false){
            return;
        }
        this.props.onRegistration(this.state.phone, res);


    }

    externalVerification = async () => {
        let res = await fetch(Constants.SERVER+'api/register', {
            crossDomain:true,
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(this.state)
        });
        let resJson = await res.json();
        if (resJson['Success']){
            return resJson['_id'];
        }
        this.setState({
            phoneHelp: resJson['phone'],
            passwordHelp:resJson['password'],
            emailHelp: resJson['email']
        })
        return false;
    }

    internalVerification = () => {
        if(this.state.password !== this.state.cpassword){
            this.setState({cpasswordHelp: "Password did not match"});
            return false;
        }
        else {
            this.setState({cpasswordHelp: ""});
        }
        return true;
    }
    render() {
        return (
            <div className="form-panel" style={{display: "inline-block"}} align="left">
                <h1 className="mb-4">Register</h1>
                <form className="font-roboto">

                    <div className="form-group mt-1 mb-3">
                        <label>Phone Number</label>
                        <input type="text" name="phone" className="form-control" id="phone" value={this.state.phone}
                               onChange={(event) => this.handleChangePhone(event)}
                               aria-describedby="phoneHelp" placeholder="Enter phone number"/>
                        <small id="phoneHelp" className="form-text text-muted text-red">
                                <span className="text-red">
                                    {this.state.phoneHelp}
                                </span>
                        </small>
                    </div>
                    <div className="form-group mt-1 mb-3">
                        <label>Password</label>
                        <input type="password" name="password" className="form-control" id="password"
                               value={this.state.password} onChange={(event) => this.handleChangePassword(event)}
                               aria-describedby="passwordHelp"
                               placeholder="Enter password"/>
                        <small id="passwordHelp" className="form-text text-muted text-red">
                                <span className="text-red">
                                    {this.state.passwordHelp}
                                </span>
                        </small>
                    </div>
                    <div className="form-group mt-1 mb-3">
                        <label>Confirm Password</label>
                        <input type="password" name="cpassword" className="form-control" id="cpassword"
                               value={this.state.cpassword} onChange={(event) => this.handleChangeCpassword(event)}
                               aria-describedby="cpasswordHelp"
                               placeholder="Enter password again"/>
                        <small id="cpasswordHelp" className="form-text text-muted text-red">
                                <span className="text-red">
                                    {this.state.cpasswordHelp}
                                </span>
                        </small>
                    </div>
                    <div className="form-group mt-1 mb-3">
                        <label>Email</label>
                        <input type="text" name="email" className="form-control" id="email" value={this.state.email}
                               onChange={(event) => this.handleChangeEmail(event)}
                               aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted text-red">
                                <span className="text-red">
                                    {this.state.emailHelp}
                                </span>
                        </small>
                    </div>

 
                    <button className="btn btn-success mt-3" onClick={(event)=>this.handleSubmit(event)}>Register</button>
                </form>
            </div>

        );
    }
}

export default RegisterForm;