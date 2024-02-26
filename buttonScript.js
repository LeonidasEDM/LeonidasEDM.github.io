// Elements selection
var displayText = document.getElementById('displayText');
var displayImg = document.getElementById('displayImg');
var hideRec = document.getElementById('hideRec');
var eduRec = document.getElementById('eduRec');
let text = '';
let img = '';
var down = false;


// Function to move the hideRect up or down
function moveHideRect(btn) {
    
    return new Promise(resolve => {
        displayImg.style.opacity = btn === 'button3' ? '0' : '1';
        switch (btn) {
            case 'button1': text = 'During my second semester at FGCU, I was introduced to the fundamentals of C++ and engaged in a collaborative endeavor with peers, crafting a console-based password manager. Our creation possessed straightforward login and logout features, serving as an insightful introduction to software development. Following the completion of our group project, I seized the opportunity to transform it into a personal venture, using the tools of the Simple and Fast Multimedia Library(SFML).Through diligent effort and experimentation, I evolved the project into a fully functional GUI application using serialization techniques.';
                img = "passwordMNG.png"; 
                break;
            case 'button2': text = 'With the emergence of AI and its rapid evolution, I was inspired to learn some of its concepts and understand its roots. This is when I decided to take Data Mining which quickly became a favorite course. So much so that I put dozens of hours into training a machine learning algorithm to  estimating qualities of wine! This algorithm would analyze 6000 different record with 10+ attributes each to determine an optimal quality rating for each. One might even call it a miniature AI that autonomously navigated the complexities of wine evaluation.';
                img = "MachineLRN.png"; 
                break;
            case 'button3': text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod, odio a aliquet bibendum, nunc ex pharetra tellus, sed commodo enim elit vel lorem. Sed vel arcu eget augue auctor eleifend id ac velit. Integer hendrerit, libero in gravida aliquet, nulla urna bibendum est, nec vestibulum risus ante nec odio. Suspendisse potenti. Curabitur nec libero nec eros euismod pharetra. Etiam vel ipsum eu odio condimentum lacinia';
                break;
            default: text = 'Default Text';
        }
       
      
        // Wait for the eduRec transition to end before resolving
        eduRec.addEventListener('transitionend', () => setTimeout(resolve, 100), { once: true }); // Adding a 100ms delay
    });
}

// Function to update the display text and manage animations
async function updateText(buttonId) {
    down = false;

    // Wait for layout adjustments to complete before hiding content
    await adjustLayout();

    // Now proceed with hiding and updating content
    await moveHideRect(buttonId);

    displayText.textContent = text;
    displayImg.src = img;

    // Introduce a short delay before sliding the rectangle back down
    setTimeout(async () => {
        down = true;

        // Adjust layout again if necessary, waiting for any transitions
        await adjustLayout();

        // Finally, move down to reveal the updated content
        await moveHideRect(buttonId);
    }, 500); // Adjust delay as needed
}

// Ensure event listeners are correctly attached to buttons
document.querySelectorAll('.list').forEach(button => {
    button.addEventListener('click', function () {
        updateText(this.id);
    });
});
