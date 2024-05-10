import React from "react";

class Feedback extends React.Component{


    render() {
        return (

            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title"><i className="fa fa-user" aria-hidden="true"/>{this.props.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{this.props.organization}</h6>
                        <p className="card-text">{this.props.feedback}</p>
                    </div>
                </div>
            </div>

        );
    }
}

export default Feedback;