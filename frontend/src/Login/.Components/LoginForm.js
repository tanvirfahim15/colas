import React from "react";
import Constants from "../../Utils/Constants";

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            phone: "",
            phoneHelp: "",

            password: "",
            passwordHelp: "",
        };
    }

    handleChangePhone = (event) => {
        this.setState({phone: event.target.value});
    }

    handleChangePassword = (event) => {
        this.setState({password: event.target.value});
    }

    handleLogin = async (event) => {
        event.preventDefault();
        let res = await fetch(Constants.SERVER+'api/login', {
            crossDomain:true,
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(this.state)
        });
        let resJson = await res.json();
        if (resJson['Success']){
            this.props.onLogin(resJson["phone"], resJson["token"]);
            return;
        }
        this.setState({
           phoneHelp: resJson["phone"],
           passwordHelp: resJson["password"]
        });
    }

    render() {
        return (
            <>
                <br/><br/><br/>
                <div className="form-panel" style={{display: "inline-block", marginBottom: "300px"}} align="left">
                    <h1 className="mb-4">Login</h1>
                    <form className="font-roboto">
                        <div className="form-group mt-1 mb-3">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" name="phone" className="form-control" id="phone" value={this.state.phone}
                                   onChange={(event) => this.handleChangePhone(event)}
                                   aria-describedby="phoneHelp" placeholder="Enter phone number"/>
                            <small id="phoneHelp" className="form-text text-muted">
                                    <span className="text-red">
                                        {this.state.phoneHelp}
                                    </span>
                            </small>
                        </div>
                        <div className="form-group mt-1 mb-1">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" className="form-control" id="password"
                                   value={this.state.password}
                                   onChange={(event) => this.handleChangePassword(event)}
                                   aria-describedby="passwordHelp" placeholder="Enter password"/>
                            <small id="passwordHelp" className="form-text text-muted">
                                    <span className="text-red">
                                    {this.state.passwordHelp}
                                </span>
                            </small>
                        </div>
                        <button type="submit" className="btn btn-success mt-3" onClick={(event => this.handleLogin(event))}>Login</button>
                    </form>
                </div>
            </>
        );
    }

}

export default LoginForm