function login(phone, token) {
    localStorage.setItem("phone", phone);
    localStorage.setItem("token", token);
}

export default login;