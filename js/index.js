//


const pictureContainer = document.querySelector('.picture-container')
const imgArray = [
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

        // * Creating a-href element
        let anchor = document.createElement('a');
        // * Setting href as url in urlArray
        anchor.href = urlArray[index];
        // * <a-href> to parent <div>
        pictureContainer.appendChild(anchor);

        // * Creating <img> element
        let img = document.createElement('img');
        // * Setting <img src=''> from imgArray
        img.src = picture.src
        // * Adding class for styling and appending img to <a-href>
        img.classList.add('img')
        anchor.appendChild(img);




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

        img.addEventListener('click', () => {

        })
    })
};



//  * Calls the loadPictures function when the DOM has loaded
document.addEventListener('DOMContentLoaded', loadPictures())
// ? I didn't know you could do this, good ol' MDN.
// ? Link: https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event


// ! Testing setTimeout() and how it works below

let openWindow;
let url = 'http://www.google.ca'

const openCloseWindow = (url) => {


    setTimeout(() => {
        openWindow = window.open(url);

        if (openWindow) {
            console.log('Window opened successfully')

            setTimeout(() => {
                return closeWindow(url);

            }, 5000)
        }
    }, 1000);

}

const closeWindow = (url) => {
    setTimeout(() => {
        console.log('window close attempted')
        openWindow = window.close(url);
    }, 5000)
}
document.querySelector('.test').addEventListener('click', openCloseWindow)