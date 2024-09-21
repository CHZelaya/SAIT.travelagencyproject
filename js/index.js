// 


let pictureContainer = document.querySelector('.picture-container')
let imgArray = [
    {
        src: '../images/banff-bridge.jpg'
    },
    {
        src: '../images/Fairmont.jpg'
    },
    {
        src: '../images/Rimrock.jpg'
    },
    {
        src: '../images/moriane-lake.jpg'
    }
]

let descriptionArray = [
    "Banff Bridge seen in Summer",
    "Fairmont Hotel seen from the lookout",
    "The RimRock Hotel seen from one of its balconies",
    "Moraine Lake shown with its canoe's",
];
let loadPictures = () => {

    console.log('function is being called')
    imgArray.forEach((picture, index) => {
        // ? Note to self: you need an extra set of () around the parameters when you're using multiple parameters
        let img = document.createElement('img'); //* Creating an img element
        img.src = picture.src //* assigning the source of the image from the imgArray
        img.classList.add('img') //* adding a class for styling purposes
        pictureContainer.appendChild(img); //* appending the child to the already existing div.


        // * Handling the image descriptions, and again adding and removing classes that provide styling while being triggered by mouseover and mouseleave
        let description = document.createElement('p');
        description.textContent = descriptionArray[index];
        description.classList.add('hidden')
        pictureContainer.appendChild(description)

        img.addEventListener('mouseover', () => {
            description.classList.remove('hidden')
            description.classList.add('shown');

        })

        img.addEventListener('mouseleave', () => {
            description.classList.remove('shown');
            description.classList.add('hidden');
        })
    })
};



//  * Calls the loadPictures function when the DOM has loaded
document.addEventListener('DOMContentLoaded', loadPictures())
// ? I didn't know you could do this, good ol' MDN.
// ? Link: https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event