const counter = document.querySelector('#counter');
const countUp = document.querySelector('#countup');
const countDown = document.querySelector('#countdown');
const numInput = document.querySelector('#numinput');
const resetBtn = document.querySelector('#resetbutton');

counter.value = 0;

countUp.addEventListener('click', () => {
    counter.value++;
    counter.textContent = counter.value;
    tableChecker();
});

countDown.addEventListener('click', () => {
    counter.value--;
    counter.textContent = counter.value;
    tableChecker();
});

function tableChecker() {
    if(`${counter.value}` % `${numInput.value}` === 0 && `${counter.value}` > 0){
        counter.style.color = '#f4a261';
    } else {
        counter.style.color = 'white';
    }
}

resetBtn.addEventListener('click', () => {
    counter.value = 0;
    counter.style.color = 'white';
    counter.textContent = counter.value;
    numInput.value = "";
})