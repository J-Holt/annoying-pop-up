const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const wrapper = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

// annoying timed popup set for 4 seconds

setTimeout(()=>{
    popup.style.display = 'block';
}, 4000)

///opens the popup when the user clicks the button

button.addEventListener('click', () => {
    popup.style.display = 'block';
});


//closes the popup window when user clicks the x 
close.addEventListener('click', e => {
    popup.style.display = 'none';
});

/// close popup is user clicks outside the popup content window
wrapper.addEventListener('click', (e) => {
    if(e.target.className == "popup-wrapper") {
        popup.style.display = 'none';
    }
});