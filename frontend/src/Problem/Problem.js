import React from "react";
import Navbar from "../Utils/Navbar"
import Sidebar from "../Utils/Sidebar";
import isLoggedIn from "../Utils/.Functions/isLoggedIn"
import {useParams} from "react-router-dom";
import Redirect from "../Utils/.Functions/redirect";
import Constants from "../Utils/Constants";

function Problem() {
    let params = useParams();
    return (
        <>
            <ProblemClass id={params.id}/>
        </>

    );
}

class ProblemClass extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            problem: ""
        };
        this.getProblem();
    }

    getProblem = async () => {
        let res = await fetch(Constants.SERVER+'api/get_problem', {
            crossDomain:true,
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                phone: localStorage.getItem("phone"),
                token: localStorage.getItem("token"),
                problem_id: this.props.id
            })
        });
        let resJson = await res.json();
        if (resJson["Success"]){
            this.setState({
                problem: resJson["problem"]
            })
        }
    }

    render() {
        if(!isLoggedIn()){
            Redirect("/login");

        }
        return (
            <>
                <Navbar loggedIn={true}/>
                <Sidebar/>
                <div className="main mt-3 ps-3 pe-3" align="left">
                    <div dangerouslySetInnerHTML={{ __html: this.state.problem }} />
                </div>
                
            </>

        );
    }
}

export default Problem;