
const counterDisplay = document.getElementById('counter-display');
const decreaseBtn = document.getElementById('decrease-btn');

const increaseBtn = document.getElementById('increase-btn');

let count = 0;
const min =0;

function updateDisplay() {
    counterDisplay.textContent = count;
    
    if (count > 0) {
        counterDisplay.style.color = 'green';
    } else if (count < 0) {
        counterDisplay.style.color = 'red';
    } 
}


increaseBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

decreaseBtn.addEventListener('click', () => {
            
    count=Math.max(0,count - 1);
    updateDisplay();
});



// Initial display update
updateDisplay();
