import React from "react";


class Sidebar extends React.Component {

    render() {
        return (
            <div className="sidenav">
                <a href="/dashboard">
                    <div className="sidenav-item">
                        <i className="fa fa-home sidenav-icon"
                           aria-hidden="true"/> Dashboard
                    </div>
                </a>
                
                <a href="/problems">
                    <div className="sidenav-item">
                        <i className="fa fa-question-circle sidenav-icon"
                           aria-hidden="true"/> Problems
                    </div>
                </a>
                <a href="/submit">
                    <div className="sidenav-item">
                        <i className="fa fa-upload sidenav-icon"
                           aria-hidden="true"/> Submit a code
                    </div>
                </a>
                
                <a href="/submissions">
                    <div className="sidenav-item">
                        <i className="fa fa-inbox sidenav-icon" aria-hidden="true"/> Submissions
                    </div>
                </a>
                <a href="/ranklist">
                    <div className="sidenav-item">
                        <i className="fa fa-list sidenav-icon"
                           aria-hidden="true"/> Ranklist
                    </div>
                </a>
                <a href="/">
                    <div className="sidenav-item"/>
                </a>
            </div>
        );

    }
}

export default Sidebar;