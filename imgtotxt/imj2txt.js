// const fileSelector = document.querySelector("input")
// const start = document. querySelector( "button")
// const img = document. querySelector("img")
// const progress = document. querySelector("progress")
// const textarea = document. querySelector("textarea")

// fileSelector.onchange = () => {
//     var file = fileSelector.files[0]
//     var imgUrl = window.URL.createObjectURL(new Blob([file], { type: 'image/jpg' }))
//     img.src = imgUrl
// }

// start.onclick = () => {
//     textarea.innerHTML = ''
//     const rec = new Tesseract.TesseractWorker();
//     rec.recognize(fileSelector.files[0])
//         .progress(function (response) {
//             if(response.status == 'recognizing text'){
//                 progress.innerHTML = response.status + '   ' + response.progress
//             }else{
//                 progress.innerHTML = response.status
//             }
//         })
//         .then(function (data) {
//             textarea.innerHTML = data.text
//             progress.innerHTML = "Done"
//         })
// }
const fileSelector = document.querySelector("input");
const start = document.querySelector("button");
const img = document.querySelector("img");
const progress = document.querySelector("progress");
const textarea = document.querySelector("textarea");

// External array of animal medicines
const animalMedicines = ["Amoxicillin", "Enrofloxacin", "Tylosin", "Ivermectin", "Fenbendazole", "Metronidazole"];

fileSelector.onchange = () => {
    var file = fileSelector.files[0];
    var imgUrl = window.URL.createObjectURL(new Blob([file], { type: 'image/jpg' }));
    img.src = imgUrl;
};

start.onclick = () => {
    textarea.innerHTML = '';
    const rec = new Tesseract.TesseractWorker();
    rec.recognize(fileSelector.files[0])
        .progress(function (response) {
            if (response.status == 'recognizing text') {
                progress.innerHTML = response.status + '   ' + response.progress;
            } else {
                progress.innerHTML = response.status;
            }
        })
        .then(function (data) {
            const recognizedText = data.text;
            //textarea.innerHTML = recognizedText;
            //progress.innerHTML = "Done";

            // Check if any medicine is present in the recognized text
            animalMedicines.forEach(medicine => {
                if (recognizedText.includes(medicine)) {
                    textarea.innerHTML =medicine;
                    progress.innerHTML = "Done";
                }
                // else{
                //     textarea.innerHTML ="Error";
                //     progress.innerHTML = "Done";
                // }
            });
        });
};
