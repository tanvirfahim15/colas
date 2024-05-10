import React from "react";

class Packages extends React.Component{


    render() {
        return (

            <div className="container mt-5 mb-5">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th> </th>
                        <th style={{fontSize: "350%"}}>Basic</th>
                        <th style={{fontSize: "350%"}}>Pro</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Number of products</td>
                        <td>up to 20</td>
                        <td>up to 50</td>
                    </tr>
                    <tr>
                        <td>Number of orders</td>
                        <td>up to 100/month</td>
                        <td>up to 1000/month</td>
                    </tr>
                    <tr>
                        <td>Progress report</td>
                        <td><i className="fa fa-check" style={{color: "green"}} aria-hidden="true"/></td>
                        <td><i className="fa fa-check" style={{color: "green"}} aria-hidden="true"/></td>
                    </tr>
                    <tr>
                        <td>Website</td>
                        <td><i className="fa fa-check" style={{color:"green"}} aria-hidden="true"/></td>
                        <td><i className="fa fa-check" style={{color:"green"}} aria-hidden="true"/></td>
                    </tr>
                    <tr>
                        <td>SMS</td>
                        <td>up to 100/month</td>
                        <td>up to 1000/month</td>
                    </tr>
                    <tr>
                        <td>Custom Domain</td>
                        <td><i className="fa fa-times" style={{color: "red"}} aria-hidden="true"/></td>
                        <td><i className="fa fa-check" style={{color: "green"}} aria-hidden="true"/></td>
                    </tr>
                </tbody>
                <thead>
                <tr>
                    <th> </th>
                    <th><span style={{fontSize: "150%"}}>BDT 500</span><span style={{fontSize: "80%"}}>/month</span></th>
                    <th><span style={{fontSize: "150%"}}>BDT 1000</span><span style={{fontSize: "80%"}}>/month</span></th>
                </tr>
                </thead>
            </table>
            </div>
        );
    }
}

export default Packages;