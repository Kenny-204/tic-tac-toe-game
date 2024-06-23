'use strict ';
const message = document.querySelector('.p21');
const box = document.querySelectorAll('.item');
const newGame = document.querySelector('.new');
activePlayer = 0;
playing = true;
function init() {
    for (let i = 0; i < box.length; i++) {
        box[i].textContent = '';
    }
    message.textContent = ' X goes First...';
    playing = true;
}
;
// console.log(box)
for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', function () {




        if (box[i].textContent == '' && (activePlayer == 0) && playing) {
            box[i].textContent = 'X';
            activePlayer = 1;

        }
        if (box[i].textContent == '' && (activePlayer == 1) && playing) {
            box[i].textContent = 'O';
            activePlayer = 0;

        }

        if (((box[0].textContent == 'X') && (box[1].textContent == 'X') && box[2].textContent == 'X') || ((box[3].textContent == 'X') && (box[4].textContent == 'X') && box[5].textContent == 'X') || ((box[6].textContent == 'X') && (box[7].textContent == 'X') && box[8].textContent == 'X') || ((box[0].textContent == 'X') && (box[3].textContent == 'X') && box[6].textContent == 'X') || ((box[1].textContent == 'X') && (box[4].textContent == 'X') && box[7].textContent == 'X') || ((box[2].textContent == 'X') && (box[5].textContent == 'X') && box[8].textContent == 'X') || ((box[0].textContent == 'X') && (box[4].textContent == 'X') && box[8].textContent == 'X') || ((box[2].textContent == 'X') && (box[4].textContent == 'X') && box[6].textContent == 'X')) {
            message.textContent = 'X wins';

            playing = false;
        }
        else if (((box[0].textContent == 'O') && (box[1].textContent == 'O') && box[2].textContent == 'O') || ((box[3].textContent == 'O') && (box[4].textContent == 'O') && box[5].textContent == 'O') || ((box[6].textContent == 'O') && (box[7].textContent == 'O') && box[8].textContent == 'O') || ((box[0].textContent == 'O') && (box[3].textContent == 'O') && box[6].textContent == 'O') || ((box[1].textContent == 'O') && (box[4].textContent == 'O') && box[7].textContent == 'O') || ((box[2].textContent == 'O') && (box[5].textContent == 'O') && box[8].textContent == 'O') || ((box[0].textContent == 'O') && (box[4].textContent == 'O') && box[8].textContent == 'O') || ((box[2].textContent == 'O') && (box[4].textContent == 'O') && box[6].textContent == 'O')) {
            message.textContent = 'O wins';
            playing = false;
        }
        // else {message.textContent = 'It`s a draw'}
    });
}
;
newGame.addEventListener('click', init);
