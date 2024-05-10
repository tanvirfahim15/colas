import React from "react";

class ItemShortList extends React.Component{
    constructor(props) {
        super(props);
    }

    getItemJsx(item, index){
        return (
            <a href="#" key={index} className="list-group-item list-group-item-action font-40">
                <span className="font-kadwa me-2">{index+1}.</span> {item.item_name}
                <span className="badge bg-primary rounded-pill ms-1" style={{float:"right"}}>#{item.human_id}</span></a>
        )
    }

    render() {
        let items = [];
        this.state.items.map((item, index)=>{items.push(this.getItemJsx(item, index))})

        return (
            <>
                <div className="col-sm-4" style={{overflow:"hidden"}}>


                    <div className="list-group mt-2" align="left">
                        <div align="center">
                            <a href="#"
                               className="list-group-item list-group-item-action text-white bg-dark font-40">
                                {this.state.title}
                            </a>
                        </div>

                        {items}
                    </div>
                </div>
            </>
        )
    }
}

export default ItemShortList;