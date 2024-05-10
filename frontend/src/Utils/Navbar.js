import React from "react";
import logout from "./.Functions/logout"
import Redirect from "./.Functions/redirect";

class Navbar extends React.Component{

    onLogout = (event)=>{
        event.preventDefault();
        logout();
    }

    render() {
        if (this.props.loggedIn)
            return (
                <div className="container-fluid" style={{backgroundColor: "#FFF", position: "fixed", top: "0", zIndex:100}}>
                    <div className="row pt-1">
                        <div className="col mt-1 " align="left" style={{paddingLeft:"20px"}}>
                        <span style={{fontWeight: "bold",fontSize: "200%"}}>
                            <i className="fa fa-code" aria-hidden="true" style={{color: "green"}}/>&nbsp;&nbsp;colas</span>
                        </div>
                        <div className="col">
                        </div>
                        <div className="col  mt-2 " align="right" style={{paddingRight:"20px"}}>
                            <button type="button" className="btn btn-success" style={{width:"120px"}} onClick={(event)=>this.onLogout(event)}>
                                <i className="fa fa-sign-out" aria-hidden="true"/> Logout
                            </button>
                        </div>
                    </div>
                    <hr className="hr-nopad"/>
                </div>
            );
        else return (<>
            <div className="container-fluid" style={{backgroundColor: "#FFF", position: "fixed", top: "0", zIndex:100}}>
                <div className="row pt-1">
                    <div className="col mt-1 " align="left" style={{paddingLeft:"20px", cursor: "pointer"}} onClick={()=>Redirect("/")}>
                        <span style={{fontWeight: "bold",fontSize: "200%"}}>
                            <i className="fa fa-code" aria-hidden="true" style={{color: "green"}}/>&nbsp;&nbsp;colas</span>
                    </div>
                    <div className="col">
                    </div>
                    <div className="col mt-2 " align="right" style={{paddingRight:"20px"}}>
                        

                        <button type="button" className="btn btn-success" style={{width:"120px"}} onClick={(event)=>{Redirect("login")}}>
                            <i className="fa fa-sign-in" aria-hidden="true"/> Login
                        </button>
                    </div>
                </div>
                <hr className="hr-nopad"/>
            </div>
            <div className="mt-5 mb-5"></div>
            </>
        );

    }
}

export default Navbar;