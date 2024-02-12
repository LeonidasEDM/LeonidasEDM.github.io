// Elements selection
var displayText = document.getElementById('displayText');
var hideRect = document.getElementById('hideRec');
var eduRec = document.getElementById('eduRec');
var firstIteration = true;

// Function to move the hideRect up or down
function moveHideRect(down = false) {
    return new Promise(resolve => {
        
        hideRect.style.transform = down ? 'translateY(200px)' : 'translateY(0)';
        var eduRecHeight = eduRec.offsetHeight; // Get the actual height
        eduRec.style.height = down ? (eduRecHeight + 250) + 'px' : !firstIteration ? (eduRecHeight - 250) + 'px' : (eduRecHeight) + 'px';

        // Assuming you're using transition for hideRect
        hideRect.addEventListener('transitionend', () => {
            resolve();
        }, { once: true });
    });
}

// Function to update the display text and manage animations
// Function to update the display text and manage animations
async function updateText(buttonId) {
    // Move hideRect up to temporarily hide the text while updating
    await moveHideRect(false); // Move up to hide

    // Determine the new text based on buttonId
    let text = '';
    switch (buttonId) {
        case 'button1': text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula, tortor a blandit malesuada, urna ligula hendrerit urna, non vol nia, eget consequat risus suscipit. Fusce ut consectetur libero. Curabitur vehicula, tortor a blandit malesuada, urna ligula hendrerit urna, non vol lacinia, eget consequat risus suscipit. Fusce ut consectetur libero. Curabitur vehicula, tortor a blandit malesuada, urna ligula hendrerit urna, non volutpat velit metus non purus. Sed ut ultricies ligula, a fermentum ligula. Suspendisse eu velit sit amet risus dapibus malesuada. Sed auctor libero sit amet metus dictum, ac mattis ex efficitur. Etiam eget turpis vel odio vehicula efficitur. Proin luctus eget elit sit amet interdum.';
            break;
        case 'button2': text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra libero eget justo nia, eget consequat risus suscipit. Fusce ut consectetur libero. Curabitur vehicula, tortor a blandit malesuada, urna ligula hendrerit urna, non vol lacinia, eget consequat risus suscipit. Fusce ut consectetur libero. Curabitur vehicula, tortor a blandit malesuada, urna ligula hendrerit urna, non volutpat velit metus non purus. Sed ut ultricies ligula, a fermentum ligula. Suspendisse eu velit sit amet risus dapibus malesuada. Sed auctor libero sit amet metus dictum, ac mattis ex efficitur. Etiam eget turpis vel odio vehicula efficitur. Proin luctus eget elit sit amet interdum.';
            break;
        case 'button3': text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod, odio a aliquet bibendum, nunc ex pharetra tellus, sed commodo enim elit vel lorem. Sed vel arcu eget augue auctor eleifend id ac velit. Integer hendrerit, libero in gravida aliquet, nulla urna bibendum est, nec vestibulum risus ante nec odio. Suspendisse potenti. Curabitur nec libero nec eros euismod pharetra. Etiam vel ipsum eu odio condimentum lacinia'; break;
            break;
        default: text = 'Default Text';
    }

    // Update the text immediately after hideRect has moved up
    displayText.textContent = text;

    // Introduce a short delay before sliding the rectangle back down to reveal the text
    // This delay allows the user to perceive that the text has been updated
    setTimeout(async () => {
        await moveHideRect(true); // Move down to reveal after a delay
    }, 500); // Adjust the delay as needed (500ms as an example)
}

// Ensure event listeners are correctly attached to buttons
document.querySelectorAll('.list').forEach(button => {
    button.addEventListener('click', function () {
        updateText(this.id);
        firstIteration = false;
    });
});
