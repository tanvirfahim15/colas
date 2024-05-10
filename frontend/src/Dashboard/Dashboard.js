import React from "react";
import Navbar from "../Utils/Navbar"
import Sidebar from "../Utils/Sidebar";
import isLoggedIn from "../Utils/.Functions/isLoggedIn"
import login from "../Utils/.Functions/login";

class Dashboard extends React.Component{

    render() {
        if(!isLoggedIn()){
            login("01551225972", "###IJ#U#(U#(#)")
            //return null;
        }
        return (
            <>
                <Navbar loggedIn={true}/>
                <Sidebar/>
                <br/>
                <br/>
                <br/>
                <div className="main font-150">

                    
                    <h1>Battle of Brains</h1>
                    <h2>2024</h2>
                </div>
            </>

        );
    }
}

export default Dashboard;