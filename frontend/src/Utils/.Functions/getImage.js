import Constants from "../Constants";

async function getImage(id){
    let res = await fetch(Constants.SERVER+'api/get_image', {
        crossDomain:true,
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            phone: localStorage.getItem("phone"),
            token: localStorage.getItem("token"),
            image_id:id

        })
    });
    let img = await res.blob();
    let ext = "";
    if (img.type==="image/png"){
        ext = "png";
    }
    if (img.type==="image/jpeg"){
        ext = "jpg";
    }

    return new File([img], "img."+ext, {type: img.type});
}

export default getImage;


