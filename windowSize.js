


function adjustLayout() {
    // Check the window width
    const width = window.innerWidth;
    if (recResizeBool){
        // Apply conditions based on window width
        if (width < 900) {
            // Apply styles for small screens
            document.body.style.backgroundColor = "lightblue";
            recSize = 'calc(88rem + -12vw)';
            recSizeReset = 'calc(5vw + 42rem)';
        } else if (width >= 900 && width < 1200) {
            // Apply styles for medium screens
            document.body.style.backgroundColor = "lightgreen";
            recSize = 'calc(84rem + -53vw)';
            recSizeReset = 'calc(5vw + 42rem)';
        } else {
            // Apply styles for large screens
            document.body.style.backgroundColor = "lightcoral";
            recSize = 'calc(90rem + -21vw)';
            recSizeReset = 'calc(5vw + 42rem)';
        }
    }
}

// Listen for resize events
window.addEventListener('resize', adjustLayout);

// Initial check in case the window size matches a condition on page load
adjustLayout();