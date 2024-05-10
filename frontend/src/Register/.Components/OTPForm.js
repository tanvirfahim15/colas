import React from "react";
import Constants from "../../Utils/Constants";

class OTPForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            otp: "",
            otpHelp: "",

            resend: "waiting",

            timer: Constants.OTP_RESEND_INTERVAL

        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => {
                this.setState({

                    timer: Math.max(0, this.state.timer - 1000)
                })
                if (this.state.timer === 0) {
                    this.setState({
                        resend: "active"
                    })
                }
            },
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    handleChangeOTP = (event) => {
        this.setState({otp: event.target.value});
    }


    handleSubmit = async (event) => {
        event.preventDefault();
        let res = await fetch(Constants.SERVER + 'api/verify_OTP', {
            crossDomain: true,
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: this.props._id,
                username: this.props.username,
                phone: this.props.phone,
                OTP: this.state.otp
            })
        });
        let resJson = await res.json();
        if (resJson["Success"]) {
            this.props.onOTP();
            return;
        }
        this.setState({
            otpHelp: resJson["msg"]
        });

    }

    handleResend = async (event) => {
        event.preventDefault();
        this.setState({
            resend: "waiting",
            timer: Constants.OTP_RESEND_INTERVAL
        });
        let res = await fetch(Constants.SERVER + 'api/resend_OTP', {
            crossDomain: true,
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: this.props._id
            })
        });
        let resJson = await res.json();
        if (resJson["Success"] === true && resJson["otp_count"] >= 3) {
            this.setState({
                resend: "disabled"
            });
            clearInterval(this.timerID);
        }
        else if (resJson["Success"]===false){

            this.setState({
                otpHelp: resJson["msg"],
                resend: "disabled"
            });
            clearInterval(this.timerID);
        }
    }


    render() {
        let resend = null;
        if (this.state.resend === "active") {
            resend = (
                <a href="/" style={{cursor: "pointer", textDecoration: "none"}} className="text-blue"
                   onClick={(event) => this.handleResend(event)}>Resend</a>
            );
        } else if (this.state.resend === "waiting") {
            resend = (
                <span style={{cursor: "text", textDecoration: "none"}}
                   className="text-grey"> Resend({Math.floor(this.state.timer / 60000)}:{("0" + (this.state.timer % 60000) / 1000).slice(-2)})</span>
            )
        } else {
            resend = (
                <></>
            )
        }
        return (
            <>
                <br/>
                <br/>
                <div className="form-panel" style={{display: "inline-block"}} align="left">
                    <h1 className="mb-4">Verify </h1>
                    OTP has been sent to {this.props.phone}. {resend}
                    <br/>
                    <form className="font-roboto">
                        <div className="form-group mt-1 mb-3">
                            <label>OTP</label>
                            <input type="text" className="form-control"
                                   value={this.state.otp} onChange={(event) => this.handleChangeOTP(event)}
                                   placeholder="Enter OTP"/>
                            <small id="usernameHelp" className="form-text text-muted">
                                <span className="text-red">
                                    {this.state.otpHelp}
                                </span>
                            </small>
                        </div>
                        <button className="btn btn-success mt-3" onClick={(event) => this.handleSubmit(event)}>Verify
                        </button>
                    </form>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/></>

        );
    }
}

export default OTPForm;