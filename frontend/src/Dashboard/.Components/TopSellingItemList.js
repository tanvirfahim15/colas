import React from "react";
import ItemShortList from "./.Components/ItemShortList";
import Constants from "../../Utils/Constants";

class TopSellingItemList extends ItemShortList{

    constructor(props) {
        super(props);
        this.state = {
            title: "Top Selling Items",
            items: []
        }
    }

    async componentDidMount() {

        let res = await fetch(Constants.SERVER+'api/get_top_selling_items', {
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
            items: resJson.items
        })
    }
}

export default TopSellingItemList;