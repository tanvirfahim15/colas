import isLoggedIn from "../Utils/.Functions/isLoggedIn";
import Navbar from "../Utils/Navbar";
import Sidebar from "../Utils/Sidebar";
import React from "react";
import Constants from "../Utils/Constants";
import Redirect from "../Utils/.Functions/redirect";


class Submissions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            submissions: []
        };
        this.getSubmissions();
    }


    getSubmissions = async () => {
        let res = await fetch(Constants.SERVER + 'api/get_submissions', {
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
        let submissions = resJson["submissions"];
        this.setState({
            submissions: submissions
        });
    }

    render() {

        if (!isLoggedIn()) {
            Redirect("/login");
        }

       const submissions = this.state.submissions.map((submission) =>
           ( <tr>
            <td>{submission.problem_id}</td>
            <td>{submission.verdict}</td>
            <td>{submission.time}</td>
            </tr> )
        );

        
        return (
            <>
                <Navbar loggedIn={true}/>
                <Sidebar/>
                <div className="main font-100 mt-3 ps-5 pe-5" align="center">
                    
                <table className="table table-striped">
                <thead>
                <tr>
                    <th>Problem</th>
                    <th>Verdict</th>
                    <th>Submission time</th>
                </tr>
                </thead>
                <tbody>
                {submissions}
                </tbody>
            </table>


                    
                </div>
            </>
        )
    }

}

export default Submissions;