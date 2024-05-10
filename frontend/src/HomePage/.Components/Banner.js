import React from "react";
import chart from "./Banner.png"

class Banner extends React.Component{


    render() {
        return (

            <div className="container-fluid banner-back">
                <div className="row">
                    <div className="col" style={{paddingTop: "60px"}}>
                        <span className="banner-big">Code</span>
                        <br/>
                        <span className="banner-mid">code</span>
                        <br/><br/>
                        <span className="banner-small">code</span>
                    </div>
                    <div className="col pt-5 pb-5">
                        <img src={chart} style={{width: "850px"}} alt="ppp"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;