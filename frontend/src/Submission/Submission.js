import React from "react";
import Redirect from "../Utils/.Functions/redirect";
import Navbar from "../Utils/Navbar";
import Sidebar from "../Utils/Sidebar";
import Constants from "../Utils/Constants";
import {useParams} from "react-router-dom";

function Submission() {
    let params = useParams();
    return (
        <>
            <SubmissionClass id={params.id}/>
        </>

    );
}
class SubmissionClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            verdict: "Loading"
        }
        this.getSubmission();
    }

    getSubmission = async () => {
        let res = await fetch(Constants.SERVER+'api/get_submission', {
            crossDomain:true,
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                phone: localStorage.getItem("phone"),
                token: localStorage.getItem("token"),
                submission_id: this.props.id
            })
        });
        let resJson = await res.json();
        if (resJson["Success"]){
            this.setState({
                verdict: resJson["verdict"]
            })
        }
    }
    

   
    render() {


        return (
            <>
                <Navbar loggedIn={true}/>
                <Sidebar/>
                <br/>
                <br/>
                <div className="main align-middle mt-5 pt-5 pl-2" align="center">
                    <div className="card">
                        <div className="card-body">
                    <h2 className="text-muted">{this.state.verdict}</h2></div></div>
                </div>
            </>
        )
    }
}

export default Submission;