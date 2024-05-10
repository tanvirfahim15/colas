
function IsLoggedIn(){
    return localStorage.getItem("phone")!=null;
}

export default IsLoggedIn;


