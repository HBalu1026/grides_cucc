// const fileInput = document.getElementById("fileInput")
// const gallery = document.getElementById("gallery")

// fileInput.addEventListener('change', (e)=>{

//     let files = e.target.files
//     let reader = new FileReader()
//     reader.onload = ()=>{

//         parts = reader.result.split('\n')
//         base_url = parts[3].split(' ')[3]
//         images = []
//         for(let i = 5; i < parts.length-3; i ++){
//            parts[i].split('  ').forEach(element => {
//             element = element.trim()
//             if(element.includes('.png')){
//                 images.push(element)
//             }
//            })
//         }

//         images.forEach(img => {
//             let image = document.createElement('img')
//             let url = base_url + '\\' + img
//             image.src = url
//             gallery.appendChild(image)
//         })
//     }

//     if(files[0]){
//         reader.readAsText(files[0])
//     }
//     }
// )

const gallery = document.getElementById("gallery")
const base_url = `Girl PNG-20240412T060314Z-001\\Girl PNG\\`
const fileNames = [
    "Girl PNG 01.png",
    "Girl PNG 02.png",
    "Girl PNG 03.png",
    "Girl PNG 04.png",
    "Girl PNG 05.png",
    "Girl PNG 06.png",
    "Girl PNG 07.png",
    "Girl PNG 08.png",
    "Girl PNG 09.png",
    "Girl PNG 10.png",
    "Girl PNG 11.png",
    "Girl PNG 12.png",
    "Girl PNG 13.png",
    "Girl PNG 14.png",
    "Girl PNG 15.png",
    "Girl PNG 16.png",
    "Girl PNG 17.png",
    "Girl PNG 18.png",
    "Girl PNG 19.png",
    "Girl PNG 20.png",
    "Girl PNG 21.png",
    "Girl PNG 22.png",
    "Girl PNG 23.png",
    "Girl PNG 24.png",
    "Girl PNG 25.png",
    "Girl PNG 26.png",
    "Girl PNG 27.png",
    "Girl PNG 28.png",
    "Girl PNG 29.png"
];

fileNames.forEach(img => {
            let image = document.createElement('img')
            let url = base_url + img
            image.src = url
            gallery.appendChild(image)
        })