// Scroll to specific values
// scrollTo is the same
function Scrollto() {
    window.scroll({
        top: 10,
        left: 0,
        behavior: 'smooth'
    });
}

// Scroll certain amounts from current position 
function ScrollBy() {
    window.scrollBy({
        top: 300, // could be negative value
        left: 0,
        behavior: 'smooth'
    });
}

// Scroll to a certain element
function Scr() {
    document.querySelector('#Education').scrollIntoView({
        behavior: 'smooth'
    });
}