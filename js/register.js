// * <!-- * Carlos Hernandez-Zelaya | Fall 2024 Web Application Development (CPRG-210-A) | HTML-CSS-JAVASCRIPT ASSIGNMENT -->


// * Setting up DOM Selection.

const submitbutton = document.querySelector('.submit');
const resetbutton = document.querySelector('.reset');

// * DOM selection for hiding and showing information paragraphs.
const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]')
const infoPara = document.querySelectorAll('.info')

//  Todo: Add confirmation before submitting/resetting information. When buttons are clicked, a dialog should pop up asking the user to confirm submit/reset of information, otherwise cancel and do nothing. [DONE]

// * Declaring functions that will handle logic when clicked
// * Function names: handleSubmitClick & handleResetClick

const handleSubmitClick = () => {
    // * check for empty fields
    let filledFields = true;
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            filledFields = false;
            console.log(filledFields)
        }
    })
    //* Prevent submition if fields arent filled with event.preventDefault();
    if (!filledFields) {
        alert('Please fill all the fields');
        event.preventDefault()
        return;
    }


    //* Confirm dialog if filledField = true
    let userConfirm = window.confirm('Are you sure you wish to submit this information?')
    if (!userConfirm) { //* If user does not confirm, then prevent the form from submitting with event.preventDefault()
        event.preventDefault();
    }

}

const handleResetClick = () => {
    //* Confirm dialog
    let userConfirm = window.confirm('Are you sure you wish to reset the form?')
    if (!userConfirm) { //* If user does not confirm, then prevent the form from resetting
        event.preventDefault();
    }

}




// * Adding event listeners for buttons.

submitbutton.addEventListener('click', handleSubmitClick)
resetbutton.addEventListener('click', handleResetClick)

//  Todo: Add an onFocus that displays a <p> describing the type of data that we want in the field, there are eight fields in total. Ideally one function that can handle all eight forms instead of eight seperate functions for each field. [DONE]
// ? Note to self: Remember if you ever need to iterate through multiple items - a loop is the answer. Initial attempt was to hardcode the logic for each input.

// * Handling Focus on forms

inputs.forEach((input, index) => {
    input.addEventListener('focus', () => {
        // *  * Placing the <input> and <p> next to each other gives them the same index number as the forEach loop, loops through.
        infoPara[index].classList.remove('hidden')
        infoPara[index].classList.add('shown')
        console.log(input, index)
        // * Removing "hidden" and adding "shown" on input focus.
    })

    input.addEventListener('blur', () => {
        // * Adding "hidden" and removing "shown" on input blur.
        infoPara[index].classList.remove('shown');
        infoPara[index].classList.add('hidden')
    })
})