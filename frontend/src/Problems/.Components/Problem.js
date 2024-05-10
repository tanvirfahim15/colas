import React from "react";
import Redirect from "../../Utils/.Functions/redirect";


class Problem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    static getDerivedStateFromProps(props, state) {
        
        return {
            problem_id: props.problem.id,
            title: props.problem.title,
            submissions: props.problem.submissions,
            accepted: props.problem.accepted
            

        };
    }




    render() {

        return (
            <>
                
                <div style= {{cursor: "pointer"}} className="card" align="left" onClick={()=>Redirect("/problem/"+this.state.problem_id)}>
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <h2><span  className="text-muted">{this.state.problem_id}. </span>{this.state.title}</h2>
                            </div>
                            <div className="col">
                                
                            </div>
                            <div className="col" align="right">
                                Submissions: {this.state.submissions}
                                <br/>
                                Accepted: {this.state.accepted}
                            </div>

                        </div>
                        
                    </div>
                </div>
                <br/>
            </>
        )
    }
}

export default Problem;