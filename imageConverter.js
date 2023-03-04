//hiding preloader when main content is loaded
let myPreloader = document.getElementById("css-loader");
let convertImageSection = document.getElementById("convert-image-section");
const hidePreloader = () => {
    setTimeout(() => {
        myPreloader.style.display = "none";
        convertImageSection.style.display = "block";
    }, 1500);
}

let myImage = document.getElementById("my-image");
let myFile = {};
let downloadURL = "";
let conversionBtn = document.getElementById("image-conversion-btn");
let conversionBtnText = document.getElementById("conversion-btn-text");
let downloadPdfLink = document.getElementById("pdf-downloading-link");
let imagePreview = document.getElementById("image-preview");
let attachedFileExt = "";
let isAttached = false;

const allowedFileExtensions = ['png', 'jpg', 'jpeg', 'bmp', 'gif'];

myImage.onchange = function(event){//taking the file attached by the user
    isAttached = true;
    myFile = event.target.files[0];
    attachedFileExt = myFile.name.split(".")[1];
    console.log(attachedFileExt);
}

async function convertImage(){
    if(isAttached == true){
        let notAllowedExtCount = 0;
        allowedFileExtensions.forEach((item)=>{//checking if attached file's extension is valid or not
            if(attachedFileExt != item){
                notAllowedExtCount++;
            }
        });

        if(notAllowedExtCount == allowedFileExtensions.length){//if attached file extension is not valid
            conversionBtn.innerHTML = 'Please select an image file';
            setTimeout(() => {
                location.reload();
            }, 1000);
        }

        else{//if attached file extension is valid
            
        //function to convert attached file to a Base64 encoded format
        const toBase64 = file => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });

        const file64 = await toBase64(myFile);//converting the attached file to a Base64 encoded format

        let res = await fetch("https://v2.convertapi.com/convert/images/to/pdf?Secret=EQqiIbnaQ6NN6PhR",
        {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
                {
                    "Parameters": [
                        {
                            "Name": "Files",
                            "FileValues": [
                                {
                                    "Name": myFile.name,//name of the file that user is attaching
                                    "Data": file64.split(",")[1].toString()//converting JSON format to String
                                }
                            ]
                        },
                        {
                            "Name": "StoreFile",
                            "Value": true
                        }
                    ]
                }
            )
        })
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            let timer = 3;
            let intervalId = setInterval(() => {
                conversionBtn.innerHTML = `Converting in ${timer}`;
                timer--;
            if(timer == 0){
                conversionBtn.innerHTML = 'Converted Successfully';
                downloadURL = data.Files[0].Url;
                downloadPdfLink.style.display = 'block';
                downloadPdfLink.setAttribute("href", downloadURL);
                clearInterval(intervalId);
            }
        }, 1000);
        })
        .catch((error)=>{
            conversionBtn.innerHTML = 'Try Again';
        });
        }           
    }

    else{
        conversionBtn.innerHTML = 'Select an image';
        setTimeout(() => {
            conversionBtn.innerHTML = 'Convert';
        }, 1000);
    }
}