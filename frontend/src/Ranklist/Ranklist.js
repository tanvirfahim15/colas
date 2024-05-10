import isLoggedIn from "../Utils/.Functions/isLoggedIn";
import Navbar from "../Utils/Navbar";
import Sidebar from "../Utils/Sidebar";
import React from "react";
import Constants from "../Utils/Constants";
import Redirect from "../Utils/.Functions/redirect";


class Ranklist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ranklist: []
        };
        this.getRanklist();
    }


    getRanklist = async () => {
        let res = await fetch(Constants.SERVER + 'api/get_ranklist', {
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
        let ranklist = resJson["ranklist"];
        this.setState({
            ranklist: ranklist
        });
    }


    render() {

        if (!isLoggedIn()) {
            Redirect("/login");
        }

       let ranklist =[]
       let first_row = []
       for(const r in this.state.ranklist){
            
            let row = []
            for (const c in this.state.ranklist[r]){
                if(r==0){
                    row.push(<th key={c}>{this.state.ranklist[r][c]}</th>)
                    continue;
                }
                row.push(<td key={c}>{this.state.ranklist[r][c]}</td>)
            }
            if (r==0) {
                first_row.push((
                    <tr key={r}>{row}</tr>
                ))
                continue;
            }
            ranklist.push((
                <tr key={r}>{row}</tr>
            ))
       }
       

        
        return (
            <>
                <Navbar loggedIn={true}/>
                <Sidebar/>
                <div className="main font-100 mt-3 ps-5 pe-5" align="center">
                    
                <table className="table table-striped">
                    <thead>
                    {first_row}
                    </thead>
                <tbody>
                {ranklist}
                </tbody>
            </table>


                    
                </div>
            </>
        )
    }

}

export default Ranklist;