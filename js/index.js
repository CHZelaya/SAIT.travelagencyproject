// * <!-- * Carlos Hernandez-Zelaya | Fall 2024 Web Application Development (CPRG-210-A) | HTML-CSS-JAVASCRIPT ASSIGNMENT -->


const image = document.querySelector('.image')
const pictureContainer = document.querySelector('.picture-container')
const imgArray = [
    {
        src: '../images/banff-bridge.jpg'
    },
    {
        src: '../images/Fairmont.jpeg'
    },
    {
        src: '../images/Rimrock.jpg'
    },
    {
        src: '../images/moriane-lake.jpg'
    }
]


const descriptionArray = [
    "Banff Bridge seen in Summer",
    "Fairmont Hotel seen from the lookout",
    "The RimRock Hotel seen from one of its balconies",
    "Moraine Lake shown with its canoe's",
];

const urlArray = [
    'https://banff.ca/',
    'https://www.fairmont.com/banff-springs',
    'https://www.rimrockresort.com/',
    'https://www.banfflakelouise.com/',
]

const loadPictures = () => {

    imgArray.forEach((picture, index) => {
        // ? Note to self: you need an extra set of () around the parameters when you're using multiple parameters

        // * Creating <img> element
        let img = document.createElement('img');
        // * Setting <img src=''> from imgArray
        img.src = picture.src
        // * Adding class for styling and appending img to <a-href>
        img.classList.add('image')
        pictureContainer.appendChild(img);




        // * Handling the image indexriptions, and again adding and removing classes that provide styling while being triggered by mouseover and mouseleave
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

        //  * Adding event listener to open a new window and close it after sometime with setTimeout.

    })
};


//  * Calls the loadPictures function when the DOM has loaded
document.addEventListener('DOMContentLoaded', () => {
    loadPictures();

    // Adding event listeners to images after they are created
    const images = document.querySelectorAll('.image');
    images.forEach((image, index) => {
        image.addEventListener('click', () => {
            console.log('Image clicked:', image.src);
            // Open redirect.html and pass the URL as a query parameter
            const redirectUrl = encodeURIComponent(urlArray[index]);
            console.log(redirectUrl)
            window.open(`redirect.html?url=${redirectUrl}`, 'Redirect Window', 'height=200,width=300');
        });
    });
});

// ? I didn't know you could do this, good ol' MDN.
// ? Link: https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event