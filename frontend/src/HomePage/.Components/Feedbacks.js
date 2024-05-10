import React from "react";
import Feedback from "./Feedback";

class Feedbacks extends React.Component{


    render() {
        return (

            <div className="container mt-5 mb-5 pt-5 pn-5">
                <div className="row">
                    <h2 className="mb-5">Customer feedbacks</h2>
                    <Feedback name="Mark" organization = "Facebook.com" feedback="This is so awesome" />
                    <Feedback name="Mark" organization = "Facebook.com" feedback="This is so awesome" />
                </div>
            </div>
        );
    }
}

export default Feedbacks;