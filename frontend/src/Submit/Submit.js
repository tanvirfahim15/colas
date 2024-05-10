import React from "react";
import Redirect from "../Utils/.Functions/redirect";
import Navbar from "../Utils/Navbar";
import Sidebar from "../Utils/Sidebar";
import Constants from "../Utils/Constants";

class Submit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            problems: [],
            problem: "",
            code: "",
            language: "C"
        }
        this.getProblems();
    }
    getProblems = async () => {
        let res = await fetch(Constants.SERVER + 'api/get_problems', {
            crossDomain: true,
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                phone: localStorage.getItem("phone"),
                token: localStorage.getItem("token"),
            })
        });
        let resJson = await res.json();
        if (!resJson["Success"]) {
            return;
        }
        let problems = resJson["problems"];
        this.setState({
            problems: problems,
            problem: problems[0].id
        });
    }
    onProblemChange = (event) => {
        event.preventDefault();
        this.setState({
            problem: event.target.value
        })
    }
    onLanguageChange = (event) => {
        event.preventDefault();
        this.setState({
            language: event.target.value
        })
    }
    onCodeChange = (event) => {
        event.preventDefault();

        this.setState({
            code: event.target.value
        })
    }

    onSubmit = async (event)=>{
        event.preventDefault();

        let res = await fetch(Constants.SERVER+'api/submit_problem', {
            crossDomain:true,
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                phone: localStorage.getItem("phone"),
                token: localStorage.getItem("token"),

                problem:this.state.problem,
                language:this.state.language,
                code:this.state.code


            })   
        });
        let resJson = await res.json();

        if(resJson["Success"]) {
            
            Redirect("/submission/"+resJson["submission_id"]);
        }

    }

    render() {

        const problems = this.state.problems.map((problem) =>
            <option key={problem.id} value={problem.id}> {problem.id}. {problem.title}</option>
        );

        return (
            <>
                <Navbar loggedIn={true}/>
                <Sidebar/>
                <div className="main font-100" align="center">
                    <div style={{width: "80%"}} align="left">
                        <div className="form-group mt-3 mb-3">
                            <label >Choose Problem</label>
                            <select value={this.state.problem} className="form-control" onChange={(event) => this.onProblemChange(event)}>
                                {problems}
                            </select>
                                        
                            </div> 
                        <div className="form-group mt-3 mb-3">
                            <label >Choose Language</label>
                            <select value={this.state.language} className="form-control" onChange={(event) => this.onLanguageChange(event)}>
                                <option value="C"> C</option>
                                <option value="C++"> C++</option>
                                <option value="Java"> Java</option>
                            </select>
                              
                        </div>  

                        <textarea className="form-control" placeholder="Enter your code" style={{height: "500px"}} value={this.state.code}
                                              onChange={(event) => this.onCodeChange(event)}/>

                        <br/>
                        <button className="btn btn-sm btn-success" onClick={(event) => this.onSubmit(event)}
                                        style={{width: "120px", marginRight: "5px"}}>
                                    <i className="fa fa-upload" aria-hidden="true"/> Submit
                                </button>     
                    </div>
                </div>
            </>
        )
    }
}

export default Submit;