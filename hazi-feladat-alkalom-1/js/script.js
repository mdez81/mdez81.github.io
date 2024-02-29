function showImg(imageSrc){
    let popupImage = document.getElementById("popupImg");
    popupImage.src = imageSrc;
    let imagePopup =  document.getElementById("img-popUp");
    imagePopup.style.display ="block";
    document.body.style.overflow = "hidden";
}

function closeImg(){
    let imagePopup =  document.getElementById("img-popUp");
    imagePopup.style.display ="none";
    document.body.style.overflow = "auto";
}