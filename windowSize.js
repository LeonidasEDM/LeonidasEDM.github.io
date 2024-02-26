
var down = false;
async function adjustLayout() {
    return new Promise((resolve) => {
        // Check the window width
        const width = window.innerWidth;

// Dynamically adjust styles based on window width and the 'down' state
        eduRec.style.transition = down ? 'height 0.85s ease-out' : 'height 0.9s ease-out';
        hideRec.style.transition = down ? 'top 0.9s ease-out' : 'top 0.85s ease-out';

        if (width < 900) {
            eduRec.style.height = 'calc(88rem + -12vw)';
            hideRec.style.top = down ? '0px' : 'calc(1vw + 11rem)';
            document.body.style.backgroundColor = "lightblue";
        } else if (width >= 900 && width < 1200) {
            eduRec.style.height = down ? 'calc(111rem + -50vw)' : 'calc(84rem + -53vw)';
            hideRec.style.top = down ? '650px' : 'calc(1vw + 11rem)';
            document.body.style.backgroundColor = "lightgreen";
        } else {
            eduRec.style.height = down ? '1180px' : '750px';
            hideRec.style.top = down ? '560px' : '160px';
            document.body.style.backgroundColor = "lightcoral";
        }

        // Listen for the transitionend event to resolve the promise
        let transitionToWaitOn = down ? hideRec : eduRec; // Example logic, adjust as needed
        transitionToWaitOn.addEventListener('transitionend', function handler(e) {
            // Optionally, check for specific properties if needed
            transitionToWaitOn.removeEventListener('transitionend', handler);
            resolve();
        }, { once: true });
    });
}

// Listen for resize events
window.addEventListener('resize', adjustLayout);

// Initial check in case the window size matches a condition on page load
adjustLayout();