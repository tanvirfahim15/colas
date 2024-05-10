
const Constants = {
    SERVER : "http://127.0.0.1:5000/",
    OTP_RESEND_INTERVAL: 180000,
    MAX_IMAGE_SIZE : 1 * 1024 * 1024,
    isFloat: (str)=>{
        let re=/^(\d*\.)?\d*$/;
        return re.test(str);
    },
    isPositiveInt: (str)=>{
        let re=/^\d*$/;
        return re.test(str);
    },
    containsOnlyDigits: (str)=>{
        let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        for(let i = 0;i<str.length;i++){
            if(!digits.includes(str.charAt(i)))
            return false;
        }
        return true;
    }
};

export default Constants;