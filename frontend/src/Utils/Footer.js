import React from "react";

class Footer extends React.Component{

    render() {
        return (
            <div className="container-fluid footer-back pt-5 pb-5">
                <div className="container pt-5 pb-5">
                    <div className="row">
                        <div className="col" align="left">
                            <span className="footer-big">About us</span><br/>
                            <span style={{color:"grey"}}>We are a SAAS based startup.</span>
                        </div>
                        <div className="col" align="left">
                            <span className="footer-big"/>
                        </div>
                        <div className="col" align="left">
                            <span className="footer-big">Contact us</span><br/>
                            <span style={{color:"grey"}}><i className="fa fa-envelope-o" aria-hidden="true"/> colas@gmail.com</span><br/>
                            <span style={{color:"grey"}}><i className="fa fa-link" aria-hidden="true"/> colas </span>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Footer;