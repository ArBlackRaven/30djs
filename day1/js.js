const buttons = document.querySelectorAll('.buttons-container button');
const buttonslitter = document.querySelectorAll('.buttons-container button span');

document.addEventListener('keydown', (e) => {
    buttonslitter.forEach(button => {
        if (button.innerHTML === e.key) {
            button.parentElement.classList.add('active');
            const audio = document.getElementById(button.parentElement.dataset.sound);
            audio.currentTime = 0;
            audio.play();
        }
    });
});

document.addEventListener('keyup', (e) => {
    buttonslitter.forEach(button => {
        if (button.innerHTML === e.key) {
            button.parentElement.classList.remove('active');
        }
    });
});