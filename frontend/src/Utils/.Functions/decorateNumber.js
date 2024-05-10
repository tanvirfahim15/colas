
function DecorateNumber(num){
    if(num<1000) return num;
    let ret = "";
    ret = (num%1000).toString();
    let base = 1000;
    while(parseInt(num/base)>0){
        ret = (parseInt(num/base)%100).toString()+","+ret;
        base = base *100;
    }
    return ret;
}

export default DecorateNumber;