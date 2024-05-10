import isLoggedIn from "../Utils/.Functions/isLoggedIn";
import Navbar from "../Utils/Navbar";
import Sidebar from "../Utils/Sidebar";
import React from "react";
import Constants from "../Utils/Constants";
import Redirect from "../Utils/.Functions/redirect";
import Problem  from "./.Components/Problem";


class Problems extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            problems: []
        };
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
            problems: problems
        });
    }

    render() {

        if (!isLoggedIn()) {
            Redirect("/login");
        }

       const problems = this.state.problems.map((problem) =>
            <Problem key={problem.id} problem={problem} />
        );

        
        return (
            <>
                <Navbar loggedIn={true}/>
                <Sidebar/>
                <div className="main font-100 mt-3 ps-5 pe-5" align="center">
                    
                        {problems}


                    
                </div>
            </>
        )
    }

}

export default Problems;