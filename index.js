const uploadImageInput = document.getElementById("uploadImage");
uploadImageInput.onchange = onChange;

function onChange(event) {
    const imageElement = document.getElementById("image");
    imageElement.src = URL.createObjectURL(event.target.files[0]);
    imageElement.style.width = "100px"
    imageElement.style.height = "100px"
}