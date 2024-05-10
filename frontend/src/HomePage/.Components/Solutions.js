import React from "react";


class Solutions extends React.Component{


    render() {
        return (
            <div className="container">
                <div className="row mt-5 mb-5">
                    <h2 className="mb-5">All in one solution</h2>
                    <div className="col">
                        <i className="fa fa-cart-plus" style={{fontSize:"70px"}}/>
                        <br/>
                        <br/>
                        <span style={{fontSize: "150%"}}>Manage orders</span>
                    </div>
                    <div className="col">
                        <i className="fa fa-database" style={{fontSize:"70px"}}/>
                        <br/>
                        <br/>
                        <span style={{fontSize: "150%"}}>Track inventory</span>
                    </div>
                    <div className="col">
                        <i className="fa fa-bar-chart" style={{fontSize:"70px"}}/>
                        <br/>
                        <br/>
                        <span style={{fontSize: "150%"}}>Analyze progress</span>
                    </div>
                </div>
                <hr/>
            </div>

        );
    }
}

export default Solutions;