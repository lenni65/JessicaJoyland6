// Array of dialogue line IDs
const dialogueLines = [
    'line1',
    'line2',
    'line3',
    'line4'
];

const names = [
    '...',        // Name for the first line
    'Jessica',    // Name for the second line
    'Jessica',    // Name for the third line
    '...'         // Name for the fourth line
];

let currentDialogueIndex = 0;

// Function to show the current dialogue line
function showDialogue(index) {
    // Hide all dialogue lines
    dialogueLines.forEach(id => {
        document.getElementById(id).classList.remove('active');
    });

    // Show the current dialogue line
    document.getElementById(dialogueLines[index]).classList.add('active');

    // Update the name box
    document.querySelector('.name-box').textContent = names[index];

    const slidingImage = document.querySelector('.sliding-image');

    if (index === 1) { // Assuming index 1 is the second line
        slidingImage.classList.add('visible');
        const audio = new Audio('https://od.lk/s/ODZfNjU2NjI3NzVf/woman-laugh-6421%20%281%29.mp3');
        audio.play();
    }

    if (index === dialogueLines.length - 1) { // Assuming the last line of dialogue
        slidingImage.classList.add('faded'); // Add class to make image transparent
    } else {
        slidingImage.classList.remove('faded'); // Remove class if not the last line
    }
}

// Event listener for the dialogue box click
document.getElementById('dialogue-box').addEventListener('click', function() {
    // Move to the next dialogue line
    if (currentDialogueIndex < dialogueLines.length - 1) {
        currentDialogueIndex++;
        showDialogue(currentDialogueIndex);
    } else {
        // Optionally handle what happens when dialogue ends
        console.log('Dialogue has ended');
    }
});

// Initially display the first dialogue line
showDialogue(currentDialogueIndex);