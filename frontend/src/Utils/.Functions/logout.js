import Constants from "../Constants";
import Redirect from "./redirect";

function Logout(){
    let token = localStorage.getItem("token");
    fetch(Constants.SERVER+'api/logout', {
        crossDomain:true,
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            token: token
        })
    });

    localStorage.removeItem('phone');
    localStorage.removeItem('token');
    Redirect("/");
}

export default Logout;