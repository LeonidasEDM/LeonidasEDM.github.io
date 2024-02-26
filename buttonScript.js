// Elements selection
var displayText = document.getElementById('displayText');
var displayImg = document.getElementById('displayImg');
var displayVid = document.getElementById('video');
var hideRec = document.getElementById('hideRec');
var eduRec = document.getElementById('eduRec');
let text = '';
let img = '';
var down = false;
var first = true;

// Function to move the hideRect up or down
function updateContent(btn) {
    displayVid.style.display = btn === 'button3' ? 'block ' : 'none';
    displayImg.style.display = btn === 'button3' ? 'none' : 'block';

    switch (btn) {
        case 'button1': text = 'During my second semester at FGCU, I was introduced to the fundamentals of C++ and engaged in a collaborative endeavor with peers, crafting a console-based password manager. Our creation possessed straightforward login and logout features, serving as an insightful introduction to software development. Following the completion of our group project, I seized the opportunity to transform it into a personal venture, using the tools of the Simple and Fast Multimedia Library(SFML).Through diligent effort and experimentation, I evolved the project into a fully functional GUI application using serialization techniques.';
            img = "passwordMNG.png";
            break;
        case 'button2': text = 'With the emergence of AI and its rapid evolution, I was inspired to learn some of its concepts and understand its roots. This is when I decided to take Data Mining which quickly became a favorite course. So much so that I put dozens of hours into training a machine learning algorithm to  estimating qualities of wine! This algorithm would analyze 6000 different record with 10+ attributes each to determine an optimal quality rating for each. One might even call it a miniature AI that autonomously navigated the complexities of wine evaluation.';
            img = "MachineLRN.png";
            break;
        case 'button3': text = 'A miscellaneous project that I worked on in High School was an animation I created using Storyboard and Adobe Premier. I call it a miscellaneous project because I\'ve never used these environments before, nor have I been accustomed to drawing or designing anything. Against all odds however, I ended up winning the Digital Lee Animation Competition in 2021. This experience shows I am capable of embracing challenges in unfamiliar situations and it highlights my ability to venture into uncharted territories.';
            displayVid.style.display = 'block';
            break;
        default: text = 'Default Text';
    }

}

// Function to update the display text and manage animations
async function updateText(buttonId) {
    down = false;

    // Wait for layout adjustments to complete before hiding content
    await adjustLayout();


    await updateContent(buttonId);

    displayText.textContent = text;
    displayImg.src = img;

    // Introduce a short delay before sliding the rectangle back down
    setTimeout(async () => {
        down = true;
        await adjustLayout();
    }, 500);
}

// Ensure event listeners are correctly attached to buttons
document.querySelectorAll('.list').forEach(button => {
    button.addEventListener('click', function () {
        updateText(this.id);
    });
});
