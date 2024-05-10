import React from "react";
import Navbar from "../Utils/Navbar"
import Banner from "./.Components/Banner";
import Solutions from "./.Components/Solutions";
import Packages from "./.Components/Packages";
import Feedbacks from "./.Components/Feedbacks";
import Footer from "../Utils/Footer";
import isLoggedIn from "../Utils/.Functions/isLoggedIn";
import Redirect from "../Utils/.Functions/redirect";

class Home extends React.Component{

    render() {
        if(isLoggedIn()){
            Redirect("/dashboard");
        }
        return (
            <>
                <Navbar loggedIn={false}/>
                <Banner/>
                <Solutions/>
                <Packages/>
                <Footer/>
            </>

        );
    }
}

export default Home;