
async function adjustLayout() {
    return new Promise((resolve, reject) => {
        // Existing logic to adjust layout
        const width = window.innerWidth;

        // Set the transition duration based on the 'down' state
        let transitionDuration = first ? 0 : down ? 850 : 900;
        first = false;

        // Dynamically adjust styles based on window width and the 'down' state
        eduRec.style.transition = down ? 'height 0.85s ease-out' : 'height 0.9s ease-out';
        hideRec.style.transition = down ? 'top 0.9s ease-out' : 'top 0.85s ease-out';

        if (width < 900) {
            eduRec.style.height = down ? 'calc(144rem - 50vw)' : 'calc(88rem + -12vw)';
            hideRec.style.top = down ? 'calc(-22vw + 76rem)' : 'calc(5vw + 23rem)';

        } else if (width >= 900 && width < 1200) {
            eduRec.style.height = down ? 'calc(111rem + -50vw)' : 'calc(84rem + -53vw)';
            hideRec.style.top = down ? '650px' : 'calc(1vw + 11rem)';

        } else {
            eduRec.style.height = down ? '1180px' : '750px';
            hideRec.style.top = down ? '560px' : '160px';

        }
        setTimeout(resolve, transitionDuration);
    });
}


// Listen for resize events
window.addEventListener('resize', adjustLayout);

// Initial check in case the window size matches a condition on page load
adjustLayout();