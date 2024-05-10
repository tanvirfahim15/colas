import React from "react";
import Constants from "../../Utils/Constants";
import DecorateNumber from "../../Utils/.Functions/decorateNumber";

class StatsCards extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            total_orders: DecorateNumber(0),
            revenue: DecorateNumber(0),
            completed_orders: DecorateNumber(0),
            pending_orders: DecorateNumber(0)
        }
    }

    async componentDidMount() {
        let res = await fetch(Constants.SERVER+'api/stats', {
            crossDomain:true,
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                phone: localStorage.getItem("phone"),
                token: localStorage.getItem("token"),
            })
        });
        let resJson = await res.json();
        if(!resJson["Success"])
            return;
        this.setState({
            total_orders: DecorateNumber(resJson.total_orders),
            revenue: DecorateNumber(resJson.revenue),
            completed_orders: DecorateNumber(resJson.completed_orders),
            pending_orders: DecorateNumber(resJson.pending_orders)
        })
    }

    render() {
        return (
            <>
                <div className="col">
                    <div className="card text-white bg-myprimary mt-3">
                        <div className="card-header card-big">{this.state.total_orders}</div>
                        <div className="card-body">
                            <h5 className="card-title">Total Orders</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-white bg-orange mt-3">
                        <div className="card-header card-big">{this.state.revenue}</div>
                        <div className="card-body">
                            <h5 className="card-title">Total Revenue</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-white bg-success mt-3">
                        <div className="card-header card-big">{this.state.completed_orders}</div>
                        <div className="card-body">
                            <h5 className="card-title">Completed Orders</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-white bg-danger mt-3">
                        <div className="card-header card-big">{this.state.pending_orders}</div>
                        <div className="card-body">
                            <h5 className="card-title">Pending Orders</h5>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default StatsCards;